import type { CareerRecommendation, GeneratedReport } from './supabase';

type CareerInput = {
  interests: string[];
  skills: string[];
  academic_performance: string;
  education_status: string;
  career_goal: string;
  working_style?: string[];
  work_style?: string[];
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
  skill_suggestions: Omit<CareerRecommendation['skill_suggestions'], 'estimated_completion_time'> & {
    estimated_completion_time: string;
  };
  goal_fit: string[];
  working_style_fit: string[];
};

export const CAREER_DB: CareerDef[] = [
  {
    name: 'AI Engineer',
    keywords: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Programming', 'Robotics', 'Research', 'Mathematics', 'Electronics'],
    skills: ['Coding', 'Mathematics', 'Logical Reasoning', 'Problem Solving', 'Critical Thinking', 'Research', 'Analytical Thinking'],
    salary_range: '$90,000 – $180,000',
    required_education: 'B.Tech/M.Tech in CS, AI, or related field',
    future_demand: 'Very High',
    growth_rate: '35% annually',
    job_market: 'Global shortage of AI talent',
    pros: ['High salary', 'Cutting-edge work', 'Remote-friendly', 'Strong demand'],
    cons: ['Requires continuous learning', 'Math-heavy', 'Long ramp-up'],
    roadmap: ['Learn Python', 'Data Structures & Algorithms', 'Mathematics for ML', 'Machine Learning Basics', 'Deep Learning', 'Build Projects', 'GitHub Portfolio', 'Internship', 'Resume', 'Interview Preparation', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['Andrew Ng ML Specialization (Coursera)', 'Deep Learning Specialization', 'CS229 Stanford'],
      recommended_certifications: ['TensorFlow Developer Certificate', 'AWS ML Specialty', 'Microsoft AI Engineer'],
      recommended_books: ['Hands-On ML with Scikit-Learn & TensorFlow', 'Deep Learning by Ian Goodfellow'],
      practice_platforms: ['Kaggle', 'LeetCode', 'HuggingFace', 'Coursera'],
      youtube_resources: ['3Blue1Brown', 'StatQuest', 'Sentdex'],
      estimated_completion_time: '12–18 months',
    },
    goal_fit: ['High Salary', 'Research', 'Work Abroad', 'Startup'],
    working_style_fit: ['Remote', 'Office', 'Research'],
  },
  {
    name: 'Data Scientist',
    keywords: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Business', 'Finance', 'Research', 'Mathematics'],
    skills: ['Coding', 'Mathematics', 'Analytical Thinking', 'Critical Thinking', 'Problem Solving', 'Communication', 'Research'],
    salary_range: '$80,000 – $160,000',
    required_education: 'B.Tech/BS in CS, Stats, or Math',
    future_demand: 'Very High',
    growth_rate: '35% annually',
    job_market: 'Every industry needs data scientists',
    pros: ['Versatile across industries', 'High demand', 'Good work-life balance'],
    cons: ['Can be repetitive', 'Needs business domain knowledge'],
    roadmap: ['Learn Python/R', 'Statistics & Probability', 'SQL & Databases', 'Data Visualization', 'Machine Learning', 'Build Projects', 'Kaggle Competitions', 'Internship', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['IBM Data Science Professional', 'DataCamp Data Scientist Track'],
      recommended_certifications: ['Google Data Analytics', 'SAS Data Scientist'],
      recommended_books: ['Python for Data Analysis', 'The Art of Statistics'],
      practice_platforms: ['Kaggle', 'HackerRank', 'Coursera', 'DataCamp'],
      youtube_resources: ['Ken Jee', 'Krish Naik', 'StatQuest'],
      estimated_completion_time: '10–14 months',
    },
    goal_fit: ['High Salary', 'Research', 'Work Abroad', 'Freelancing'],
    working_style_fit: ['Remote', 'Office', 'Hybrid'],
  },
  {
    name: 'Software Engineer',
    keywords: ['Programming', 'Coding', 'Web Development', 'App Development', 'Problem Solving', 'Logic', 'Technology'],
    skills: ['Coding', 'Problem Solving', 'Logical Reasoning', 'Teamwork', 'Communication', 'Time Management', 'Adaptability'],
    salary_range: '$70,000 – $150,000',
    required_education: 'B.Tech in CS or related',
    future_demand: 'High',
    growth_rate: '22% annually',
    job_market: 'Stable and growing across all sectors',
    pros: ['Universal demand', 'Remote options', 'Clear career path'],
    cons: ['Competitive', 'Sedentary work', 'Constant upskilling'],
    roadmap: ['Learn a Language (Python/Java/JS)', 'Data Structures', 'Algorithms', 'Web/App Framework', 'Databases', 'Projects', 'GitHub', 'Internship', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['The Web Developer Bootcamp', 'CS50 Harvard'],
      recommended_certifications: ['AWS Developer', 'Meta Frontend Developer'],
      recommended_books: ['Clean Code', 'Cracking the Coding Interview'],
      practice_platforms: ['LeetCode', 'HackerRank', 'Coursera', 'Udemy'],
      youtube_resources: ['Fireship', 'Traversy Media', 'freeCodeCamp'],
      estimated_completion_time: '8–12 months',
    },
    goal_fit: ['High Salary', 'Startup', 'Freelancing', 'Work Abroad'],
    working_style_fit: ['Remote', 'Office', 'Hybrid'],
  },
  {
    name: 'Cybersecurity Analyst',
    keywords: ['Cyber Security', 'Networking', 'Programming', 'Problem Solving', 'Technology'],
    skills: ['Coding', 'Logical Reasoning', 'Problem Solving', 'Critical Thinking', 'Analytical Thinking', 'Attention to Detail'],
    salary_range: '$75,000 – $140,000',
    required_education: 'B.Tech in CS or Cybersecurity certification',
    future_demand: 'Very High',
    growth_rate: '32% annually',
    job_market: 'Critical shortage of cybersecurity professionals',
    pros: ['Mission-critical work', 'Strong demand', 'Government & private roles'],
    cons: ['High stress', 'On-call expectations', 'Constant threat evolution'],
    roadmap: ['Networking Basics', 'Operating Systems', 'Learn Linux', 'Programming (Python/Bash)', 'Security Fundamentals', 'Ethical Hacking', 'Certifications', 'CTF Practice', 'Internship', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['Google Cybersecurity Certificate', 'TryHackMe Paths'],
      recommended_certifications: ['CompTIA Security+', 'CEH', 'OSCP'],
      recommended_books: ['The Web Application Hacker Handbook', 'Cybersecurity for Beginners'],
      practice_platforms: ['TryHackMe', 'HackTheBox', 'PicoCTF', 'Coursera'],
      youtube_resources: ['NetworkChuck', 'John Hammond', 'HackerSploit'],
      estimated_completion_time: '10–14 months',
    },
    goal_fit: ['High Salary', 'Government Job', 'Work Abroad', 'Social Impact'],
    working_style_fit: ['Office', 'Remote', 'Hybrid'],
  },
  {
    name: 'Cloud Solutions Architect',
    keywords: ['Cloud Computing', 'Networking', 'Programming', 'DevOps', 'Technology', 'Business'],
    skills: ['Coding', 'Problem Solving', 'Logical Reasoning', 'Management', 'Communication', 'Decision Making'],
    salary_range: '$100,000 – $200,000',
    required_education: 'B.Tech in CS/IT + Cloud certifications',
    future_demand: 'Very High',
    growth_rate: '28% annually',
    job_market: 'Massive enterprise cloud migration',
    pros: ['Top-tier salary', 'Strategic role', 'High demand'],
    cons: ['Complex certifications', 'On-call duties'],
    roadmap: ['IT Fundamentals', 'Networking', 'Linux', 'AWS/Azure Basics', 'Cloud Architecture', 'DevOps Tools', 'Security', 'Certifications', 'Projects', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['AWS Solutions Architect', 'Azure Architect Track'],
      recommended_certifications: ['AWS Solutions Architect Pro', 'Azure Solutions Architect Expert'],
      recommended_books: ['AWS Certified Solutions Architect Study Guide'],
      practice_platforms: ['AWS Free Tier', 'A Cloud Guru', 'Coursera', 'Udemy'],
      youtube_resources: ['AWS Events', 'TechWorld with Nana'],
      estimated_completion_time: '12–16 months',
    },
    goal_fit: ['High Salary', 'Work Abroad', 'Entrepreneurship'],
    working_style_fit: ['Remote', 'Office', 'Hybrid'],
  },
  {
    name: 'UI/UX Designer',
    keywords: ['UI/UX', 'Graphic Design', 'Design', 'Drawing', 'Creativity', 'Art', 'Photography', 'Content Creation'],
    skills: ['Creativity', 'Design', 'Drawing', 'Communication', 'Presentation', 'Teamwork', 'Problem Solving'],
    salary_range: '$55,000 – $120,000',
    required_education: 'Degree in Design or self-taught portfolio',
    future_demand: 'High',
    growth_rate: '16% annually',
    job_market: 'Growing demand in product companies',
    pros: ['Creative work', 'Flexible', 'Portfolio-driven'],
    cons: ['Subjective feedback', 'Competitive entry'],
    roadmap: ['Design Fundamentals', 'Figma', 'Color & Typography', 'UX Research', 'Wireframing', 'Prototyping', 'Build Portfolio', 'Internship', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['Google UX Design Certificate', 'Interaction Design Foundation'],
      recommended_certifications: ['Nielsen Norman UX Certification'],
      recommended_books: ["Don't Make Me Think", 'The Design of Everyday Things'],
      practice_platforms: ['Figma Community', 'Dribbble', 'Behance', 'Coursera'],
      youtube_resources: ['Figma', 'AJ&Smart', 'Jesse Showalter'],
      estimated_completion_time: '6–10 months',
    },
    goal_fit: ['Freelancing', 'Entrepreneurship', 'High Salary', 'Social Impact'],
    working_style_fit: ['Remote', 'Office', 'Hybrid'],
  },
  {
    name: 'Digital Marketing Specialist',
    keywords: ['Digital Marketing', 'Content Creation', 'Writing', 'Business', 'Entrepreneurship', 'Communication', 'Photography'],
    skills: ['Communication', 'Creativity', 'Writing', 'Networking', 'Presentation', 'Adaptability', 'Teamwork'],
    salary_range: '$45,000 – $100,000',
    required_education: 'Any degree + marketing certifications',
    future_demand: 'High',
    growth_rate: '10% annually',
    job_market: 'Every business needs digital presence',
    pros: ['Low entry barrier', 'Creative', 'Freelance-friendly'],
    cons: ['Crowded field', 'Metrics-driven pressure'],
    roadmap: ['Marketing Fundamentals', 'SEO', 'Social Media Marketing', 'Content Marketing', 'Google Ads', 'Analytics', 'Build Projects', 'Certifications', 'Internship', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['Google Digital Marketing Certificate', 'HubSpot Academy'],
      recommended_certifications: ['Google Ads Certification', 'HubSpot Inbound'],
      recommended_books: ['Contagious by Jonah Berger', 'Made to Stick'],
      practice_platforms: ['Google Skillshop', 'HubSpot', 'Coursera', 'Udemy'],
      youtube_resources: ['Neil Patel', 'Ahrefs', 'Google Search Central'],
      estimated_completion_time: '4–8 months',
    },
    goal_fit: ['Freelancing', 'Entrepreneurship', 'Social Impact'],
    working_style_fit: ['Remote', 'Hybrid', 'Office'],
  },
  {
    name: 'Financial Analyst',
    keywords: ['Finance', 'Business', 'Mathematics', 'Accounting', 'Economics', 'Analytical Thinking'],
    skills: ['Mathematics', 'Analytical Thinking', 'Critical Thinking', 'Decision Making', 'Communication', 'Problem Solving'],
    salary_range: '$60,000 – $130,000',
    required_education: 'B.Com/BBA/Finance degree',
    future_demand: 'High',
    growth_rate: '9% annually',
    job_market: 'Strong in banking, fintech, consulting',
    pros: ['Stable career', 'Clear progression', 'Good pay'],
    cons: ['Long hours', 'High pressure', 'Certification-heavy'],
    roadmap: ['Accounting Basics', 'Financial Mathematics', 'Excel Mastery', 'Financial Modeling', 'Valuation', 'Certifications', 'Internship', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['CFI Financial Modeling', 'Coursera Finance Specializations'],
      recommended_certifications: ['CFA Level 1-3', 'FRM'],
      recommended_books: ['The Intelligent Investor', 'Financial Accounting'],
      practice_platforms: ['CFI', 'Coursera', 'Udemy', 'Wall Street Prep'],
      youtube_resources: ['Aswath Damodaran', 'Martin Shkreli Finance'],
      estimated_completion_time: '8–12 months',
    },
    goal_fit: ['High Salary', 'Government Job', 'Work Abroad'],
    working_style_fit: ['Office', 'Hybrid'],
  },
  {
    name: 'Doctor / Medical Professional',
    keywords: ['Medicine', 'Biology', 'Chemistry', 'Research', 'Psychology', 'Social Impact'],
    skills: ['Critical Thinking', 'Problem Solving', 'Communication', 'Decision Making', 'Research', 'Teamwork', 'Adaptability'],
    salary_range: '$120,000 – $300,000+',
    required_education: 'MBBS + specialization',
    future_demand: 'Very High',
    growth_rate: '13% annually',
    job_market: 'Always in demand globally',
    pros: ['Noble profession', 'High respect', 'Stable'],
    cons: ['Long study (8+ years)', 'Stressful', 'Expensive education'],
    roadmap: ['Strong Science Foundation', 'NEET/Medical Entrance', 'MBBS', 'Clinical Rotations', 'Specialization', 'Licensing', 'Residency', 'Practice'],
    skill_suggestions: {
      recommended_courses: ['NEET Prep Courses', 'Khan Academy Biology'],
      recommended_certifications: ['USMLE (US)', 'NEET-PG (India)'],
      recommended_books: ["Gray's Anatomy", 'Robbins Pathology'],
      practice_platforms: ['Marrow', 'PrepLadder', 'Khan Academy'],
      youtube_resources: ['Ninja Nerd', 'Osmosis'],
      estimated_completion_time: '8–12 years',
    },
    goal_fit: ['Social Impact', 'Government Job', 'High Salary'],
    working_style_fit: ['Field Work', 'Office'],
  },
  {
    name: 'Lawyer / Legal Advisor',
    keywords: ['Law', 'Writing', 'Communication', 'Research', 'Business', 'Social Impact', 'Negotiation'],
    skills: ['Communication', 'Writing', 'Research', 'Critical Thinking', 'Negotiation', 'Presentation', 'Logical Reasoning'],
    salary_range: '$60,000 – $200,000',
    required_education: 'LLB + Bar certification',
    future_demand: 'Stable',
    growth_rate: '8% annually',
    job_market: 'Steady demand in corporate and litigation',
    pros: ['Prestigious', 'Diverse specializations', 'Intellectual'],
    cons: ['Long education', 'Competitive', 'High stress'],
    roadmap: ['Strong Humanities Foundation', 'Law Entrance (CLAT/LSAT)', 'LLB', 'Specialization', 'Internship', 'Bar Exam', 'Practice'],
    skill_suggestions: {
      recommended_courses: ['Coursera Law Courses', 'LegalEdge CLAT Prep'],
      recommended_certifications: ['Bar Council Certification'],
      recommended_books: ['Constitutional Law', 'Indian Penal Code'],
      practice_platforms: ['Unacademy Law', 'Coursera', 'NPTEL'],
      youtube_resources: ['LawSikho', 'LegalEdge'],
      estimated_completion_time: '5–7 years',
    },
    goal_fit: ['Government Job', 'Social Impact', 'High Salary', 'Entrepreneurship'],
    working_style_fit: ['Office', 'Field Work'],
  },
  {
    name: 'Research Scientist',
    keywords: ['Research', 'Mathematics', 'Science', 'Electronics', 'IoT', 'Robotics', 'Environment', 'Agriculture', 'Psychology'],
    skills: ['Research', 'Analytical Thinking', 'Critical Thinking', 'Writing', 'Problem Solving', 'Mathematics', 'Logical Reasoning'],
    salary_range: '$70,000 – $150,000',
    required_education: 'Masters/PhD in field',
    future_demand: 'High',
    growth_rate: '17% annually',
    job_market: 'Academia, R&D labs, government',
    pros: ['Intellectual freedom', 'Discovery-driven', 'Respected'],
    cons: ['Long PhD', 'Grant-dependent', 'Lower initial pay'],
    roadmap: ['Strong Subject Foundation', 'Bachelors', 'Research Projects', 'Publications', 'Masters', 'PhD', 'Postdoc', 'Research Position'],
    skill_suggestions: {
      recommended_courses: ['Research Methodology courses', 'NPTEL'],
      recommended_certifications: ['Subject-specific certifications'],
      recommended_books: ['Research methodology by Kothari'],
      practice_platforms: ['NPTEL', 'Coursera', 'edX', 'ResearchGate'],
      youtube_resources: ['MIT OCW', 'Stanford Online'],
      estimated_completion_time: '6–10 years',
    },
    goal_fit: ['Research', 'Social Impact', 'Government Job'],
    working_style_fit: ['Research', 'Office'],
  },
  {
    name: 'Game Developer',
    keywords: ['Gaming', 'Animation', 'Programming', 'Design', 'Creativity', 'Robotics'],
    skills: ['Coding', 'Creativity', 'Design', 'Problem Solving', 'Logical Reasoning', 'Teamwork', 'Mathematics'],
    salary_range: '$60,000 – $140,000',
    required_education: 'B.Tech in CS or Game Design degree',
    future_demand: 'High',
    growth_rate: '12% annually',
    job_market: 'Booming gaming industry',
    pros: ['Creative + technical', 'Fun industry', 'Growing'],
    cons: ['Crunch culture', 'Niche roles'],
    roadmap: ['Learn C#/C++', 'Game Engine (Unity/Unreal)', 'Math for Games', '3D Graphics', 'Game Design', 'Build Portfolio', 'Game Jams', 'Internship', 'Resume', 'Interview Prep', 'Placement'],
    skill_suggestions: {
      recommended_courses: ['Unity Learn', 'Unreal Engine courses'],
      recommended_certifications: ['Unity Certified Developer'],
      recommended_books: ['Game Programming Patterns', 'The Art of Game Design'],
      practice_platforms: ['Unity Learn', 'itch.io', 'Coursera', 'Udemy'],
      youtube_resources: ['Brackeys', 'Game Maker Toolkit', 'Sebastian Lague'],
      estimated_completion_time: '8–12 months',
    },
    goal_fit: ['High Salary', 'Entrepreneurship', 'Freelancing'],
    working_style_fit: ['Remote', 'Office', 'Hybrid'],
  },
  {
    name: 'Content Creator / YouTuber',
    keywords: ['Content Creation', 'Writing', 'Photography', 'Music', 'Animation', 'Video Editing', 'Entrepreneurship', 'Travel'],
    skills: ['Creativity', 'Writing', 'Communication', 'Video Editing', 'Photography', 'Presentation', 'Adaptability'],
    salary_range: '$30,000 – $200,000+',
    required_education: 'No formal degree required',
    future_demand: 'High',
    growth_rate: '15% annually',
    job_market: 'Creator economy booming',
    pros: ['Creative freedom', 'Flexible', 'Scalable income'],
    cons: ['Unstable income', 'Algorithm-dependent', 'Slow start'],
    roadmap: ['Pick a Niche', 'Learn Content Skills', 'Video Editing', 'Build Audience', 'Monetization', 'Branding', 'Sponsorships', 'Scale'],
    skill_suggestions: {
      recommended_courses: ['YouTube Creator Academy', 'Skillshare Video Editing'],
      recommended_certifications: ['None required — portfolio matters'],
      recommended_books: ['YouTube Secrets', 'Show Your Work'],
      practice_platforms: ['YouTube', 'Skillshare', 'Udemy', 'Coursera'],
      youtube_resources: ['Think Media', 'Roberto Blake', 'Derral Eves'],
      estimated_completion_time: '6–18 months to traction',
    },
    goal_fit: ['Entrepreneurship', 'Freelancing', 'Social Impact'],
    working_style_fit: ['Remote', 'Field Work', 'Hybrid'],
  },
  {
    name: 'Entrepreneur / Startup Founder',
    keywords: ['Entrepreneurship', 'Business', 'Leadership', 'Finance', 'Technology', 'Content Creation', 'Travel'],
    skills: ['Leadership', 'Communication', 'Decision Making', 'Management', 'Networking', 'Adaptability', 'Negotiation', 'Problem Solving'],
    salary_range: 'Variable ($0 – unlimited)',
    required_education: 'Any background; business education helps',
    future_demand: 'Always relevant',
    growth_rate: 'Self-driven',
    job_market: 'You create your own market',
    pros: ['Unlimited upside', 'Autonomy', 'Impact'],
    cons: ['High risk', 'No steady income initially', 'Long hours'],
    roadmap: ['Identify a Problem', 'Validate Idea', 'Build MVP', 'Find Co-founders', 'Fundraising', 'Launch', 'Scale', 'Hire Team'],
    skill_suggestions: {
      recommended_courses: ['Y Combinator Startup School', 'How to Start a Startup'],
      recommended_certifications: ['None — execution matters'],
      recommended_books: ['The Lean Startup', 'Zero to One', 'The Hard Thing About Hard Things'],
      practice_platforms: ['Y Combinator', 'Coursera', 'Udemy', 'NPTEL'],
      youtube_resources: ['Y Combinator', 'a16z', 'This Week in Startups'],
      estimated_completion_time: 'Ongoing',
    },
    goal_fit: ['Entrepreneurship', 'High Salary', 'Social Impact'],
    working_style_fit: ['Business', 'Remote', 'Office'],
  },
  {
    name: 'Teacher / Professor',
    keywords: ['Teaching', 'Research', 'Writing', 'Communication', 'Psychology', 'Social Impact', 'Music', 'Art'],
    skills: ['Communication', 'Presentation', 'Patience', 'Writing', 'Teamwork', 'Adaptability', 'Leadership'],
    salary_range: '$40,000 – $100,000',
    required_education: 'B.Ed / Masters / PhD',
    future_demand: 'Stable',
    growth_rate: '5% annually',
    job_market: 'Schools, colleges, EdTech',
    pros: ['Stable', 'Meaningful impact', 'Respected'],
    cons: ['Lower pay', 'Administrative load'],
    roadmap: ['Subject Mastery', 'Teaching Qualification (B.Ed/NET)', 'Classroom Skills', 'Curriculum Design', 'Internship', 'Job', 'Continuous Learning'],
    skill_suggestions: {
      recommended_courses: ['Coursera Teaching Courses', 'NPTEL'],
      recommended_certifications: ['B.Ed', 'NET/SET', 'TEFL'],
      recommended_books: ['The Art of Teaching', 'Teach Like a Champion'],
      practice_platforms: ['Coursera', 'NPTEL', 'Udemy', 'Khan Academy'],
      youtube_resources: ['CrashCourse', 'Khan Academy', 'Edutopia'],
      estimated_completion_time: '2–6 years',
    },
    goal_fit: ['Social Impact', 'Government Job'],
    working_style_fit: ['Office', 'Field Work', 'Remote'],
  },
  {
    name: 'Environmental Scientist',
    keywords: ['Environment', 'Agriculture', 'Research', 'Science', 'Social Impact', 'IoT'],
    skills: ['Research', 'Analytical Thinking', 'Critical Thinking', 'Writing', 'Problem Solving', 'Teamwork'],
    salary_range: '$55,000 – $110,000',
    required_education: 'BSc/MSc in Environmental Science',
    future_demand: 'High',
    growth_rate: '8% annually',
    job_market: 'Growing with climate focus',
    pros: ['Meaningful impact', 'Field + lab work', 'Growing field'],
    cons: ['Lower pay than tech', 'Field conditions'],
    roadmap: ['Science Foundation', 'Environmental Science Degree', 'Field Research', 'Specialization', 'Internship', 'Certifications', 'Job'],
    skill_suggestions: {
      recommended_courses: ['Coursera Environmental Science', 'edX'],
      recommended_certifications: ['LEED Green Associate'],
      recommended_books: ['Silent Spring', 'Environmental Science texts'],
      practice_platforms: ['Coursera', 'edX', 'NPTEL'],
      youtube_resources: ['NASA Climate', 'Our Changing Climate'],
      estimated_completion_time: '4–6 years',
    },
    goal_fit: ['Social Impact', 'Research', 'Government Job'],
    working_style_fit: ['Field Work', 'Research', 'Office'],
  },
  {
    name: 'Psychologist / Counselor',
    keywords: ['Psychology', 'Communication', 'Research', 'Social Impact', 'Writing', 'Teaching'],
    skills: ['Communication', 'Empathy', 'Research', 'Critical Thinking', 'Writing', 'Presentation', 'Adaptability'],
    salary_range: '$50,000 – $120,000',
    required_education: 'BA/BSc Psychology + Masters',
    future_demand: 'High',
    growth_rate: '11% annually',
    job_market: 'Growing mental health awareness',
    pros: ['Meaningful work', 'Flexible practice', 'Growing demand'],
    cons: ['Emotional toll', 'Requires licensing'],
    roadmap: ['Psychology Foundation', 'Bachelors in Psychology', 'Counseling Skills', 'Masters', 'Internship', 'Licensing', 'Practice'],
    skill_suggestions: {
      recommended_courses: ['Coursera Psychology Specialization', 'Yale Science of Wellbeing'],
      recommended_certifications: ['Licensed Clinical Psychologist'],
      recommended_books: ['Thinking Fast and Slow', "Man's Search for Meaning"],
      practice_platforms: ['Coursera', 'Udemy', 'NPTEL', 'edX'],
      youtube_resources: ['Crash Course Psychology', 'Khan Academy'],
      estimated_completion_time: '5–7 years',
    },
    goal_fit: ['Social Impact', 'Freelancing', 'Government Job'],
    working_style_fit: ['Office', 'Remote', 'Hybrid'],
  },
  {
    name: 'Sports Professional / Coach',
    keywords: ['Sports', 'Leadership', 'Teamwork', 'Discipline', 'Fitness'],
    skills: ['Leadership', 'Teamwork', 'Discipline', 'Communication', 'Adaptability', 'Time Management'],
    salary_range: '$30,000 – $150,000+',
    required_education: 'Varies; sports science helps',
    future_demand: 'Growing',
    growth_rate: '10% annually',
    job_market: 'Expanding sports industry',
    pros: ['Passion-driven', 'Healthy lifestyle', 'Recognition'],
    cons: ['Short career span', 'Injury risk', 'Highly competitive'],
    roadmap: ['Choose Sport', 'Training', 'Competitions', 'Coaching Certification', 'Specialization', 'Build Network', 'Career Path'],
    skill_suggestions: {
      recommended_courses: ['Sports Science courses', 'NIS Coaching'],
      recommended_certifications: ['NIS Coaching Diploma', 'ACE Personal Trainer'],
      recommended_books: ['The Sports Gene', 'Sports Psychology texts'],
      practice_platforms: ['Coursera', 'Udemy', 'NPTEL'],
      youtube_resources: ['Sports Science channels', 'Athlete Stories'],
      estimated_completion_time: '3–8 years',
    },
    goal_fit: ['Social Impact', 'Entrepreneurship'],
    working_style_fit: ['Field Work', 'Office'],
  },
];

