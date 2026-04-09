// animação simples
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
});

setTimeout(() => {
  cards.forEach(card => {
    card.style.transition = "0.5s";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });
}, 300);
