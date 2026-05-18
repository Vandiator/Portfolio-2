export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "ML" | "Web" | "UI/UX" | "Automation";
  period: string;
  status: "ongoing" | "completed";
  summary: string;
  highlights: string[];
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    docs?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "deepfake-detection",
    title: "Deepfake Image & Video Detection",
    subtitle: "Smart India Hackathon — Semi Finalist",
    category: "ML",
    period: "Oct 2024",
    status: "completed",
    summary:
      "A deepfake detection platform built with a multidisciplinary team. I led the frontend, designing the upload, prediction, and interaction workflows.",
    highlights: [
      "Built responsive interfaces for media upload, prediction display, and result interaction in HTML/CSS.",
      "Integrated and tested ML detection models in collaboration with the data team.",
      "Trained on large-scale datasets of real and manipulated media; achieved high detection accuracy.",
      "Reached the Semi-Finals of Smart India Hackathon 2024.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python", "Machine Learning"],
    featured: true,
  },
  {
    slug: "college-resource-platform",
    title: "College Resource Sharing Platform",
    subtitle: "Concept & UI Design",
    category: "UI/UX",
    period: "2024",
    status: "completed",
    summary:
      "A student-focused platform for sharing notes, assignments, and academic materials — designed end-to-end in Figma.",
    highlights: [
      "Designed wireframes, UI components, and interactive prototypes in Figma.",
      "Focused on accessibility, navigation flow, and student-friendly information architecture.",
      "Iterated through several rounds of feedback with target users.",
    ],
    tech: ["Figma", "UI Prototyping", "User Research"],
    featured: true,
  },
  {
    slug: "erp-automation",
    title: "ERP & Workflow Automation Modules",
    subtitle: "DAC, School of ICT — GBU",
    category: "Automation",
    period: "2025",
    status: "completed",
    summary:
      "Workflow automation systems for academic and administrative processes that reduced manual effort and improved data accuracy across institutional ERP.",
    highlights: [
      "Automated repetitive academic and admin workflows across departments.",
      "Built chatbot interfaces in Rasa and Dialogflow for campus users.",
      "Integrated frontend modules with backend ERP systems.",
    ],
    tech: ["Python", "Rasa", "Dialogflow", "JavaScript", "ERP"],
  },
];
