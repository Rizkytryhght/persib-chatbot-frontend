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
    { step: 1, icon: "💬", title: "User Query", desc: "Ask a question" },
    { step: 2, icon: "🔍", title: "Knowledge Retrieval", desc: "Searching knowledge docs" },
    { step: 3, icon: "📄", title: "Context Augmentation", desc: "Combining query and docs" },
    { step: 4, icon: "🧠", title: "Response Generation", desc: "LLM generates answer" },
    { step: 5, icon: "✅", title: "Final Answer", desc: "Delivered to Bobotoh" },
  ],
  useCases: [
    { image: "ticketing.jpg", title: "Ticketing", desc: "How to buy" },
    { image: "membership.jpg", title: "Membership", desc: "Benefits" },
    { image: "schedule.jpg", title: "Match Schedule", desc: "Who is next" },
    { image: "merch.jpg", title: "Merchandise", desc: "Limited editions" },
    { image: "stadium.jpg", title: "Stadium Rules", desc: "Forbidden items" },
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