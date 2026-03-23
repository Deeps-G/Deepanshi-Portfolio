export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    links: { label: string; url: string }[];
  };
  education: {
    degree: string;
    institution: string;
    dates: string;
    cgpa: string;
  }[];
  experience: {
    company: string;
    role: string;
    dates: string;
    location: string;
    bullets: string[];
    metrics?: string[];
  }[];
  projects: {
    title: string;
    stack?: string;
    bullets: string[];
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
  achievements: {
    text: string;
    context: string;
  }[];
  extra: string[];
}

export const resumeData: ResumeData = {
  basics: {
    name: "Deepanshi Goyal",
    title: "AI and Data Science Student",
    summary: "AI and Data Science student with practical experience in ML models, RAG pipelines, and LLM workflows. Interested in agentic AI, multi-agent systems, and applying data-driven methods to solve real problems. Skilled in Python, SQL, and translating complex analysis into understandable insights.",
    location: "India",
    email: "deepanshigoyal12345@gmail.com",
    phone: "8595707712",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/deepanshi-goyal-b049a7282" },
      { label: "GitHub", url: "https://github.com/Deeps-G" }
    ]
  },
  education: [
    {
      degree: "B.Tech, Computer Science (Data Science)",
      institution: "The NorthCap University",
      dates: "2023-2027",
      cgpa: "7.87"
    }
  ],
  experience: [
    {
      company: "IBM Edunet AICTE",
      role: "Machine Learning Intern",
      dates: "June 2025 – July 2025",
      location: "Remote",
      bullets: [
        "Built employee salary prediction model using multiple ML algorithms and comparative analysis.",
        "Implemented stacking ensemble (Random Forest, Gradient Boosting, Logistic Regression) achieving improved accuracy.",
        "Performed data preprocessing, feature engineering, and evaluation using standard metrics."
      ],
      metrics: ["Improved accuracy via stacking ensemble"]
    },
    {
      company: "Prodesk IT",
      role: "Frontend Developer Intern",
      dates: "June 2025 – July 2025",
      location: "Remote",
      bullets: [
        "Developed responsive frontend modules using HTML, CSS, and JavaScript.",
        "Enhanced UI usability and performance for assigned web pages."
      ]
    }
  ],
  projects: [
    {
      title: "RAG-Based Q&A System (AI / NLP)",
      stack: "Python, Hugging Face, OpenAI API, Vector embeddings, Prompt Engineering",
      bullets: [
        "Built document parsing, chunking, vector store creation, and retrieval pipeline.",
        "Integrated transformer-based LLM for context-aware response generation."
      ]
    },
    {
      title: "Kisan Bazaar",
      bullets: [
        "Designed system architecture for a smart agricultural marketplace.",
        "Proposed AI chatbot integration for soil analysis and price prediction."
      ]
    },
    {
      title: "Olympics Data Analysis",
      bullets: [
        "Analyzed historical Summer Olympics dataset (1896–2024) using Python to identify long-term performance trends and statistical patterns across countries and sports.",
        "Performed data cleaning, exploratory data analysis, and visualization to interpret temporal trends in large-scale structured data."
      ]
    },
    {
      title: "Disease Prediction Model",
      bullets: [
        "Developed a machine learning model to predict disease likelihood based on patient data using classification algorithms.",
        "Performed data preprocessing, feature selection, and model evaluation to improve predictive accuracy and support data-driven decision making."
      ]
    },
    {
      title: "Terrorist Data Analysis",
      bullets: [
        "Conducted large-scale data analysis of global terrorist activity datasets using business intelligence and visualization techniques.",
        "Identified spatial and temporal patterns and presented structured analytical insights through data visualization dashboards."
      ]
    }
  ],
  skills: [
    { category: "Languages", items: ["Java", "Python", "HTML/CSS", "SQL", "JavaScript", "Git", "VS Code"] },
    { category: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Feature Engineering", "Model Selection", "Evaluation Metrics"] },
    { category: "Deep Learning & AI", items: ["Neural Networks", "PyTorch", "Deep Learning fundamentals", "Agentic AI", "MAS"] },
    { category: "Generative AI / NLP", items: ["RAG (intuitive understanding & basic implementation)", "LLM concepts", "Prompt Engineering", "Hugging Face models & hosting"] },
    { category: "Visualization & BI", items: ["Tableau", "KNIME"] },
    { category: "Developer Tools", items: ["Git", "Docker", "VS Code"] }
  ],
  achievements: [
    { text: "Achieved improved accuracy in salary prediction using stacking ensemble (Random Forest, Gradient Boosting, Logistic Regression).", context: "IBM Edunet AICTE Intern" }
  ],
  extra: []
};