const ACADEMIC_WEIGHT: Record<string, number> = {
  Excellent: 1.0,
  Good: 0.9,
  Average: 0.75,
  'Below Average': 0.6,
  Poor: 0.45,
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

  if (career.goal_fit.includes(input.career_goal)) {
    score += 3;
    max += 3;
  } else {
    max += 3;
  }

  const styleMatch = (input.work_style ?? input.working_style ?? []).some((w: string) => career.working_style_fit.includes(w));
  if (styleMatch) {
    score += 1.5;
  }
  max += 1.5;

  const academicFactor = ACADEMIC_WEIGHT[input.academic_performance] ?? 0.7;
  score *= academicFactor;
  max *= 0.85;

  const pct = Math.min(98, Math.round((score / max) * 100));
  return Math.max(35, pct);
}

export function generateCareerReport(input: CareerInput): GeneratedReport {
  const scored = CAREER_DB.map((c) => ({ career: c, score: scoreCareer(c, input) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const careers: CareerRecommendation[] = scored.map(({ career, score }) => {
    const matching = career.skills.filter((s) => input.skills.includes(s));
    const missing = career.skills.filter((s) => !input.skills.includes(s));
    return {
      career: career.name,
      suitability: score,
      description: `${career.name} aligns strongly with your interests in ${career.keywords
        .filter((k) => input.interests.includes(k))
        .slice(0, 3)
        .join(', ')}. Your skills and academic profile make you a ${score >= 85 ? 'highly' : 'well'}-suited candidate for this path.`,
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

  return {
    careers,
    overall_confidence: overall,
    generated_at: new Date().toISOString(),
  };
}

export const INTEREST_OPTIONS = [
  'Artificial Intelligence', 'Machine Learning', 'Data Science', 'Programming',
  'Cyber Security', 'Cloud Computing', 'UI/UX', 'Graphic Design',
  'Digital Marketing', 'Finance', 'Business', 'Medicine',
  'Law', 'Teaching', 'Research', 'Gaming',
  'Animation', 'Robotics', 'Electronics', 'IoT',
  'Agriculture', 'Sports', 'Music', 'Photography',
  'Content Creation', 'Writing', 'Entrepreneurship', 'Travel',
  'Environment', 'Psychology',
];

export const SKILL_OPTIONS = [
  'Problem Solving', 'Communication', 'Leadership', 'Creativity',
  'Critical Thinking', 'Coding', 'Mathematics', 'Logical Reasoning',
  'Public Speaking', 'Writing', 'Drawing', 'Design',
  'Video Editing', 'Photography', 'Teamwork', 'Management',
  'Research', 'Decision Making', 'Presentation', 'Time Management',
  'Negotiation', 'Analytical Thinking', 'Adaptability', 'Networking',
];

export const ACADEMIC_OPTIONS = ['Excellent', 'Good', 'Average', 'Below Average', 'Poor'];
export const EDUCATION_OPTIONS = ['High School', 'Higher Secondary', 'Diploma', 'UG', 'PG', 'Working Professional'];
export const WORKING_STYLE_OPTIONS = ['Remote', 'Office', 'Hybrid', 'Field Work', 'Research', 'Business'];
export const CAREER_GOAL_OPTIONS = [
  'High Salary', 'Government Job', 'Research', 'Startup', 'Freelancing',
  'Entrepreneurship', 'Work Abroad', 'Social Impact',
];
