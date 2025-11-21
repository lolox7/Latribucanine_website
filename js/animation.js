// animations.js
document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne toutes les sections
    const sections = document.querySelectorAll("section");

    // Crée un observateur pour détecter quand une section entre dans l'écran
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // ajoute la classe visible
            }
        });
    }, { threshold: 0.1 }); // 10% de la section visible pour déclencher

    // Observe chaque section
    sections.forEach(section => observer.observe(section));
});

// =======================
// 📌 ACCORDÉON FAQ
// =======================

// On récupère tous les boutons de questions
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    
    // Quand on clique sur une question
    question.addEventListener("click", () => {

        // On bascule la classe active (pour changer + → -)
        question.classList.toggle("active");

        // La div suivante est la réponse
        const answer = question.nextElementSibling;

        // Si déjà open : fermer
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } 
        // Sinon ouvrir (scrollHeight = hauteur réelle du contenu)
        else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
