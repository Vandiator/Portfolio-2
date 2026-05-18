export type Education = {
  degree: string;
  institution: string;
  period: string;
  details?: string;
  coursework?: string[];
};

export const education: Education[] = [
  {
    degree: "B.Tech — Computer Science & Engineering (Machine Learning)",
    institution: "Gautam Buddha University, Greater Noida",
    period: "Aug 2023 — Present",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Data Mining",
      "Big Data Analytics",
      "Compiler Design",
      "Soft Computing",
      "Applications of ML in Industries",
    ],
  },
  {
    degree: "BS in Data Science (Online)",
    institution: "Indian Institute of Technology, Madras",
    period: "Jun 2023 — Present",
    details: "Focus areas: Data Science Foundations, Programming, Mathematics, Statistics",
  },
];

export const certifications = [
  "ERP & Automation Internship Certificate — Gautam Buddha University (DAC, School of ICT)",
  "Smart India Hackathon — Semi Finalist",
];

export const interests = [
  "UI/UX Design",
  "Web Development",
  "Machine Learning",
  "Cinematic Photography",
  "Filmmaking",
  "Visual Storytelling",
];

export const languages = [
  { name: "English", level: "Professional Working" },
  { name: "Hindi", level: "Native" },
];
