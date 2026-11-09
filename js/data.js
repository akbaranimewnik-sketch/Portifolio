/* ==========================================================================
   CONFIG & TRANSLATION DICTIONARY (UZ, EN, RU)
   Jaloliddin Ro'ziqulov - Shaxsiy Portfolio
   Ushbu fayldan barcha matnlar, ijtimoiy tarmoq havolalari va loyihalarni
   osonlik bilan o'zgartirishingiz mumkin.
   ========================================================================== */

const portfolioConfig = {
  // Asosiy ma'lumotlar
  personal: {
    name: "Jaloliddin Ro'ziqulov",
    role: {
      uz: "Junior Dasturchi & IT Qiziquvchisi",
      en: "Junior Developer & Tech Enthusiast",
      ru: "Junior Разработчик & IT Энтузиаст"
    },
    location: {
      uz: "Guliston, Sirdaryo viloyati, O'zbekiston",
      en: "Guliston, Sirdaryo region, Uzbekistan",
      ru: "Гулистан, Сырдарьинская область, Узбекистан"
    },
    socials: {
      telegram: "https://t.me/jaloliddin_roziqulov",
      github: "https://github.com/jaloliddin-roziqulov",
      email: "jaloliddin@example.com"
    }
  },

  // Sahifa matnlari (O'zbekcha, Inglizcha, Ruscha)
  translations: {
    uz: {
      nav: {
        about: "Men haqimda",
        skills: "Ko'nikmalar",
        projects: "Loyihalar",
        contact: "Aloqa"
      },
      hero: {
        badge: "Dasturlash olamiga ilk qadamlar",
        greeting: "Salom, men",
        name: "Jaloliddin Ro'ziqulov",
        tagline: "Axborot texnologiyalari va dasturlashga katta qiziqish bilan yangi bilimlarni egallayotgan yosh dasturchiman.",
        btnAbout: "Men haqimda",
        btnContact: "Bog'lanish"
      },
      about: {
        title: "Men haqimda",
        subtitle: "Mening yo'lim va maqsadlarim",
        p1: "Men Guliston shahrida (Sirdaryo viloyati) yashayman. Axborot texnologiyalari sohasiga bo'lgan kuchli qiziqishim meni dasturlash olamiga olib kirdi.",
        p2: "Hozirda veb-texnologiyalar (HTML, CSS, JavaScript) va Python dasturlash tilining asoslarini qunt bilan o'rganmoqdaman. Murakkab muammolarga oddiy va chiroyli yechim topish, yangi vositalarni amaliyotda sinash menga doimo zavq beradi.",
        p3: "Maqsadim — sifatli, zamonaviy va insonlarga foydali dasturiy ta'minotlar yaratish hamda tajribali mutaxassis bo'lib yetishish.",
        stat1_num: "Guliston",
        stat1_text: "Yashash joyim",
        stat2_num: "Frontend",
        stat2_text: "Asosiy yo'nalish",
        stat3_num: "2026",
        stat3_text: "Yangi marralar yili"
      },
      skills: {
        title: "Texnologiyalar & Ko'nikmalar",
        subtitle: "Hozirda foydalanayotgan va o'rganayotgan vositalarim",
        statusLearning: "O'rganilmoqda",
        statusBase: "Asosiy tushuncha",
        statusGood: "Yaxshi darajada"
      },
      projects: {
        title: "Loyihalar",
        subtitle: "Amaliyot va tajriba oshirish uchun tayyorlangan ishlar",
        btnView: "Ko'rish",
        btnCode: "Kodni ko'rish",
        badgeStudy: "O'quv loyihasi",
        demoNotice: "Ushbu loyiha hali ishlab chiqilmoqda. Jonli namuna tez kunda joylanadi!"
      },
      contact: {
        title: "Bog'lanish",
        subtitle: "Savollaringiz bormi yoki taklifingiz? Xabar qoldiring!",
        directTitle: "To'g'ridan-to'g'ri aloqa",
        directDesc: "Menga Telegram orqali yozishingiz yoki loyihalarimni GitHub orqali kuzatib borishingiz mumkin.",
        formName: "Ismingiz",
        formNamePlaceholder: "Masalan: Azamat",
        formEmail: "Email yoki Telegram manzilingiz",
        formEmailPlaceholder: "@username yoki pochta",
        formMessage: "Xabaringiz",
        formMessagePlaceholder: "Fikringiz yoki taklifingizni yozing...",
        btnSend: "Xabarni yuborish",
        sending: "Yuborilmoqda...",
        successMsg: "Rahmat! Xabaringiz muvaffaqiyatli qabul qilindi.",
        errorMsg: "Iltimos, barcha maydonlarni to'ldiring."
      },
      footer: {
        rights: "Barcha huquqlar himoyalangan.",
        backToTop: "Yuqoriga"
      }
    },

    en: {
      nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
      },
      hero: {
        badge: "First steps into software development",
        greeting: "Hello, I am",
        name: "Jaloliddin Ro'ziqulov",
        tagline: "A motivated beginner developer from Uzbekistan, enthusiastic about programming, web development, and problem solving.",
        btnAbout: "About me",
        btnContact: "Get in touch"
      },
      about: {
        title: "About Me",
        subtitle: "My journey and aspirations",
        p1: "I live in Guliston, Sirdaryo region, Uzbekistan. My strong passion for technology led me directly into the world of computer science and software development.",
        p2: "Currently, I am dedicated to learning core web technologies (HTML, CSS, JavaScript) alongside Python fundamentals. I love breaking down problems and bringing concepts to life through clean code.",
        p3: "My goal is to develop clean, intuitive, and genuinely useful digital products while constantly leveling up my engineering skills.",
        stat1_num: "Guliston",
        stat1_text: "Based in",
        stat2_num: "Frontend",
        stat2_text: "Current focus",
        stat3_num: "2026",
        stat3_text: "Year of growth"
      },
      skills: {
        title: "Technologies & Skills",
        subtitle: "Tools and languages I actively use and learn",
        statusLearning: "Learning",
        statusBase: "Fundamentals",
        statusGood: "Proficient"
      },
      projects: {
        title: "Projects",
        subtitle: "Practical applications and experiments I've built",
        btnView: "Live Demo",
        btnCode: "View Code",
        badgeStudy: "Pet Project",
        demoNotice: "This project is currently in development. Live demo coming soon!"
      },
      contact: {
        title: "Contact",
        subtitle: "Have questions, advice, or want to collaborate? Feel free to reach out!",
        directTitle: "Direct Channels",
        directDesc: "You can message me on Telegram or check out my repositories on GitHub.",
        formName: "Your Name",
        formNamePlaceholder: "e.g. John Doe",
        formEmail: "Email or Telegram Handle",
        formEmailPlaceholder: "@username or email",
        formMessage: "Message",
        formMessagePlaceholder: "Write your message or inquiry here...",
        btnSend: "Send Message",
        sending: "Sending...",
        successMsg: "Thank you! Your message has been received.",
        errorMsg: "Please fill in all required fields."
      },
      footer: {
        rights: "All rights reserved.",
        backToTop: "Back to top"
      }
    },

    ru: {
      nav: {
        about: "Обо мне",
        skills: "Навыки",
        projects: "Проекты",
        contact: "Контакты"
      },
      hero: {
        badge: "Первые шаги в мире программирования",
        greeting: "Привет, я",
        name: "Жалолиддин Розикулов",
        tagline: "Молодой мотивированный разработчик из Узбекистана, увлечённый программированием и веб-технологиями.",
        btnAbout: "Обо мне",
        btnContact: "Связаться"
      },
      about: {
        title: "Обо мне",
        subtitle: "Мой путь и профессиональные цели",
        p1: "Я живу в городе Гулистан (Сырдарьинская область). Сильный интерес к миру IT привёл меня в сферу разработки программного обеспечения.",
        p2: "Сейчас я усердно изучаю современные веб-технологии (HTML, CSS, JavaScript) и основы языка Python. Мне нравится находить простые и элегантные решения для интересных задач.",
        p3: "Моя цель — создавать качественные, современные и по-настоящему полезные продукты, постоянно совершенствуя инженерные навыки.",
        stat1_num: "Гулистан",
        stat1_text: "Локация",
        stat2_num: "Frontend",
        stat2_text: "Направление",
        stat3_num: "2026",
        stat3_text: "Год новых целей"
      },
      skills: {
        title: "Технологии & Навыки",
        subtitle: "Инструменты и языки, которые я изучаю и практикую",
        statusLearning: "В процессе",
        statusBase: "Базовые знания",
        statusGood: "Хороший уровень"
      },
      projects: {
        title: "Проекты",
        subtitle: "Практические работы для закрепления навыков",
        btnView: "Демо",
        btnCode: "Исходный код",
        badgeStudy: "Учебный проект",
        demoNotice: "Этот проект находится в разработке. Онлайн демо скоро появится!"
      },
      contact: {
        title: "Контакты",
        subtitle: "Есть вопросы, предложения или идея для сотрудничества? Напишите мне!",
        directTitle: "Прямая связь",
        directDesc: "Вы можете написать мне в Telegram или посмотреть мои репозитории на GitHub.",
        formName: "Ваше имя",
        formNamePlaceholder: "Например: Азамат",
        formEmail: "Email или Telegram",
        formEmailPlaceholder: "@username или почта",
        formMessage: "Ваше сообщение",
        formMessagePlaceholder: "Напишите ваш вопрос или предложение...",
        btnSend: "Отправить сообщение",
        sending: "Отправка...",
        successMsg: "Спасибо! Ваше сообщение успешно получено.",
        errorMsg: "Пожалуйста, заполните все обязательные поля."
      },
      footer: {
        rights: "Все права защищены.",
        backToTop: "Наверх"
      }
    }
  },

  // Ko'nikmalar ro'yxati
  skillsList: [
    {
      name: "HTML5",
      category: "Frontend",
      descUz: "Semantik tuzilma, qulaylik (accessibility) va toza kodlash.",
      descEn: "Semantic structure, clean markup and web accessibility.",
      descRu: "Семантическая верстка, доступность (a11y) и чистый код.",
      levelUz: "Yaxshi asos",
      levelEn: "Solid basics",
      levelRu: "Хорошая база",
      icon: "code"
    },
    {
      name: "CSS3",
      category: "Frontend",
      descUz: "Flexbox, Grid, moslashuvchan (responsive) dizayn va animatsiyalar.",
      descEn: "Flexbox, CSS Grid, responsive design and smooth animations.",
      descRu: "Flexbox, Grid, адаптивный дизайн и плавные анимации.",
      levelUz: "Yaxshi asos",
      levelEn: "Solid basics",
      levelRu: "Хорошая база",
      icon: "layout"
    },
    {
      name: "JavaScript",
      category: "Frontend",
      descUz: "ES6+ sintaksisi, DOM bilan ishlash, interaktivlik va funksiyalar.",
      descEn: "ES6+ syntax, DOM manipulation, events and modern features.",
      descRu: "Синтаксис ES6+, работа с DOM, события и динамика.",
      levelUz: "Amaliyotda",
      levelEn: "Practicing",
      levelRu: "Практика",
      icon: "zap"
    },
    {
      name: "Python",
      category: "Backend / Asoslar",
      descUz: "Dasturlash mantiqi, ma'lumotlar turlari va algoritmlar asoslari.",
      descEn: "Programming logic, data structures and core algorithm concepts.",
      descRu: "Логика программирования, структуры данных и базовые алгоритмы.",
      levelUz: "O'rganilmoqda",
      levelEn: "Learning",
      levelRu: "Изучаю",
      icon: "terminal"
    }
  ],

  // Loyihalar ro'yxati
  projectsList: [
    {
      titleUz: "Shaxsiy Portfolio Veb-sayti",
      titleEn: "Personal Portfolio Website",
      titleRu: "Персональный сайт-портфолио",
      descUz: "Glassmorphism uslubidagi, qorong'u/yorug' rejimli, 3 tilli va moslashuvchan shaxsiy portfolio.",
      descEn: "Glassmorphic, responsive personal portfolio with dark/light themes and 3 language options.",
      descRu: "Адаптивное портфолио в стиле Glassmorphism с поддержкой 3 языков и темной/светлой темы.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/jaloliddin-roziqulov",
      badgeUz: "Joriy loyiha",
      badgeEn: "Current Project",
      badgeRu: "Текущий проект"
    },
    {
      titleUz: "Vazifalar Boshqaruvchisi (To-Do)",
      titleEn: "Task Manager (To-Do App)",
      titleRu: "Менеджер задач (To-Do App)",
      descUz: "Kundalik vazifalarni rejalashtirish, saqlash va belgilash uchun qulay veb-ilova.",
      descEn: "A minimalist productivity web app to plan, filter, and track daily tasks effectively.",
      descRu: "Веб-приложение для планирования и отслеживания ежедневных задач.",
      tags: ["JavaScript", "Local Storage", "CSS Grid"],
      demoUrl: "#",
      githubUrl: "https://github.com/jaloliddin-roziqulov",
      badgeUz: "O'quv loyihasi",
      badgeEn: "Study Project",
      badgeRu: "Учебный проект"
    },
    {
      titleUz: "Ob-havo Vidjeti (Weather App)",
      titleEn: "Weather Forecast Widget",
      titleRu: "Виджет погоды (Weather App)",
      descUz: "Shahar ob-havosini real vaqtda ko'rsatuvchi sodda va chiroyli interfeysli ilova.",
      descEn: "A clean interface displaying live weather conditions, temperature, and weekly forecast.",
      descRu: "Интерфейс для отображения актуального прогноза погоды и температуры в реальном времени.",
      tags: ["JavaScript", "Fetch API", "UI Design"],
      demoUrl: "#",
      githubUrl: "https://github.com/jaloliddin-roziqulov",
      badgeUz: "Rejadagi loyiha",
      badgeEn: "Upcoming Project",
      badgeRu: "В планах"
    }
  ]
};
