// Lucide icons
lucide.createIcons();

// ======= DATA =======
const skills = [
  { name: "Python", category: "Programming", level: 90, icon: "🐍" },
  { name: "R", category: "Programming", level: 75, icon: "📊" },
  { name: "SQL", category: "Programming", level: 85, icon: "🗃️" },
  { name: "Java", category: "Programming", level: 60, icon: "☕" },
  { name: "Power BI", category: "Visualization", level: 95, icon: "📈" },
  { name: "Tableau", category: "Visualization", level: 90, icon: "📊" },
  { name: "Excel", category: "Visualization", level: 85, icon: "📝" },
  { name: "D3.js", category: "Visualization", level: 70, icon: "🌐" },
  { name: "Scikit-Learn", category: "Machine Learning", level: 80, icon: "🤖" },
  { name: "TensorFlow", category: "Machine Learning", level: 65, icon: "🧠" },
  { name: "Pandas", category: "Machine Learning", level: 90, icon: "🐼" },
  { name: "NumPy", category: "Machine Learning", level: 85, icon: "🔢" },
  { name: "MySQL", category: "Database", level: 85, icon: "🛢️" },
  { name: "PostgreSQL", category: "Database", level: 80, icon: "🐘" },
  { name: "MongoDB", category: "Database", level: 70, icon: "🍃" },
  { name: "Problem Solving", category: "Soft Skills", level: 95, icon: "🧩" },
  { name: "Communication", category: "Soft Skills", level: 90, icon: "💬" },
  { name: "Analytical Thinking", category: "Soft Skills", level: 95, icon: "🔍" },
  { name: "Teamwork", category: "Soft Skills", level: 85, icon: "👥" },
];
const skillCategories = ["All", ...Array.from(new Set(skills.map(s => s.category)))];

