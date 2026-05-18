export type SkillCategory = {
  name: string;
  items: { name: string; level: 1 | 2 | 3 | 4 | 5 }[];
};

export const skills: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "Python", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "Java", level: 3 },
      { name: "SQL", level: 3 },
      { name: "HTML5 / CSS3", level: 5 },
    ],
  },
  {
    name: "Web & UI/UX",
    items: [
      { name: "Frontend Development", level: 4 },
      { name: "Responsive Design", level: 4 },
      { name: "Figma", level: 5 },
      { name: "UI Prototyping", level: 4 },
    ],
  },
  {
    name: "Data & ML",
    items: [
      { name: "Pandas", level: 4 },
      { name: "NumPy", level: 4 },
      { name: "Scikit-learn", level: 3 },
      { name: "Data Cleaning & Analysis", level: 4 },
      { name: "ML Fundamentals", level: 3 },
    ],
  },
  {
    name: "Tools & Platforms",
    items: [
      { name: "Git / GitHub", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "Jupyter / Colab", level: 4 },
      { name: "Rasa", level: 3 },
      { name: "Dialogflow", level: 3 },
    ],
  },
];
