import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

type CareerDef = {
  name: string;
  keywords: string[];
  skills: string[];
  salary_range: string;
  required_education: string;
  future_demand: string;
  growth_rate: string;
  job_market: string;
  pros: string[];
  cons: string[];
  roadmap: string[];
  skill_suggestions: {
    recommended_courses: string[];
    recommended_certifications: string[];
    recommended_books: string[];
    practice_platforms: string[];
    youtube_resources: string[];
    estimated_completion_time: string;
  };
  goal_fit: string[];
  working_style_fit: string[];
};

const CAREER_DB: CareerDef[] = [
  {
    name: "AI Engineer",
    keywords: ["Artificial Intelligence","Machine Learning","Data Science","Programming","Robotics","Research","Mathematics","Electronics"],
    skills: ["Coding","Mathematics","Logical Reasoning","Problem Solving","Critical Thinking","Research","Analytical Thinking"],
    salary_range: "$90,000 – $180,000",
    required_education: "B.Tech/M.Tech in CS, AI, or related field",
    future_demand: "Very High",
    growth_rate: "35% annually",
    job_market: "Global shortage of AI talent",
    pros: ["High salary","Cutting-edge work","Remote-friendly","Strong demand"],
    cons: ["Requires continuous learning","Math-heavy","Long ramp-up"],
    roadmap: ["Learn Python","Data Structures & Algorithms","Mathematics for ML","Machine Learning Basics","Deep Learning","Build Projects","GitHub Portfolio","Internship","Resume","Interview Preparation","Placement"],
    skill_suggestions: {
      recommended_courses: ["Andrew Ng ML Specialization (Coursera)","Deep Learning Specialization","CS229 Stanford"],
      recommended_certifications: ["TensorFlow Developer Certificate","AWS ML Specialty","Microsoft AI Engineer"],
      recommended_books: ["Hands-On ML with Scikit-Learn & TensorFlow","Deep Learning by Ian Goodfellow"],
      practice_platforms: ["Kaggle","LeetCode","HuggingFace","Coursera"],
      youtube_resources: ["3Blue1Brown","StatQuest","Sentdex"],
      estimated_completion_time: "12–18 months",
    },
    goal_fit: ["High Salary","Research","Work Abroad","Startup"],
    working_style_fit: ["Remote","Office","Research"],
  },
  {
    name: "Data Scientist",
    keywords: ["Data Science","Machine Learning","Artificial Intelligence","Business","Finance","Research","Mathematics"],
    skills: ["Coding","Mathematics","Analytical Thinking","Critical Thinking","Problem Solving","Communication","Research"],
    salary_range: "$80,000 – $160,000",
    required_education: "B.Tech/BS in CS, Stats, or Math",
    future_demand: "Very High",
    growth_rate: "35% annually",
    job_market: "Every industry needs data scientists",
    pros: ["Versatile across industries","High demand","Good work-life balance"],
    cons: ["Can be repetitive","Needs business domain knowledge"],
    roadmap: ["Learn Python/R","Statistics & Probability","SQL & Databases","Data Visualization","Machine Learning","Build Projects","Kaggle Competitions","Internship","Resume","Interview Prep","Placement"],
    skill_suggestions: {
      recommended_courses: ["IBM Data Science Professional","DataCamp Data Scientist Track"],
      recommended_certifications: ["Google Data Analytics","SAS Data Scientist"],
      recommended_books: ["Python for Data Analysis","The Art of Statistics"],
      practice_platforms: ["Kaggle","HackerRank","Coursera","DataCamp"],
      youtube_resources: ["Ken Jee","Krish Naik","StatQuest"],
      estimated_completion_time: "10–14 months",
    },
    goal_fit: ["High Salary","Research","Work Abroad","Freelancing"],
    working_style_fit: ["Remote","Office","Hybrid"],
  },
  {
    name: "Software Engineer",
    keywords: ["Programming","Coding","Web Development","App Development","Problem Solving","Logic","Technology"],
    skills: ["Coding","Problem Solving","Logical Reasoning","Teamwork","Communication","Time Management","Adaptability"],
    salary_range: "$70,000 – $150,000",
    required_education: "B.Tech in CS or related",
    future_demand: "High",
    growth_rate: "22% annually",
    job_market: "Stable and growing across all sectors",
    pros: ["Universal demand","Remote options","Clear career path"],
    cons: ["Competitive","Sedentary work","Constant upskilling"],
    roadmap: ["Learn a Language (Python/Java/JS)","Data Structures","Algorithms","Web/App Framework","Databases","Projects","GitHub","Internship","Resume","Interview Prep","Placement"],
    skill_suggestions: {
      recommended_courses: ["The Web Developer Bootcamp","CS50 Harvard"],
      recommended_certifications: ["AWS Developer","Meta Frontend Developer"],
      recommended_books: ["Clean Code","Cracking the Coding Interview"],
      practice_platforms: ["LeetCode","HackerRank","Coursera","Udemy"],
      youtube_resources: ["Fireship","Traversy Media","freeCodeCamp"],
      estimated_completion_time: "8–12 months",
    },
    goal_fit: ["High Salary","Startup","Freelancing","Work Abroad"],
    working_style_fit: ["Remote","Office","Hybrid"],
  },
  {
    name: "Cybersecurity Analyst",
    keywords: ["Cyber Security","Networking","Programming","Problem Solving","Technology"],
    skills: ["Coding","Logical Reasoning","Problem Solving","Critical Thinking","Analytical Thinking"],
    salary_range: "$75,000 – $140,000",
    required_education: "B.Tech in CS or Cybersecurity certification",
    future_demand: "Very High",
    growth_rate: "32% annually",
    job_market: "Critical shortage of cybersecurity professionals",
    pros: ["Mission-critical work","Strong demand","Government & private roles"],
    cons: ["High stress","On-call expectations","Constant threat evolution"],
    roadmap: ["Networking Basics","Operating Systems","Learn Linux","Programming (Python/Bash)","Security Fundamentals","Ethical Hacking","Certifications","CTF Practice","Internship","Resume","Interview Prep","Placement"],
    skill_suggestions: {
      recommended_courses: ["Google Cybersecurity Certificate","TryHackMe Paths"],
      recommended_certifications: ["CompTIA Security+","CEH","OSCP"],
      recommended_books: ["The Web Application Hacker Handbook","Cybersecurity for Beginners"],
      practice_platforms: ["TryHackMe","HackTheBox","PicoCTF","Coursera"],
      youtube_resources: ["NetworkChuck","John Hammond","HackerSploit"],
      estimated_completion_time: "10–14 months",
    },
    goal_fit: ["High Salary","Government Job","Work Abroad","Social Impact"],
    working_style_fit: ["Office","Remote","Hybrid"],
  },
  {
    name: "Cloud Solutions Architect",
    keywords: ["Cloud Computing","Networking","Programming","DevOps","Technology","Business"],
    skills: ["Coding","Problem Solving","Logical Reasoning","Management","Communication","Decision Making"],
    salary_range: "$100,000 – $200,000",
    required_education: "B.Tech in CS/IT + Cloud certifications",
    future_demand: "Very High",
    growth_rate: "28% annually",
    job_market: "Massive enterprise cloud migration",
    pros: ["Top-tier salary","Strategic role","High demand"],
    cons: ["Complex certifications","On-call duties"],
    roadmap: ["IT Fundamentals","Networking","Linux","AWS/Azure Basics","Cloud Architecture","DevOps Tools","Security","Certifications","Projects","Resume","Interview Prep","Placement"],
    skill_suggestions: {
      recommended_courses: ["AWS Solutions Architect","Azure Architect Track"],
      recommended_certifications: ["AWS Solutions Architect Pro","Azure Solutions Architect Expert"],
      recommended_books: ["AWS Certified Solutions Architect Study Guide"],
      practice_platforms: ["AWS Free Tier","A Cloud Guru","Coursera","Udemy"],
      youtube_resources: ["AWS Events","TechWorld with Nana"],
      estimated_completion_time: "12–16 months",
    },
    goal_fit: ["High Salary","Work Abroad","Entrepreneurship"],
    working_style_fit: ["Remote","Office","Hybrid"],
  },
  {
    name: "UI/UX Designer",
    keywords: ["UI/UX","Graphic Design","Design","Drawing","Creativity","Art","Photography","Content Creation"],
    skills: ["Creativity","Design","Drawing","Communication","Presentation","Teamwork","Problem Solving"],
    salary_range: "$55,000 – $120,000",
    required_education: "Degree in Design or self-taught portfolio",
    future_demand: "High",
    growth_rate: "16% annually",
    job_market: "Growing demand in product companies",
    pros: ["Creative work","Flexible","Portfolio-driven"],
    cons: ["Subjective feedback","Competitive entry"],
    roadmap: ["Design Fundamentals","Figma","Color & Typography","UX Research","Wireframing","Prototyping","Build Portfolio","Internship","Resume","Interview Prep","Placement"],
    skill_suggestions: {
      recommended_courses: ["Google UX Design Certificate","Interaction Design Foundation"],
      recommended_certifications: ["Nielsen Norman UX Certification"],
      recommended_books: ["Don't Make Me Think","The Design of Everyday Things"],
      practice_platforms: ["Figma Community","Dribbble","Behance","Coursera"],
      youtube_resources: ["Figma","AJ&Smart","Jesse Showalter"],
      estimated_completion_time: "6–10 months",
    },
    goal_fit: ["Freelancing","Entrepreneurship","High Salary","Social Impact"],
    working_style_fit: ["Remote","Office","Hybrid"],
  },
  {
    name: "Entrepreneur / Startup Founder",
    keywords: ["Entrepreneurship","Business","Leadership","Finance","Technology","Content Creation","Travel"],
    skills: ["Leadership","Communication","Decision Making","Management","Networking","Adaptability","Negotiation","Problem Solving"],
    salary_range: "Variable ($0 – unlimited)",
    required_education: "Any background; business education helps",
    future_demand: "Always relevant",
    growth_rate: "Self-driven",
    job_market: "You create your own market",
    pros: ["Unlimited upside","Autonomy","Impact"],
    cons: ["High risk","No steady income initially","Long hours"],
    roadmap: ["Identify a Problem","Validate Idea","Build MVP","Find Co-founders","Fundraising","Launch","Scale","Hire Team"],
    skill_suggestions: {
      recommended_courses: ["Y Combinator Startup School","How to Start a Startup"],
      recommended_certifications: ["None — execution matters"],
      recommended_books: ["The Lean Startup","Zero to One","The Hard Thing About Hard Things"],
      practice_platforms: ["Y Combinator","Coursera","Udemy","NPTEL"],
      youtube_resources: ["Y Combinator","a16z","This Week in Startups"],
      estimated_completion_time: "Ongoing",
    },
    goal_fit: ["Entrepreneurship","High Salary","Social Impact"],
    working_style_fit: ["Business","Remote","Office"],
  },
];

