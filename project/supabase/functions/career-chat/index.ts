import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

type KnowledgeEntry = {
  keywords: string[];
  answer: string;
};

const KNOWLEDGE: KnowledgeEntry[] = [
  {
    keywords: ["ai", "artificial intelligence", "ml", "machine learning", "ai engineer"],
    answer: "AI Engineering is one of the fastest-growing fields. To become an AI Engineer, start with Python, then learn data structures, mathematics for ML (linear algebra, probability, calculus), and progress to machine learning and deep learning. Key skills: coding, mathematics, logical reasoning, and analytical thinking. Salary range: $90,000–$180,000. The future demand is very high with 35% annual growth. Recommended: Andrew Ng's ML Specialization on Coursera, Kaggle for practice, and 'Hands-On ML with Scikit-Learn & TensorFlow'.",
  },
  {
    keywords: ["data science", "data scientist"],
    answer: "Data Science combines programming, statistics, and domain knowledge. Start with Python or R, learn SQL, statistics, data visualization, then machine learning. Key skills: coding, mathematics, analytical thinking, communication. Salary: $80,000–$160,000. Demand is very high across every industry. Practice on Kaggle, take IBM's Data Science Professional certificate.",
  },
  {
    keywords: ["software", "developer", "programming", "coding", "engineer"],
    answer: "Software Engineering is a versatile, high-demand career. Learn a programming language (Python, Java, or JavaScript), then data structures, algorithms, a web/app framework, and databases. Key skills: coding, problem solving, logical reasoning, teamwork. Salary: $70,000–$150,000. Practice on LeetCode and HackerRank.",
  },
  {
    keywords: ["cyber", "security", "hacking", "cybersecurity"],
    answer: "Cybersecurity is critical and in very high demand (32% growth). Start with networking basics, operating systems, Linux, then programming (Python/Bash), and security fundamentals. Certifications like CompTIA Security+, CEH, and OSCP boost your career. Salary: $75,000–$140,000. Practice on TryHackMe and HackTheBox.",
  },
  {
    keywords: ["cloud", "devops", "aws", "azure"],
    answer: "Cloud Solutions Architecture is a top-tier career ($100,000–$200,000). Learn IT fundamentals, networking, Linux, then AWS or Azure, cloud architecture, and DevOps tools. Certifications like AWS Solutions Architect Professional are highly valued. Demand is very high due to enterprise cloud migration.",
  },
  {
    keywords: ["ui", "ux", "design", "graphic", "figma"],
    answer: "UI/UX Design is creative and portfolio-driven. Learn design fundamentals, Figma, color & typography, UX research, wireframing, and prototyping. Key skills: creativity, design, communication. Salary: $55,000–$120,000. The Google UX Design Certificate is a great start. Build a portfolio on Dribbble and Behance.",
  },
  {
    keywords: ["marketing", "digital marketing", "seo", "social media"],
    answer: "Digital Marketing has a low entry barrier and is freelance-friendly. Learn SEO, social media marketing, content marketing, Google Ads, and analytics. Key skills: communication, creativity, writing. Salary: $45,000–$100,000. Get the Google Digital Marketing Certificate and HubSpot certifications.",
  },
  {
    keywords: ["finance", "financial", "analyst", "cfa", "accounting"],
    answer: "Financial Analysis is stable and well-paid ($60,000–$130,000). Learn accounting, financial mathematics, Excel, financial modeling, and valuation. The CFA certification is gold-standard. Key skills: mathematics, analytical thinking, decision making. Strong in banking, fintech, and consulting.",
  },
  {
    keywords: ["medicine", "doctor", "medical", "mbbs", "neet"],
    answer: "Medicine is a noble, high-demand profession ($120,000–$300,000+). It requires a long commitment: MBBS (5.5 years) plus specialization. Prepare for NEET (India) or MCAT (US). Key skills: critical thinking, problem solving, decision making. Deeply respected and stable. Great for social impact.",
  },
  {
    keywords: ["law", "lawyer", "legal", "llb", "clat"],
    answer: "Law is prestigious and intellectually rewarding ($60,000–$200,000). Prepare for CLAT/LSAT, complete LLB, then specialize. Key skills: communication, writing, research, negotiation, logical reasoning. Suits those wanting government jobs, social impact, or entrepreneurship.",
  },
  {
    keywords: ["research", "scientist", "phd", "researcher"],
    answer: "Research Science offers intellectual freedom ($70,000–$150,000). It requires a Masters and often a PhD. Key skills: research, analytical thinking, critical thinking, writing. Great for social impact and government positions. Lower initial pay but high respect.",
  },
  {
    keywords: ["game", "gaming", "game developer", "unity", "unreal"],
    answer: "Game Development blends creativity and coding ($60,000–$140,000). Learn C# or C++, then Unity or Unreal Engine, math for games, and 3D graphics. The gaming industry is booming. Build a portfolio and participate in game jams.",
  },
  {
    keywords: ["content", "youtuber", "creator", "youtube", "video"],
    answer: "Content Creation is part of the booming creator economy ($30,000–$200,000+). Pick a niche, learn video editing, build an audience, then monetize. No formal degree required — portfolio and audience matter. Great for entrepreneurship and freelancing.",
  },
  {
    keywords: ["entrepreneur", "startup", "founder", "business"],
    answer: "Entrepreneurship offers unlimited upside but high risk. Identify a real problem, validate your idea, build an MVP, find co-founders, and fundraise. Key skills: leadership, decision making, networking, adaptability. Read 'The Lean Startup' and 'Zero to One'.",
  },
  {
    keywords: ["teach", "teacher", "professor", "education", "academic"],
    answer: "Teaching is stable and meaningful ($40,000–$100,000). Get a B.Ed or Masters/PhD depending on level. Key skills: communication, presentation, patience. Demand is stable in schools, colleges, and EdTech. Get NET/SET for college teaching. Great for social impact and government jobs.",
  },
  {
    keywords: ["salary", "pay", "money", "earn", "income", "high paying"],
    answer: "The highest-paying careers are: AI Engineer ($90k–$180k), Cloud Solutions Architect ($100k–$200k), Doctor ($120k–$300k+), Software Engineer ($70k–$150k), and Data Scientist ($80k–$160k). For high salary, focus on tech, AI, cloud, or medicine.",
  },
  {
    keywords: ["roadmap", "path", "steps", "how to become", "how do i become"],
    answer: "Every career has a personalized learning roadmap in CareerAI. For example, the AI Engineer roadmap: Learn Python → Data Structures → Mathematics for ML → Machine Learning → Deep Learning → Projects → GitHub → Internship → Resume → Interview Prep → Placement. Use the AI Career Generator for your personalized roadmap.",
  },
  {
    keywords: ["skill", "gap", "missing skill", "what skill", "skills needed"],
    answer: "CareerAI performs a skill gap analysis. When you generate a career report, each recommendation shows your matching skills and the skills you still need to acquire, along with suggested courses to close the gap.",
  },
  {
    keywords: ["interest", "choose", "which career", "what career", "confused", "not sure"],
    answer: "If you're unsure which career fits, use the AI Career Generator! Select your interests, skills, academic performance, and career goal — CareerAI analyzes them and recommends your top 3 best-matching careers with suitability percentages.",
  },
  {
    keywords: ["remote", "work from home", "flexible", "freelance"],
    answer: "For remote and flexible work, the best careers are: Software Engineer, Data Scientist, AI Engineer, UI/UX Designer, Digital Marketing, and Content Creator. For freelancing, consider UI/UX Design, Digital Marketing, or Content Creation — they have low barriers and strong freelance markets.",
  },
  {
    keywords: ["government", "govt", "public sector"],
    answer: "For government jobs, consider: Cybersecurity Analyst (defense), Doctor (public health), Lawyer (judiciary), Research Scientist (ISRO/DRDO), Teacher (government schools), and Financial Analyst (banking).",
  },
  {
    keywords: ["abroad", "overseas", "international", "foreign"],
    answer: "To work abroad, the strongest careers are: AI Engineer, Data Scientist, Software Engineer, Cloud Architect, and Cybersecurity Analyst — these have global demand. Focus on building a strong portfolio, English communication, and internationally recognized certifications.",
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    answer: "Hello! I'm your CareerAI assistant. I can answer questions about career paths, required skills, salaries, learning roadmaps, and how to choose the right career. What would you like to know?",
  },
  {
    keywords: ["thank", "thanks", "thank you"],
    answer: "You're welcome! Feel free to ask me anything else about careers, or use the AI Career Generator for personalized recommendations based on your profile.",
  },
  {
    keywords: ["help", "what can you do", "who are you"],
    answer: "I'm the CareerAI chatbot, specialized in career guidance. I can help you with: choosing a career path, understanding required skills and education, salary expectations, future job demand, and learning roadmaps. I only answer career-related questions.",
  },
];

const CAREER_NAMES = ["ai engineer", "data scientist", "software engineer", "cybersecurity analyst", "cloud solutions architect", "ui/ux designer", "entrepreneur / startup founder"];

function getChatResponse(message: string): string {
  const lower = message.toLowerCase().trim();
  if (!lower) return "Please ask a career-related question and I'll help you out!";

  for (const name of CAREER_NAMES) {
    if (lower.includes(name)) {
      return `You asked about ${name}. Use the AI Career Generator to get a full detailed report including salary range, roadmap, required skills, and learning resources tailored to your profile!`;
    }
  }

  let bestMatch: KnowledgeEntry | null = null;
  let bestScore = 0;
  for (const entry of KNOWLEDGE) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (lower.includes(kw)) score += kw.length > 4 ? 2 : 1;
    }
    if (score > bestScore) { bestScore = score; bestMatch = entry; }
  }

  if (bestMatch && bestScore > 0) return bestMatch.answer;

  return "I'm a career-guidance assistant, so I can only help with career-related questions — like choosing a career path, required skills, salaries, or learning roadmaps. Try asking 'How do I become an AI engineer?' or 'Which career is best for high salary?'";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Missing required field: message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    const reply = getChatResponse(message);
    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
