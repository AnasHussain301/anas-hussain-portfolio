import type { ProjectItem } from "./types";

export const projects: ProjectItem[] = [
  {
    title: "RepairDesk AI Copilot",
    description: "Production-ready AI support assistant using RAG and Amazon Bedrock to retrieve documentation, reduce hallucinations, and power secure serverless customer support workflows.",
    stack: ["Python", "Amazon Bedrock", "Claude", "RAG", "FAISS", "LangChain", "AWS Lambda", "API Gateway", "DynamoDB", "S3"],
    category: "AI / Cloud",
    year: "",
    demoUrl: "https://drive.google.com/file/d/13ExBk5POb-AtnK004LUIwC9LEDiSSHWS/view?usp=drive_link",
    GitHub : "https://github.com/AnasHussain301/repairdesk-ai-copilot" ,
  },
 {
  title: "AI Video Generation Studio",
  description:
    "Cloud-native Generative AI application that transforms natural language prompts into high-quality AI-generated videos using Amazon Bedrock and Amazon Nova Reel. Built on a scalable serverless AWS architecture with secure APIs, cloud storage, and an intuitive web interface for generating cinematic video content through prompt engineering.",
  stack: [
    "Amazon Bedrock",
    "Amazon Nova Reel",
    "AWS Lambda",
    "API Gateway",
    "CloudFront",
    "Amazon S3",
    "DynamoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "Prompt Engineering"
  ],
  category: "Generative AI / Cloud",
  year: "",
  demoUrl:
    "https://drive.google.com/file/d/1hNQJuQN5Pjm9h0WEN6Di715kqjW57hEz/view?usp=drive_link",
  GitHub: "https://github.com/AnasHussain301/video-studio-ai",
},

  {
    title: "MBTI Personality Predictor",
    description: "End-to-end NLP platform that predicts Myers–Briggs personality types from free-form text using hybrid embedding and feature-based machine learning pipelines.",
    stack: ["Python", "Streamlit", "Scikit-learn", "BERT", "TF-IDF", "VADER", "SMOTE", "Pandas", "NumPy", "Joblib"],
    category: "ML / NLP",
    year: "",
    demoUrl: "https://drive.google.com/file/d/11a4dsXPHJMjxFx12lneJjqA7Cj7YtToE/view?usp=drive_link",
    GitHub : "https://github.com/AnasHussain301/mbti-personality-predictor" ,
  },
  {
    title: "Car Repair Shop POS System",
    description: "Desktop workshop management system for repair businesses, with customer tracking, inventory control, invoicing, employee management, and analytics in a modern WPF architecture.",
    stack: ["C#", ".NET", "WPF", "Entity Framework Core", "PostgreSQL", "Material Design in XAML", "LiveCharts", "PDFSharpCore"],
    category: "Desktop / Business",
    year: "",
    GitHub : "https://github.com/AnasHussain301/Car-Repair-Shop-Pos-System",
  },
  {
    title: "VR Chemistry Lab",
    description: "Immersive virtual reality chemistry lab for Meta Quest 2 that enables safe experimental practice and interactive XR simulations of laboratory procedures.",
    stack: ["Unity", "C#", "Meta Quest 2", "XR Interaction Toolkit", "Physics Simulation"],
    category: "XR / Education",
    year: "",
    demoUrl: "https://drive.google.com/file/d/189exor2LBqAa4jLfL9KnJOPcIxECmr6A/view?usp=drive_link",
    GitHub :"https://github.com/AnasHussain301/VR_ChemistryLab",
  },
  {
    title: "The Last Gardener",
    description: "Narrative-driven 3D survival adventure focused on restoring a cyber-garden civilization through exploration, resource management, and mission-based gameplay.",
    stack: ["Unity", "C#", "WebGL"],
    category: "Game / Unity",
    year: "",
    demoUrl: "https://drive.google.com/file/d/1J_G7x_BjxicSAF3_oRi28z5thPaWDO0-/view?usp=drive_link",
    GitHub : "https://github.com/anas23049/The-Last-Gardener",
  },
];
