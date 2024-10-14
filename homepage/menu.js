window.addEventListener("scroll", function() {
  let header = document.querySelector('#header');
  
  if (window.scrollY > 0) {
      header.classList.add('rolagem');
  } else {
      header.classList.remove('rolagem');
  }
});

const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll('.nav-list li a');

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
      nav.classList.remove('active');
  });
});

const MenuLinks = document.querySelectorAll('.nav a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop) {
  window.scroll({
      top: distanceFromTheTop,
      behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90; 
  smoothScrollTo(0, distanceFromTheTop);
}

MenuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 1600;

  const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
          return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
          clearInterval(timer);
      }
      window.scroll(newX, newY);
  }, 1000 / 60);
}

document.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("#produtos, #detalhes, #projeto, header, footer");
  const navLinks = document.querySelectorAll(".nav-list a");

  let currentSection = "";

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - window.innerHeight / 3 && window.scrollY < sectionTop + sectionHeight - window.innerHeight / 3) {
          currentSection = section.getAttribute("id");
      }
  });

  navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
      }
  });
});