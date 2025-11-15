// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Demo Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const demoButtons = document.querySelectorAll('.project-demo-btn');

// Project demo data
const projectDemos = {
    1: {
        title: "Legal Research & Knowledge Assistant (RAG)",
        description: "A retrieval-augmented generation system for legal document search and Q&A",
        tech: ["Python", "Pinecone", "OpenAI", "Vector Embeddings", "RAG Architecture"],
        features: [
            "Indexes domain-specific legal documents into vector database",
            "Uses open-source embeddings for document similarity search",
            "Generates context-aware answers using OpenAI",
            "Overcomes model knowledge cut-offs with real-time retrieval",
            "Fast and relevant search results for legal queries"
        ],
        input: {
            title: "Example Query",
            content: "What are the requirements for filing a patent application?"
        },
        output: {
            title: "Generated Response",
            content: "Based on the indexed legal documents, filing a patent application requires:\n\n1. A detailed description of the invention\n2. Claims defining the scope of protection\n3. Drawings (if applicable)\n4. Abstract summarizing the invention\n5. Filing fees and required forms\n\nThe application must be filed with the patent office and meet all statutory requirements for novelty, non-obviousness, and utility."
        },
        workflow: [
            "User submits a legal query",
            "System converts query to vector embedding",
            "Searches Pinecone vector database for similar documents",
            "Retrieves top-k relevant document chunks",
            "Augments prompt with retrieved context",
            "Generates answer using OpenAI GPT model",
            "Returns context-aware response to user"
        ]
    },
    2: {
        title: "Call Center Sentiment & Quality Dashboard",
        description: "Real-time analytics dashboard for call center performance and sentiment analysis",
        tech: ["Python", "ASR (Automatic Speech Recognition)", "GPT-4o-mini", "Flask", "Data Visualization"],
        features: [
            "Transcribes call-center conversations using ASR",
            "Classifies sentiment (positive, negative, neutral) using GPT-4o-mini",
            "Extracts conversational topics and key issues",
            "Generates Conversation Quality Comments (CQC)",
            "Visualizes trends in call volume, sentiment, and common issues",
            "Enables supervisors to evaluate agent performance"
        ],
        input: {
            title: "Sample Call Transcript",
            content: "Agent: Good morning, thank you for calling. How can I help you today?\nCustomer: Hi, I'm having issues with my internet connection. It keeps dropping.\nAgent: I understand your frustration. Let me check your account and help resolve this.\nCustomer: This has been going on for days and it's really affecting my work.\nAgent: I apologize for the inconvenience. I can see there's a service outage in your area. Let me escalate this to our technical team immediately.\nCustomer: Thank you, I really appreciate your help."
        },
        output: {
            title: "Analysis Results",
            content: "Sentiment Classification: Positive (despite initial frustration)\n\nKey Topics Identified:\n- Internet connectivity issues\n- Service outage\n- Customer satisfaction\n\nConversation Quality Comments:\n✓ Agent showed empathy and understanding\n✓ Proper escalation to technical team\n✓ Customer concern addressed effectively\n✓ Professional tone maintained throughout\n\nSentiment Trend: Improved from negative to positive\nAgent Performance Score: 8.5/10"
        },
        workflow: [
            "Audio input from call center recordings",
            "ASR converts speech to text transcript",
            "GPT-4o-mini analyzes transcript for sentiment",
            "Extracts topics and key issues",
            "Generates quality assessment comments",
            "Updates dashboard with metrics and visualizations",
            "Supervisors can view real-time analytics"
        ]
    },
    3: {
        title: "Multi-Language Card OCR Service (Offline)",
        description: "Offline OCR service for identity cards, driver's licenses, and membership cards",
        tech: ["PaddleOCR", "Python", "FastAPI", "Computer Vision", "80+ Languages"],
        features: [
            "Offline processing - no internet required",
            "Supports 80+ languages",
            "Handles identity cards, driver's licenses, and membership cards",
            "Modular pipeline: detection, orientation, recognition",
            "Key-value extraction for structured data",
            "Lightweight and server model options",
            "Ensures data privacy and reduces API costs"
        ],
        input: {
            title: "Input Card Image",
            content: "[Card Image Upload]\n\nCard Type: Driver's License\nLanguage: English\n\nImage Processing:\n- Automatic text detection\n- Orientation correction\n- Region identification"
        },
        output: {
            title: "Extracted Information",
            content: "Card Type: Driver's License\n\nExtracted Fields:\n┌─────────────────────────────────┐\n│ Name: John Doe                  │\n│ Date of Birth: 01/15/1990      │\n│ License Number: DL123456789     │\n│ Expiry Date: 12/31/2025         │\n│ Address: 123 Main St, City      │\n│ Restrictions: None              │\n│ Class: D                        │\n└─────────────────────────────────┘\n\nConfidence Score: 98.5%\nProcessing Time: 1.2 seconds\nLanguage Detected: English"
        },
        workflow: [
            "User uploads card image",
            "PaddleOCR detects text regions",
            "Orientation classification and correction",
            "Text recognition using OCR model",
            "Key-value extraction and structuring",
            "Validation and confidence scoring",
            "Returns structured JSON data"
        ]
    },
    4: {
        title: "Resume Parser & Job-Matching Portal",
        description: "AI-powered recruitment platform for resume parsing and candidate-job matching",
        tech: ["Python", "NLP (Natural Language Processing)", "Django", "SQL", "Machine Learning"],
        features: [
            "Upload and parse resumes using NLP",
            "Extracts structured information (name, skills, experience, education)",
            "Matches candidates to job requirements",
            "Ranking algorithm for best-fit candidates",
            "Recruiter dashboard with search functionality",
            "Streamlined recruitment workflows"
        ],
        input: {
            title: "Resume Upload & Job Description",
            content: "Resume Upload:\n- PDF/DOCX file format\n- Automatic parsing\n\nJob Description:\nPosition: Senior Python Developer\n\nRequirements:\n- 5+ years Python experience\n- Django/Flask framework knowledge\n- Machine Learning experience\n- SQL database skills\n- RESTful API development\n- Git version control"
        },
        output: {
            title: "Matching Results",
            content: "Candidate: Jawaria Majid\nMatch Score: 92%\n\nExtracted Information:\n┌─────────────────────────────────────┐\n│ Skills:                            │\n│ ✓ Python (Advanced)                │\n│ ✓ Django Framework                 │\n│ ✓ Machine Learning                 │\n│ ✓ SQL Database                     │\n│ ✓ RESTful APIs                     │\n│ ✓ Git & GitHub                     │\n│                                     │\n│ Experience: 6 years                │\n│ Education: BS Computer Science      │\n│                                     │\n│ Matching Criteria:                  │\n│ ✓ Python: 5+ years ✓               │\n│ ✓ Django/Flask ✓                   │\n│ ✓ ML Experience ✓                  │\n│ ✓ SQL Skills ✓                     │\n│ ✓ API Development ✓                │\n│ ✓ Git ✓                            │\n└─────────────────────────────────────┘\n\nRank: #1 (Top Match)\nRecommendation: Strong candidate, proceed to interview"
        },
        workflow: [
            "Recruiter uploads resume and job description",
            "NLP engine extracts structured data from resume",
            "System analyzes job requirements",
            "Matching algorithm compares candidate skills to job requirements",
            "Calculates match score and ranking",
            "Displays results in recruiter dashboard",
            "Enables search, filter, and export functionality"
        ]
    }
};