const projects = [
  {
    id: 1,
    title: "Adidas Sales & Performance Dashboard",
    shortDescription: "Interactive Power BI dashboard analyzing Adidas sales and performance metrics",
    fullDescription: "Designed an interactive Power BI dashboard to track and analyze Adidas's sales and performance metrics. The dashboard offers real-time data filtering, regional drill-through analysis, KPI tracking, and actionable business insights. DAX measures and optimized ETL pipelines were used for efficient analytics.",
    thumbnail: "Images/AdidasDashBoard.png",
    techStack: ["Power BI", "DAX", "ETL", "Data Modeling"],
    goals: [
      "Provide real-time visibility into Adidas sales trends",
      "Utilize drill-through and filters for region-wise and product-wise analysis",
      "Use KPI metrics to track sales performance and growth"
    ],
    challenges: [
      "Building efficient data models for large volumes of data",
      "Designing dynamic visuals and interactive slicers",
      "Ensuring clean ETL flow for accurate data representation"
    ],
    outcomes: [
      "Streamlined reporting workflow",
      "Enhanced decision-making through granular analytics",
      "Improved performance visibility across departments"
    ],
    github: "https://github.com/8057vivek/Adidas_Sales_Dashboard",
    liveDemo: "https://shorturl.at/fx4ss", // replace with actual if available
    images: [
      "Images/AdidasDashBoard.png"
    ]
  },
  {
    id: 2,
    title: "Ultimate Weather App",
    shortDescription: "A responsive weather web app with real-time updates and forecast features",
    fullDescription: "Developed a sleek weather web application using HTML, CSS, and JavaScript, integrated with the OpenWeatherMap API. Features include live weather, 5-day forecasts, wind/humidity info, city search, and interactive data displays. Deployed using Vercel.",
    thumbnail: "Images/WeatherApp.png",
    techStack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Vercel"],
    goals: [
      "Deliver real-time weather updates",
      "Create a user-friendly and interactive UI",
      "Integrate 5-day weather forecasts with detailed info"
    ],
    challenges: [
      "Responsive UI development for multiple devices",
      "Handling API responses efficiently",
      "Displaying data in a clean and readable format"
    ],
    outcomes: [
      "Improved user engagement via sleek design",
      "Successful integration of real-time weather data",
      "Deployed a fully functional live app"
    ],
    github: "https://github.com/8057vivek/weather-app",
    liveDemo: "https://weather-app-by-vivek.vercel.app/", // replace with actual if needed
    images: [
      "Images/WeatherApp.png"
    ]
  },
  {
    id: 3,
    title: "Customer Churn Analysis (EDA & ML)",
    shortDescription: "Exploratory data analysis and machine learning to predict customer churn",
    fullDescription: "Performed EDA using Python libraries and built ML models to identify patterns behind customer churn. Decision Trees and Random Forests were applied, and model accuracy was validated using confusion matrices and cross-validation techniques.",
    thumbnail: "Images/churn.png",
    techStack: ["Python", "Pandas", "Seaborn", "scikit-learn", "Random Forest"],
    goals: [
      "Identify key reasons behind customer churn",
      "Use ML models to predict potential churners",
      "Deliver actionable business insights"
    ],
    challenges: [
      "Cleaning and preprocessing large datasets",
      "Choosing appropriate models for classification",
      "Validating model accuracy and avoiding overfitting"
    ],
    outcomes: [
      "Identified churn indicators improving retention strategies",
      "Achieved high classification accuracy with ensemble models",
      "Provided data-driven recommendations"
    ],
    github: "https://github.com/8057vivek/Churn_Analysis",
    // liveDemo: "https://example.com/churn-demo", // optional or placeholder
    images: [
      "Images/ChurnAnalysis.png"
    ]
    
  },
  // {
  //   id: 4,
  //   title: "Library Management System (C++)",
  //   shortDescription: "Console-based C++ project to manage library functions using linked lists and stacks",
  //   fullDescription: "Created a command-line Library Management System in C++ that manages book addition, deletion, issuing, returning, and searching. The system uses linked lists and stacks for efficient data organization and supports multiple users with distinct roles.",
  //   thumbnail: "https://images.unsplash.com/photo-1538930712424-59e2da5263e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  //   techStack: ["C++", "DSA", "Linked List", "Stack"],
  //   goals: [
  //     "Simulate real-world library operations",
  //     "Implement core data structures effectively",
  //     "Provide a smooth user experience via CLI"
  //   ],
  //   challenges: [
  //     "Designing an intuitive CLI interface",
  //     "Managing memory and pointers in C++",
  //     "Ensuring accurate tracking of issued/returned books"
  //   ],
  //   outcomes: [
  //     "Efficient library management simulation",
  //     "Practice of DSA concepts in real use-case",
  //     "Gained command-line C++ application experience"
  //   ],
  //   github: "https://github.com/8057vivek", // Replace with specific repo if created
  //   liveDemo: "", // not applicable for CLI apps
  //   images: [
  //     "https://images.unsplash.com/photo-1538930712424-59e2da5263e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  //   ]
  // }
];


const timelineItems = [
  {
    id: 1,
    title: "Summer Trainee – Board Infinity",
    organization: "Board Infinity",
    period: "June 2024 – July 2024",
    description: [
      "Developed a Library Management System in C++ using linked lists and stacks. Optimized algorithms for operations like add, delete, issue, and return. Gained hands-on experience in object-oriented programming and data structures."
    ],
    type: "experience"
  },
  {
    id: 2,
    title: "B.Tech in Computer Science",
    organization: "Lovely Professional University (LPU)",
    period: "July 2022 - Present",
    description: "CGPA: 8.21/10. Specialized in Data Science. Relevant coursework included Machine Learning, Data Analysis, Database Systems, and Statistical Methods.",
    type: "education"
  },
  {
    id: 4,
    title: "Intermediate (PCM)",
    organization: "Lucent International School, Dehradun",
    period: "Mar 2020 – May 2022",
    description: "Percentage: 86%. Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics.",
    type: "education"
  },
  {
    id: 5,
    title: "Matriculation",
    organization: "Shree Kunjilal Gulkandi Devi Public School, Agra",
    period: "Mar 2019 – May 2020",
    description: "Percentage: 81%. Completed 10th grade with a strong academic foundation.",
    type: "education"
  }
  // Add more timeline items as needed
];