const ACADEMIC_WEIGHT: Record<string, number> = {
  Excellent: 1.0,
  Good: 0.9,
  Average: 0.75,
  "Below Average": 0.6,
  Poor: 0.45,
};

type CareerInput = {
  interests: string[];
  skills: string[];
  academic_performance: string;
  education_status?: string;
  career_goal: string;
  working_style?: string[];
};

function scoreCareer(career: CareerDef, input: CareerInput): number {
  let score = 0;
  let max = 0;
  for (const kw of career.keywords) {
    max += 2;
    if (input.interests.includes(kw)) score += 2;
  }
  for (const sk of career.skills) {
    max += 1.5;
    if (input.skills.includes(sk)) score += 1.5;
  }
  if (career.goal_fit.includes(input.career_goal)) { score += 3; max += 3; } else { max += 3; }
  const ws = input.working_style ?? [];
  if (ws.some((w) => career.working_style_fit.includes(w))) score += 1.5;
  max += 1.5;
  const academicFactor = ACADEMIC_WEIGHT[input.academic_performance] ?? 0.7;
  score *= academicFactor;
  max *= 0.85;
  return Math.max(35, Math.min(98, Math.round((score / max) * 100)));
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const input: CareerInput = await req.json();

    if (!input.interests?.length || !input.skills?.length || !input.academic_performance || !input.career_goal) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: interests, skills, academic_performance, career_goal" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const scored = CAREER_DB
      .map((c) => ({ career: c, score: scoreCareer(c, input) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    const careers = scored.map(({ career, score }) => {
      const matching = career.skills.filter((s) => input.skills.includes(s));
      const missing = career.skills.filter((s) => !input.skills.includes(s));
      return {
        career: career.name,
        suitability: score,
        description: `${career.name} aligns strongly with your profile. Your interests and skills make you a ${score >= 85 ? "highly" : "well"}-suited candidate for this path.`,
        salary_range: career.salary_range,
        required_education: career.required_education,
        future_demand: career.future_demand,
        growth_rate: career.growth_rate,
        job_market: career.job_market,
        pros: career.pros,
        cons: career.cons,
        required_skills: career.skills,
        matching_skills: matching,
        missing_skills: missing,
        ai_confidence: Math.min(97, score + 2),
        roadmap: career.roadmap,
        skill_suggestions: career.skill_suggestions,
      };
    });

    const overall = Math.round(careers.reduce((s, c) => s + c.ai_confidence, 0) / careers.length);
    const report = { careers, overall_confidence: overall, generated_at: new Date().toISOString() };

    return new Response(JSON.stringify({ report }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
