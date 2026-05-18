export type Experience = {
  role: string;
  company: string;
  location?: string;
  period: string;
  summary: string;
  highlights: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development & UI/UX Intern",
    company: "Digital Automation Cell (DAC), School of ICT — Gautam Buddha University",
    location: "Greater Noida",
    period: "2025 — 30-Day Smart Campus Boot Camp",
    summary:
      "Led UI/UX prototyping and frontend work for ERP and automation modules across the university's digital ecosystem.",
    highlights: [
      "Designed responsive layouts, reusable UI components, and navigation flows in Figma with usability and accessibility in mind.",
      "Built frontend interfaces using HTML, CSS, and JavaScript for institutional web modules.",
      "Cleaned, structured, and fed 200+ datasets into the institutional ERP, improving data accuracy.",
      "Developed workflow automation systems for academic and administrative processes.",
      "Implemented chatbots with Rasa and Dialogflow for campus user support.",
      "Collaborated cross-functionally to integrate UI/UX with backend systems.",
    ],
    tech: ["Figma", "HTML", "CSS", "JavaScript", "Python", "Rasa", "Dialogflow", "ERP"],
  },
];
