/* ================================
   JAYDEBELLE WOO — PORTFOLIO
   ================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

:root {
    --blue-dark: #243b53;
    --blue: #6f9fc4;
    --blue-light: #dcecf7;
    --blue-pale: #f4f9fc;

    --pink: #e8cbd5;
    --purple: #cfc9e8;

    --text: #263746;
    --text-light: #657789;
    --white: #ffffff;

    --border: #dce6ed;

    --max-width: 1150px;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: var(--text);
    background: var(--white);
    line-height: 1.7;
}

a {
    text-decoration: none;
    color: inherit;
}

section {
    scroll-margin-top: 80px;
}


/* ================================
   NAVIGATION
   ================================ */

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;

    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(12px);

    border-bottom: 1px solid rgba(220, 230, 237, 0.8);
}

.nav-container {
    max-width: var(--max-width);
    margin: auto;

    height: 75px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 30px;
}

.logo {
    font-size: 25px;
    font-weight: 700;
    color: var(--blue-dark);
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    font-size: 13px;
    color: var(--text-light);

    transition: 0.25s ease;
}

nav a:hover {
    color: var(--blue);
}


/* ================================
   GENERAL
   ================================ */

.section {
    max-width: var(--max-width);
    margin: auto;
    padding: 120px 30px;
}

.light-section {
    max-width: none;
    background: var(--blue-pale);
}

.light-section > * {
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
}

.section-heading {
    margin-bottom: 65px;
}

.eyebrow {
    color: var(--blue);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 18px;
}

h1,
h2,
h3 {
    line-height: 1.15;
}

h2 {
    font-size: clamp(38px, 6vw, 65px);
    font-weight: 600;
    color: var(--blue-dark);
}

h2 span {
    color: var(--blue);
}

.large-text {
    font-size: 25px;
    color: var(--blue-dark);
    margin-bottom: 25px;
}


/* ================================
   HERO
   ================================ */

.hero {
    min-height: 100vh;

    display: flex;
    align-items: center;

    max-width: var(--max-width);
    margin: auto;

    padding: 130px 30px 80px;

    position: relative;
    overflow: hidden;
}

.hero-content {
    width: 60%;
    position: relative;
    z-index: 2;
}

.hero h1 {
    font-size: clamp(65px, 10vw, 115px);
    font-weight: 600;
    color: var(--blue-dark);
    letter-spacing: -4px;
}

.hero h1 span {
    color: var(--blue);
}

.tagline {
    font-size: 22px;
    color: var(--blue-dark);
    margin-top: 25px;
}

.hero-text {
    max-width: 620px;
    margin-top: 20px;
    color: var(--text-light);
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 35px;
    flex-wrap: wrap;
}

.button {
    display: inline-block;

    padding: 13px 24px;

    border-radius: 30px;

    font-size: 13px;
    font-weight: 600;

    transition: 0.25s ease;
}

.primary {
    background: var(--blue);
    color: white;
}

.primary:hover {
    transform: translateY(-3px);
}

.secondary {
    border: 1px solid var(--border);
    color: var(--blue-dark);
    background: white;
}

.secondary:hover {
    background: var(--blue-light);
}


/* ================================
   HERO DECORATION
   ================================ */

.hero-decoration {
    position: absolute;
    right: 0;
    top: 0;

    width: 45%;
    height: 100%;
}

.circle {
    position: absolute;
    border-radius: 50%;
}

.circle-one {
    width: 400px;
    height: 400px;

    background: var(--blue-light);

    right: -80px;
    top: 20%;
}

.circle-two {
    width: 190px;
    height: 190px;

    background: var(--pink);

    right: 230px;
    top: 55%;
}

.floating-card {
    position: absolute;

    right: 110px;
    top: 35%;

    padding: 25px;

    width: 145px;

    background: rgba(255, 255, 255, 0.9);

    border: 1px solid var(--border);

    border-radius: 18px;

    box-shadow: 0 15px 40px rgba(60, 90, 110, 0.12);
}

.floating-card span {
    font-size: 11px;
    color: var(--blue);
}

.floating-card p {
    margin-top: 10px;
    font-weight: 600;
}

.card-two {
    right: 300px;
    top: 65%;
}


/* ================================
   ABOUT
   ================================ */

.about-grid {
    display: grid;
    grid-template-columns: 1.5fr 0.8fr;
    gap: 80px;
    align-items: start;
}

.about-text p {
    margin-bottom: 20px;
    color: var(--text-light);
}

.about-card {
    padding: 40px;

    background: var(--blue-pale);

    border: 1px solid var(--border);
    border-radius: 25px;
}

.card-symbol {
    font-size: 35px;
    color: var(--blue);
    margin-bottom: 20px;
}

.about-card h3 {
    font-size: 25px;
    margin-bottom: 12px;
}

.about-card p {
    color: var(--text-light);
}


/* ================================
   TIMELINE
   ================================ */

.timeline {
    max-width: 850px;
}

.timeline-item {
    position: relative;

    padding-left: 45px;
    padding-bottom: 60px;

    border-left: 1px solid var(--border);
}

