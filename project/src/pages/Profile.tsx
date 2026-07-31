import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, GraduationCap, MapPin, Globe, Edit3, Key, Trash2, LogOut,
  Save, X, Award, Clock, Sparkles, FileText, AlertCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { supabase, type Profile, type CareerReport } from '@/lib/supabase';
import { EDUCATION_OPTIONS } from '@/lib/careerEngine';

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [reports, setReports] = useState<CareerReport[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<Profile>>({});
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [tab, setTab] = useState<'details' | 'education' | 'reports'>('details');

  useEffect(() => {
    if (!user) {
      navigate('/');
      return;
    }
    (async () => {
      const { data: prof } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();
      setProfile(prof as Profile | null);
      setEditForm(prof as Partial<Profile> || {});

      const { data: reps } = await supabase
        .from('career_reports')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      setReports((reps as CareerReport[]) || []);
      setLoading(false);
    })();
  }, [user, navigate]);

  const handleSave = async () => {
    if (!user) return;
    const { error } = await supabase.from('profiles').upsert({
      ...editForm,
      user_id: user.id,
      updated_at: new Date().toISOString(),
    });
    if (!error) {
      setProfile(editForm as Profile);
      setEditing(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    await supabase.from('profiles').delete().eq('user_id', user.id);
    await supabase.from('career_reports').delete().eq('user_id', user.id);
    await supabase.auth.signOut();
    navigate('/');
  };

  const inputCls = 'w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500';
  const labelCls = 'text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5 block';

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
        </div>
        <Footer />
      </div>
    );
  }

  const tabs = [
    { id: 'details' as const, label: 'Personal Details', icon: User },
    { id: 'education' as const, label: 'Education Details', icon: GraduationCap },
    { id: 'reports' as const, label: 'Saved Reports', icon: FileText },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="relative grid-bg">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Profile header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 mb-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="w-24 h-24 rounded-full gradient-btn flex items-center justify-center text-white font-bold text-3xl glow flex-shrink-0">
                {(profile?.full_name || user?.email || '?').charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h1 className="text-2xl font-bold">{profile?.full_name || 'Complete your profile'}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
                {profile?.education_status && (
                  <span className="inline-block mt-2 text-xs px-3 py-1 rounded-full glass">
                    {profile.education_status}
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {!editing ? (
                  <button onClick={() => setEditing(true)} className="px-4 py-2 rounded-xl glass text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2">
                    <Edit3 className="w-4 h-4" /> Edit
                  </button>
                ) : (
                  <>
                    <button onClick={handleSave} className="px-4 py-2 rounded-xl gradient-btn text-sm font-medium flex items-center gap-2">
                      <Save className="w-4 h-4" /> Save
                    </button>
                    <button onClick={() => { setEditing(false); setEditForm(profile || {}); }} className="px-4 py-2 rounded-xl glass text-sm font-medium flex items-center gap-2">
                      <X className="w-4 h-4" /> Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-thin">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-all ${
                  tab === t.id ? 'gradient-btn shadow-md' : 'glass hover:scale-105'
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
                {t.id === 'reports' && reports.length > 0 && (
                  <span className="text-xs px-1.5 py-0.5 rounded-full bg-white/20">{reports.length}</span>
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            {tab === 'details' && (
              <motion.div key="details" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass-card p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { k: 'full_name', label: 'Full Name', icon: User },
                    { k: 'age', label: 'Age', icon: User },
                    { k: 'gender', label: 'Gender', icon: User },
                    { k: 'preferred_language', label: 'Preferred Language', icon: Globe },
                    { k: 'city', label: 'City', icon: MapPin },
                    { k: 'country', label: 'Country', icon: MapPin },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className={labelCls}>{f.label}</label>
                      {editing ? (
                        <input
                          value={(editForm as any)[f.k] ?? ''}
                          onChange={(e) => setEditForm((p) => ({ ...p, [f.k]: e.target.value }))}
                          className={inputCls}
                        />
                      ) : (
                        <div className="glass p-2.5 rounded-xl text-sm flex items-center gap-2">
                          <f.icon className="w-4 h-4 text-gray-400" />
                          {(profile as any)?.[f.k] || '—'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {tab === 'education' && (
              <motion.div key="education" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass-card p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Education Status</label>
                    {editing ? (
                      <select
                        value={editForm.education_status ?? ''}
                        onChange={(e) => setEditForm((p) => ({ ...p, education_status: e.target.value }))}
                        className={inputCls}
                      >
                        <option value="">Select</option>
                        {EDUCATION_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    ) : (
                      <div className="glass p-2.5 rounded-xl text-sm flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-gray-400" />
                        {profile?.education_status || '—'}
                      </div>
                    )}
                  </div>
                  {[
                    { k: 'college_name', label: 'College Name' },
                    { k: 'school_name', label: 'School Name' },
                    { k: 'current_year', label: 'Current Year' },
                    { k: 'department', label: 'Department' },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className={labelCls}>{f.label}</label>
                      {editing ? (
                        <input
                          value={(editForm as any)[f.k] ?? ''}
                          onChange={(e) => setEditForm((p) => ({ ...p, [f.k]: e.target.value }))}
                          className={inputCls}
                        />
                      ) : (
                        <div className="glass p-2.5 rounded-xl text-sm flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-gray-400" />
                          {(profile as any)?.[f.k] || '—'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                {profile?.interests && profile.interests.length > 0 && (
                  <div>
                    <label className={labelCls}>Interests</label>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((i) => (
                        <span key={i} className="text-xs px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">{i}</span>
                      ))}
                    </div>
                  </div>
                )}
                {profile?.skills && profile.skills.length > 0 && (
                  <div>
                    <label className={labelCls}>Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((s) => (
                        <span key={s} className="text-xs px-2.5 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">{s}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {tab === 'reports' && (
              <motion.div key="reports" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-4">
                {reports.length === 0 ? (
                  <div className="glass-card p-12 text-center">
                    <FileText className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 mb-4">No saved reports yet.</p>
                    <button onClick={() => navigate('/generator')} className="px-5 py-2.5 rounded-xl gradient-btn text-sm font-medium">
                      Generate a Report
                    </button>
                  </div>
                ) : (
                  reports.map((r, i) => (
                    <motion.div
                      key={r.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="glass-card p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Award className="w-4 h-4 text-blue-500" />
                            <span className="font-semibold text-sm">{r.report.careers.length} Career Recommendations</span>
                          </div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {r.report.careers.map((c) => (
                              <span key={c.career} className="text-xs px-2.5 py-1 rounded-lg glass">
                                {c.career} — {c.suitability}%
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="w-3.5 h-3.5" />
                            {new Date(r.created_at).toLocaleString()}
                          </div>
                        </div>
                        <button
                          onClick={() => navigate('/result', { state: { report: r.report } })}
                          className="px-4 py-2 rounded-xl gradient-btn text-xs font-medium whitespace-nowrap"
                        >
                          View Report
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Account actions */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 mt-6">
            <h3 className="font-bold mb-4">Account</h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2.5 rounded-xl glass text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2">
                <Key className="w-4 h-4" /> Change Password
              </button>
              <button onClick={handleSignOut} className="px-4 py-2.5 rounded-xl glass text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2 hover:text-red-500">
                <LogOut className="w-4 h-4" /> Logout
              </button>
              <button onClick={() => setConfirmDelete(true)} className="px-4 py-2.5 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2">
                <Trash2 className="w-4 h-4" /> Delete Account
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Delete confirm modal */}
      <AnimatePresence>
        {confirmDelete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={() => setConfirmDelete(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-6 max-w-sm w-full"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-bold text-lg text-center mb-2">Delete Account?</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">
                This will permanently delete your profile and all saved reports. This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button onClick={() => setConfirmDelete(false)} className="flex-1 py-2.5 rounded-xl glass text-sm font-medium">
                  Cancel
                </button>
                <button onClick={handleDeleteAccount} className="flex-1 py-2.5 rounded-xl bg-red-500 text-white text-sm font-medium hover:bg-red-600">
                  Delete
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
