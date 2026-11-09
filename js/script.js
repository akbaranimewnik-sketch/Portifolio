/* ==========================================================================
   MAIN JAVASCRIPT LOGIC — 3 LANGUAGES (UZ, EN, RU) & POLYMORPHIC UI
   Jaloliddin Ro'ziqulov - Portfolio
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // State
  let currentLang = localStorage.getItem("portfolio_lang") || "uz";
  let currentTheme = localStorage.getItem("portfolio_theme") || "dark";

  // Elements
  const langButtons = document.querySelectorAll(".lang-btn");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIconSun = document.getElementById("themeIconSun");
  const themeIconMoon = document.getElementById("themeIconMoon");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  const skillsContainer = document.getElementById("skillsContainer");
  const projectsContainer = document.getElementById("projectsContainer");
  const contactForm = document.getElementById("contactForm");
  const toastMessage = document.getElementById("toastMessage");
  const globalToast = document.getElementById("globalToast");
  const globalToastText = document.getElementById("globalToastText");
  let toastTimer = null;

  // Global Notification Toast
  function showNotification(text) {
    if (!globalToast || !globalToastText) return;
    globalToastText.textContent = text;
    globalToast.classList.add("active");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      globalToast.classList.remove("active");
    }, 4000);
  }

  // SVG Icons
  const icons = {
    code: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    layout: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
    zap: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    terminal: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    folder: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    externalLink: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    github: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`
  };

  /* --------------------------------------------------------------------------
     1. THEME SWITCHING (Dark / Light)
     -------------------------------------------------------------------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
    currentTheme = theme;

    if (theme === "light") {
      themeIconSun.style.display = "block";
      themeIconMoon.style.display = "none";
    } else {
      themeIconSun.style.display = "none";
      themeIconMoon.style.display = "block";
    }
  }

  themeToggleBtn.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });

  applyTheme(currentTheme);

  /* --------------------------------------------------------------------------
     2. SKILLS RENDERING (UZ / EN / RU)
     -------------------------------------------------------------------------- */
  function renderSkills(lang) {
    if (!skillsContainer) return;
    skillsContainer.innerHTML = "";

    const dict = portfolioConfig.translations[lang] || portfolioConfig.translations.uz;

    portfolioConfig.skillsList.forEach((skill) => {
      const card = document.createElement("div");
      card.className = "skill-card reveal active";

      const iconSvg = icons[skill.icon] || icons.code;
      const isPython = skill.name === "Python";

      let levelText = skill.levelUz;
      let descText = skill.descUz;

      if (lang === "en") {
        levelText = skill.levelEn;
        descText = skill.descEn;
      } else if (lang === "ru") {
        levelText = skill.levelRu;
        descText = skill.descRu;
      }

      if (isPython) {
        levelText = dict.skills.statusLearning;
      }

      card.innerHTML = `
        <div class="skill-header">
          <div class="skill-icon-wrap">
            ${iconSvg}
          </div>
          <span class="skill-badge ${isPython ? 'accent-badge' : ''}">${levelText}</span>
        </div>
        <h3 class="skill-name">${skill.name}</h3>
        <p class="skill-desc">${descText}</p>
      `;

      skillsContainer.appendChild(card);
    });
  }

  /* --------------------------------------------------------------------------
     3. PROJECTS RENDERING (UZ / EN / RU)
     -------------------------------------------------------------------------- */
  function renderProjects(lang) {
    if (!projectsContainer) return;
    projectsContainer.innerHTML = "";

    const dict = portfolioConfig.translations[lang] || portfolioConfig.translations.uz;
    const t = dict.projects;

    portfolioConfig.projectsList.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card reveal active";

      let title = project.titleUz;
      let desc = project.descUz;
      let badge = project.badgeUz;

      if (lang === "en") {
        title = project.titleEn;
        desc = project.descEn;
        badge = project.badgeEn;
      } else if (lang === "ru") {
        title = project.titleRu;
        desc = project.descRu;
        badge = project.badgeRu;
      }

      const tagsHtml = project.tags
        .map(tag => `<span class="project-tag">${tag}</span>`)
        .join("");

      card.innerHTML = `
        <div>
          <div class="project-top">
            <span class="project-folder-icon">${icons.folder}</span>
            <span class="project-badge">${badge}</span>
          </div>
          <h3 class="project-title">${title}</h3>
          <p class="project-desc">${desc}</p>
        </div>
        <div>
          <div class="project-tags">
            ${tagsHtml}
          </div>
          <div class="project-actions">
            <a href="${project.demoUrl}" class="btn btn-secondary btn-sm btn-project-demo" data-demo="${project.demoUrl}" aria-label="${t.btnView} - ${title}">
              <span>${t.btnView}</span>
              ${icons.externalLink}
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="${t.btnCode} - ${title}">
              <span>${t.btnCode}</span>
              ${icons.github}
            </a>
          </div>
        </div>
      `;

      projectsContainer.appendChild(card);
    });

    // Handle clicks on placeholder demo buttons
    document.querySelectorAll(".btn-project-demo").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const demoUrl = btn.getAttribute("data-demo");
        if (demoUrl === "#" || !demoUrl) {
          e.preventDefault();
          const currentDict = portfolioConfig.translations[currentLang] || portfolioConfig.translations.uz;
          showNotification(currentDict.projects.demoNotice);
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. 3-WAY LANGUAGE SWITCHING (UZ, EN, RU)
     -------------------------------------------------------------------------- */
  function applyLanguage(lang) {
    if (!portfolioConfig.translations[lang]) {
      lang = "uz";
    }
    currentLang = lang;
    localStorage.setItem("portfolio_lang", lang);
    document.documentElement.lang = lang;

    // Highlight active lang button in segmented control
    langButtons.forEach(btn => {
      if (btn.getAttribute("data-lang") === lang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const dict = portfolioConfig.translations[lang];

    // Document title
    document.title = `${portfolioConfig.personal.name} | Portfolio`;

    // Dynamic text replacement for data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const keyPath = el.getAttribute("data-i18n").split(".");
      let val = dict;
      for (const k of keyPath) {
        if (val && val[k] !== undefined) {
          val = val[k];
        } else {
          val = null;
          break;
        }
      }
      if (val !== null) {
        el.textContent = val;
      }
    });

    // Form placeholders
    const formName = document.getElementById("formName");
    const formEmail = document.getElementById("formEmail");
    const formMessage = document.getElementById("formMessage");

    if (formName) formName.placeholder = dict.contact.formNamePlaceholder;
    if (formEmail) formEmail.placeholder = dict.contact.formEmailPlaceholder;
    if (formMessage) formMessage.placeholder = dict.contact.formMessagePlaceholder;

    // Location text
    const heroLoc = document.getElementById("heroLocationText");
    const contactLoc = document.getElementById("contactLocationText");
    if (heroLoc) heroLoc.textContent = portfolioConfig.personal.location[lang];
    if (contactLoc) contactLoc.textContent = portfolioConfig.personal.location[lang];

    // Re-render skills and projects
    renderSkills(lang);
    renderProjects(lang);
  }

  // Bind 3-way language buttons
  langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetLang = btn.getAttribute("data-lang");
      if (targetLang && targetLang !== currentLang) {
        applyLanguage(targetLang);
      }
    });
  });

  applyLanguage(currentLang);

  /* --------------------------------------------------------------------------
     5. MOBILE NAVIGATION MENU
     -------------------------------------------------------------------------- */
  hamburgerBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });

  /* --------------------------------------------------------------------------
     6. SCROLL ACTIVE LINK & REVEAL ANIMATIONS
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");

  function handleScroll() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  const observerOptions = {
    threshold: 0.12,
    rootMargin: "0px 0px -30px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((elem) => {
    revealObserver.observe(elem);
  });

  /* --------------------------------------------------------------------------
     7. CONTACT FORM SUBMISSION (Frontend Simulation)
     -------------------------------------------------------------------------- */
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameVal = document.getElementById("formName").value.trim();
      const emailVal = document.getElementById("formEmail").value.trim();
      const messageVal = document.getElementById("formMessage").value.trim();
      const btnSubmit = document.getElementById("btnSubmitForm");
      const dict = portfolioConfig.translations[currentLang].contact;

      if (!nameVal || !emailVal || !messageVal) {
        toastMessage.className = "toast-msg show error";
        toastMessage.textContent = dict.errorMsg;
        return;
      }

      const originalBtnHtml = btnSubmit.innerHTML;
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = `<span>${dict.sending}</span>`;

      setTimeout(() => {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = originalBtnHtml;

        toastMessage.className = "toast-msg show success";
        toastMessage.textContent = dict.successMsg;

        contactForm.reset();

        setTimeout(() => {
          toastMessage.className = "toast-msg";
        }, 5000);
      }, 700);
    });
  }
});