.timeline-item:last-child {
    border-left: none;
}

.timeline-dot {
    position: absolute;

    width: 13px;
    height: 13px;

    background: var(--blue);

    border-radius: 50%;

    left: -7px;
    top: 5px;
}

.timeline-year {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    color: var(--blue);
}

.timeline-content h3 {
    font-size: 28px;
    color: var(--blue-dark);
    margin: 10px 0 15px;
}

.timeline-content p {
    color: var(--text-light);
}


/* ================================
   PSYCHOLOGY
   ================================ */

.psychology-intro {
    max-width: 850px;
}

.psychology-intro p {
    color: var(--text-light);
    margin-bottom: 20px;
}

blockquote {
    border-left: 4px solid var(--blue);
    padding: 20px 30px;

    margin: 30px 0;

    font-size: 28px;
    font-style: italic;

    color: var(--blue-dark);
    background: var(--blue-pale);
}

.interest-grid {
    margin-top: 70px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.interest-card {
    padding: 35px;

    border: 1px solid var(--border);
    border-radius: 20px;

    background: white;

    transition: 0.25s ease;
}

.interest-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(60, 90, 110, 0.08);
}

.interest-card span {
    color: var(--blue);
    font-size: 12px;
}

.interest-card h3 {
    font-size: 24px;
    margin: 20px 0 12px;
}

.interest-card p {
    color: var(--text-light);
}


/* ================================
   EXPERIENCE
   ================================ */

.experience-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.experience-card {
    padding: 35px;

    background: white;

    border: 1px solid var(--border);
    border-radius: 20px;
}

.experience-number {
    color: var(--blue);
    font-weight: 700;
    font-size: 13px;
}

.experience-card h3 {
    font-size: 28px;
    margin-top: 15px;
}

.experience-role {
    color: var(--blue);
    font-size: 13px;
    margin: 5px 0 20px;
}

.experience-card p:last-child {
    color: var(--text-light);
}


/* ================================
   PROJECTS
   ================================ */

.project-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.project-card {
    padding: 35px;

    border: 1px solid var(--border);
    border-radius: 20px;

    background: white;
}

.featured-project {
    grid-row: span 2;
}

.project-top {
    display: flex;
    justify-content: space-between;

    color: var(--blue);

    font-size: 12px;
}

.project-tag {
    letter-spacing: 1.5px;
    font-weight: 700;
}

.project-card h3 {
    font-size: 30px;
    margin: 35px 0 15px;
    color: var(--blue-dark);
}

.project-card p {
    color: var(--text-light);
}

.project-detail {
    margin-top: 20px;
}


/* ================================
   SKILLS
   ================================ */

.skills-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
}

.skill-category h3 {
    color: var(--blue-dark);
    font-size: 22px;
    margin-bottom: 20px;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-list span {
    padding: 9px 15px;

    border-radius: 20px;

    background: white;
    border: 1px solid var(--border);

    color: var(--text-light);

    font-size: 13px;
}


/* ================================
   FUTURE
   ================================ */

.future-section {
    max-width: none;

    background:
        linear-gradient(
            135deg,
            var(--blue-pale),
            #ffffff,
            #f8f3f8
        );
}

.future-content {
    max-width: var(--max-width);
    margin: auto;
    padding: 0 30px;
}

.future-content p:not(.eyebrow) {
    max-width: 700px;
    color: var(--text-light);
    margin-top: 25px;
}


/* ================================
   CONTACT
   ================================ */

.contact-section {
    text-align: center;
}

.contact-content {
    max-width: 650px;
    margin: auto;
}

.contact-content p:not(.eyebrow) {
    color: var(--text-light);
    margin: 20px 0 30px;
}


/* ================================
   FOOTER
   ================================ */

footer {
    background: var(--blue-dark);
    color: white;

    padding: 45px 30px;
}

.footer-inner {
    max-width: var(--max-width);
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 30px;
}

.footer-inner h3 {
    font-size: 20px;
}

.footer-inner p {
    color: #cbd8e2;
    font-size: 13px;
}

.copyright {
    text-align: right;
}


/* ================================
   MOBILE
   ================================ */

@media (max-width: 850px) {

    nav {
        display: none;
    }

    .hero {
        min-height: auto;
        padding-top: 150px;
        padding-bottom: 100px;
    }

    .hero-content {
        width: 100%;
    }

    .hero-decoration {
        opacity: 0.35;
        width: 100%;
    }

    .about-grid,
    .interest-grid,
    .experience-grid,
    .skills-wrapper,
    .project-grid {
        grid-template-columns: 1fr;
    }

    .featured-project {
        grid-row: auto;
    }

    .section {
        padding: 90px 25px;
    }

    .hero {
        padding-left: 25px;
        padding-right: 25px;
    }

    .hero h1 {
        font-size: 65px;
    }

    .footer-inner {
        flex-direction: column;
        align-items: flex-start;
    }

    .copyright {
        text-align: left;
    }
}