const certifications = [
  {
    id: 1,
    title: "Data Structures and Algorithms",
    issuer: "Board Infinity",
    date: "Jun 2024",
    link: "Images/boardInfinity.png",
    skills: ["STL", "Data Structures", "Algorithms", "Logic Building"],
    badge: "Images/boardInfinity.png"
  },
  {
    id: 1,
    title: "Data Analysis with Tableau",
    issuer: "Coursera",
    date: "July 2022",
    link: "https://www.coursera.org/account/accomplishments/verify/5HEEFO0BXB97?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    skills: ["KPIs", "Visulaization", "Dashboards", "SQL"],
    badge: "Images/TableauCoursera.jpg"
  },
  {
    id: 1,
    title: "Safe and Responsible AI",
    issuer: "NPTEL",
    date: "July 2024",
    link: "Images/NPTEL.png",
    skills: ["AI Ethics", "Privacy", "Bias Mitigation", "Model Governance"],
    badge: "Images/NPTEL.png"
  },
  // Add more certifications as needed
];

/* Achievements section*/
const achievements = [
  {
    id: 1,
    title: "Top 5 in Hackathon",
    issuer: "Hackathon Event 2024",
    date: "October 2024",
    link: "Images/InnovXusHackathon.pdf",
    skills: ["Problem Solving", "Teamwork", "Innovation"],
    badge: "Images/InnovXusHackathon.png"
  },
  {
    id: 2,
    title: "Solved 350+ Leetcode Problems",
    issuer: "Leetcode",
    date: "January 2025",
    link: "https://leetcode.com/u/kaam_kar_Bhai/",
    skills: ["Algorithms", "Data Structures", "Problem Solving"],
    badge: "Images/leetcode.png"
  },
  // Add more achievements as needed
];


// ======= SKILLS SECTION =======
const skillCategoriesDiv = document.getElementById('skill-categories');
const skillsGrid = document.getElementById('skills-grid');
let activeSkillCategory = "All";
function renderSkillCategories() {
  skillCategoriesDiv.innerHTML = '';
  skillCategories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline';
    if (cat === activeSkillCategory) {
      btn.style.background = 'var(--primary)';
      btn.style.color = '#fff';
    }
    btn.textContent = cat;
    btn.onclick = () => {
      activeSkillCategory = cat;
      renderSkillCategories();
      renderSkills();
    };
    skillCategoriesDiv.appendChild(btn);
  });
}
function renderSkills() {
  skillsGrid.innerHTML = '';
  const filtered = activeSkillCategory === "All"
    ? skills
    : skills.filter(s => s.category === activeSkillCategory);
  filtered.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card fade-in';
    card.innerHTML = `
      <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem;">
        <span style="font-size:2rem;">${skill.icon}</span>
        <h3 style="font-weight:500;">${skill.name}</h3>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar" style="width:0"></div>
      </div>
      <div style="text-align:right;color:#888;font-size:0.95rem;">${skill.level}%</div>
    `;
    skillsGrid.appendChild(card);
    setTimeout(() => {
      card.querySelector('.progress-bar').style.width = skill.level + '%';
      card.classList.add('visible');
    }, 100);
  });
}
renderSkillCategories();
renderSkills();

