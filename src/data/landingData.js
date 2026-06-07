import ticketingImg from "../assets/images/ticketing.jpg";
import membershipImg from "../assets/images/membership.jpg";
import scheduleImg from "../assets/images/schedule.jpg";
import merchImg from "../assets/images/merch.png";
import stadiumImg from "../assets/images/stadium.jpg";

export const landingData = {
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Technology", href: "#technology" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  features: [
    { icon: "🎫", title: "Ticket Assistance", desc: "How to buy and secure tickets" },
    { icon: "📅", title: "Match Information", desc: "Match calendar and updates" },
    { icon: "🤝", title: "Membership Support", desc: "Membership tiers and ID cards" },
    { icon: "👕", title: "Merchandise Info", desc: "Limited editions jersey and hats" },
    { icon: "⚡", title: "Instant Responses", desc: "Lightning fast replies 24/7" },
    { icon: "🏟️", title: "Stadium Regulations", desc: "Stadium rules and forbidden items" },
  ],
  howItWorks: [
    {
      step: "01",
      icon: "💬",
      title: "Ask a Question",
      desc: "Ask about tickets, match schedules, memberships, merchandise, or stadium regulations."
    },
    {
      step: "02",
      icon: "🔍",
      title: "Search Knowledge",
      desc: "The system retrieves relevant information from official Persib knowledge sources."
    },
    {
      step: "03",
      icon: "📚",
      title: "Build Context",
      desc: "Relevant documents and user questions are combined into a structured context."
    },
    {
      step: "04",
      icon: "🧠",
      title: "Generate Response",
      desc: "The AI generates a clear and accurate answer based on retrieved information."
    },
    {
      step: "05",
      icon: "✅",
      title: "Deliver Answer",
      desc: "Fans receive instant responses backed by trusted club information."
    }
  ],
  useCases: [
    { image: ticketingImg, title: "Ticketing", desc: "How to buy" },
    { image: membershipImg, title: "Membership", desc: "Benefits" },
    { image: scheduleImg, title: "Match Schedule", desc: "Who is next" },
    { image: merchImg, title: "Merchandise", desc: "Limited editions" },
    { image: stadiumImg, title: "Stadium Rules", desc: "Forbidden items" },
  ],
  technologies: [
    { icon: "⚛️", title: "React" },
    { icon: "🧠", title: "LLM" },
    { icon: "🔄", title: "RAG" },
    { icon: "🗄️", title: "Knowledge Base" },
    { icon: "🔌", title: "API Integration" },
  ],
  faqs: [
    { 
      question: "Apakah Maung Bot tersedia 24 jam?", 
      answer: "Tentu, Maung Bot tersedia 24 jam sehari, 7 hari seminggu untuk menjawab seluruh pertanyaan Bobotoh secara instan." 
    },
    { 
      question: "Informasi apa saja yang bisa ditanyakan?", 
      answer: "Persib Bandung akan segera mengumumkan seluruh informasi. Mulai dari jadwal, tiket, merchandise, hingga aturan stadion. Informasi yang diberikan merupakan respons dari knowledge base resmi Maung Bot." 
    },
    { 
      question: "Seberapa akurat jawaban Maung Bot?", 
      answer: "Sangat akurat karena didukung oleh teknologi Retrieval-Augmented Generation (RAG) yang menarik data langsung dari dokumen resmi klub." 
    },
    { 
      question: "Apakah saya perlu akun untuk menggunakan Maung Bot?", 
      answer: "Beberapa fitur umum bisa diakses tanpa akun, namun untuk bantuan tiket dan keanggotaan spesifik, disarankan untuk login." 
    },
  ]
};