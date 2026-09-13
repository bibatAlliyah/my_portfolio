//mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

//prevents bots scrapers from reading my info directly
const emailParts = ["mykabibat", "@", "gmail", ".", "com"];
const emailAddress = emailParts.join("");

const emailCard = document.getElementById("emailCard");
const emailValue = document.getElementById("emailValue");
emailCard.href = "mailto:" + emailAddress;
emailValue.textContent = emailAddress;

const phoneParts = ["+699", "555", "280914"];
const phoneDigitsOnly = phoneParts.join("");
const phoneDisplay = phoneParts.join(" ");

const phoneCard = document.getElementById("phoneCard");
const phoneValue = document.getElementById("phoneValue");
phoneCard.href = "tel:" + phoneDigitsOnly;
phoneValue.textContent = phoneDisplay;

//close mobile menu
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

//highlight
const sections = document.querySelectorAll(".section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === "#" + current) {
      item.classList.add("active");
    }
  });
});

//typing animation
const roles = ["CS Student", "Cybersecurity Enthusiast", "CTF Competitor"];
const typedEl = document.getElementById("typedRole");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typedEl.textContent = currentRole.substring(0, charIndex);

  let speed = isDeleting ? 40 : 90;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1400; //pause
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();

//timeline dots
const timelineDots = document.querySelectorAll(".timeline-dot");

const dotObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("lit");
      }
    });
  },
  { threshold: 0.6 }
);

timelineDots.forEach((dot) => dotObserver.observe(dot));

//achievement counter
const statNumbers = document.querySelectorAll(".stat-num");
let countersStarted = false;

function animateCounters() {
  statNumbers.forEach((el) => {
    const target = parseInt(el.getAttribute("data-target"), 10);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 40);
  });
}

const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        animateCounters();
      }
    });
  },
  { threshold: 0.5 }
);

const statsStrip = document.querySelector(".stats-strip");
if (statsStrip) statsObserver.observe(statsStrip);