// ======= PROJECTS SECTION =======
const projectsGrid = document.getElementById('projects-grid');
function renderProjects() {
  projectsGrid.innerHTML = '';
  projects.forEach((project, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb">
      <div style="padding:1.5rem;">
        <h3 style="font-size:1.15rem;font-weight:600;margin-bottom:0.5rem;">${project.title}</h3>
        <p style="color:#666;margin-bottom:1rem;">${project.shortDescription}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
          ${project.techStack.slice(0,3).map(tech => `<span style="padding:0.25rem 0.75rem;background:#f1f5f9;border-radius:9999px;font-size:0.95rem;">${tech}</span>`).join('')}
          ${project.techStack.length > 3 ? `<span style="padding:0.25rem 0.75rem;background:#f1f5f9;border-radius:9999px;font-size:0.95rem;">+${project.techStack.length-3}</span>` : ''}
        </div>
      </div>
    `;
    card.onclick = () => openProjectModal(project);
    projectsGrid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 100 + idx * 100);
  });
}
renderProjects();

// ======= PROJECT MODAL =======
const projectModal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
function openProjectModal(project) {
  modalBody.innerHTML = `
    ${project.images && project.images.length > 0 ? `<img src="${project.images[0]}" alt="${project.title}" style="width:100%;border-radius:1rem;margin-bottom:1.5rem;">` : ''}
    <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:1rem;">${project.title}</h2>
    <p style="color:#666;margin-bottom:1.5rem;">${project.fullDescription}</p>
    <h4 style="font-weight:600;margin-bottom:0.5rem;">Technology Stack</h4>
    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:1.5rem;">
      ${project.techStack.map(tech => `<span style="padding:0.25rem 0.75rem;background:#f1f5f9;border-radius:9999px;font-size:0.95rem;">${tech}</span>`).join('')}
    </div>
    <div class="grid" style="gap:1.5rem;margin-bottom:1.5rem;">
      <div>
        <h4 style="font-weight:600;margin-bottom:0.5rem;">Goals</h4>
        <ul style="color:#666;">${project.goals.map(g => `<li>${g}</li>`).join('')}</ul>
      </div>
      <div>
        <h4 style="font-weight:600;margin-bottom:0.5rem;">Challenges</h4>
        <ul style="color:#666;">${project.challenges.map(g => `<li>${g}</li>`).join('')}</ul>
      </div>
      <div>
        <h4 style="font-weight:600;margin-bottom:0.5rem;">Outcomes</h4>
        <ul style="color:#666;">${project.outcomes.map(g => `<li>${g}</li>`).join('')}</ul>
      </div>
    </div>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;">
      ${project.github ? `<a href="${project.github}" target="_blank" class="btn btn-outline"><i data-lucide="github"></i> View Code</a>` : ''}
      ${project.liveDemo ? `<a href="${project.liveDemo}" target="_blank" class="btn"><i data-lucide="external-link"></i> Live Demo</a>` : ''}
    </div>
  `;
  projectModal.classList.add('open');
  lucide.createIcons();
}
projectModal.querySelector('.modal-close').onclick = () => projectModal.classList.remove('open');
projectModal.onclick = e => { if (e.target === projectModal) projectModal.classList.remove('open'); };

// ======= TIMELINE SECTION =======
const timelineDiv = document.getElementById('timeline');
function renderTimeline() {
  timelineDiv.innerHTML = '';
  timelineItems.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'timeline-item fade-in';
    div.innerHTML = `
      <div class="timeline-dot ${item.type === 'education' ? 'education' : ''}" style="top:8px;">
        <i data-lucide="${item.type === 'education' ? 'graduation-cap' : 'briefcase'}" style="width:16px;height:16px;"></i>
      </div>
      <div style="margin-bottom:0.25rem;color:#888;font-size:0.95rem;">${item.period}</div>
      <h3 style="font-size:1.15rem;font-weight:600;margin-bottom:0.25rem;">${item.title}</h3>
      <div style="color:var(--primary);font-weight:500;margin-bottom:0.5rem;">${item.organization}</div>
      <p style="color:#666;">${item.description}</p>
    `;
    timelineDiv.appendChild(div);
    setTimeout(() => div.classList.add('visible'), 100 + idx * 100);
  });
  lucide.createIcons();
}
renderTimeline();

// ======= CERTIFICATIONS SECTION =======
const certGrid = document.getElementById('certifications-grid');

function renderCerts() {
  certGrid.innerHTML = '';
  certifications.forEach((cert, idx) => {
    const card = document.createElement('div');
    card.className = 'cert-card fade-in';
    card.innerHTML = `
      ${cert.badge ? `<img src="${cert.badge}" alt="badge" style="width:100%; height:160px; object-fit:fill;">` : ''}
      <div style="padding: 1rem; display: flex; flex-direction: column; gap: 0.5rem;">
      <div style="width: 100%; height: 3px; background-color: hwb(201 87% 6%); margin-bottom: -0.5rem;"></div>

        <h3 style="font-size:1.1rem; font-weight:600; margin-bottom:0.25rem;">${cert.title}</h3>
        <div style="color:var(--primary); font-weight:500;">${cert.issuer}</div>
        <div style="color:#888; font-size:0.95rem;">${cert.date}</div>

        <div style="display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:0.5rem;">
          ${cert.skills.map(skill => `<span style="padding:0.25rem 0.75rem; background:#e0e7ef; color:var(--primary); border-radius:9999px; font-size:0.9rem;">${skill}</span>`).join('')}
        </div>

        ${cert.link ? `<a href="${cert.link}" target="_blank" style="color:var(--primary); margin-top:0.75rem; font-size:0.95rem; text-decoration:none; display:inline-flex; align-items:center; gap:0.25rem;">View Certificate <i data-lucide="external-link" style="width:14px;height:14px;"></i></a>` : ''}
      </div>
    `;
    certGrid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 100 + idx * 100);
  });
  lucide.createIcons();
}
renderCerts();

// ======= ACHIEVEMENTS SECTION =======
const achievementGrid = document.getElementById('achievements-grid');

function renderAchievements() {
  achievementGrid.innerHTML = '';
  achievements.forEach((achievement, idx) => {
    const card = document.createElement('div');
    card.className = 'achievement-card fade-in';
    card.innerHTML = `
      <div class="achievement-image">
        ${achievement.badge ? `<img src="${achievement.badge}" alt="Badge">` : ''}
      </div>
      <div class="achievement-content">
        <h3 class="achievement-title">${achievement.title}</h3>
        <div class="achievement-issuer">${achievement.issuer}</div>
        <div class="achievement-date">${achievement.date}</div>
        <div class="achievement-skills">
          ${achievement.skills.map(skill => `<span class="skill">${skill}</span>`).join('')}
        </div>
        ${achievement.link ? `<a href="${achievement.link}" class="achievement-link" target="_blank">View Achievement <i data-lucide="external-link"></i></a>` : ''}
      </div>
    `;
    achievementGrid.appendChild(card);
    setTimeout(() => card.classList.add('visible'), 100 + idx * 100);
  });
  lucide.createIcons();
}

renderAchievements();

/* contact form*/
// Initialize EmailJS with your public key
(function() {
  emailjs.init("BMn8F8ow6AGx0vBtO");  // Public Key
})();

const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate form fields
  if (!document.getElementById("name").value || !document.getElementById("email").value || !document.getElementById("message").value) {
    alert("All fields are required.");
    return;
  }

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  console.log("Form Data: ", formData);  // Debug log

  emailjs.send("service_1zir2r8", "template_pkb8995", formData)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);

      // Show toast notification
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3000);

      // Reset form
      contactForm.reset();
    }, function(error) {
      console.error("Error details:", error);  // More detailed error log
      alert("Oops! Something went wrong.");
    });
});



// ======= NAVBAR SCROLLSPY & SMOOTH SCROLL =======
const navbarBtns = Array.from(document.querySelectorAll('#navbar button'));
const sections = ['home','skills','projects','experience','certifications','contact'].map(id => document.getElementById(id));
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  let current = 0;
  sections.forEach((sec, idx) => {
    if (sec.offsetTop <= scrollY) current = idx;
  });
  navbarBtns.forEach((btn, idx) => btn.classList.toggle('active', idx === current));
});
navbarBtns.forEach(btn => {
  btn.onclick = () => {
    document.getElementById(btn.dataset.target).scrollIntoView({behavior:'smooth'});
  };
});

// ======= FOOTER YEAR =======
document.getElementById('year').textContent = new Date().getFullYear();

// ======= ANIMATION ON SCROLL =======
function animateOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) el.classList.add('visible');
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// ======= ICONS INIT =======
lucide.createIcons();