// Open modal with project demo
demoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const projectId = button.getAttribute('data-project');
        const project = projectDemos[projectId];
        
        if (project) {
            displayProjectDemo(project);
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Display project demo in modal
function displayProjectDemo(project) {
    modalBody.innerHTML = `
        <div class="demo-header">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
        </div>
        
        <div class="demo-section">
            <h3><i class="fas fa-code"></i> Technical Stack</h3>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
        
        <div class="demo-section">
            <h3><i class="fas fa-star"></i> Key Features</h3>
            <ul class="features-list">
                ${project.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="demo-section">
            <h3><i class="fas fa-arrow-right"></i> How It Works</h3>
            <ol class="features-list" style="list-style: decimal; padding-left: 1.5rem;">
                ${project.workflow.map(step => `<li style="list-style: decimal;">${step}</li>`).join('')}
            </ol>
        </div>
        
        <div class="demo-section">
            <h3><i class="fas fa-play-circle"></i> Live Demo</h3>
            <div class="demo-input">
                <h4>${project.input.title}</h4>
                <div class="demo-input-content">${project.input.content}</div>
            </div>
            <div style="text-align: center; margin: 1rem 0;">
                <i class="fas fa-arrow-down" style="font-size: 2rem; color: var(--primary-color);"></i>
            </div>
            <div class="demo-output">
                <h4>${project.output.title}</h4>
                <div class="demo-output-content">${project.output.content}</div>
            </div>
        </div>
    `;
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animate on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section > .container > *').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

