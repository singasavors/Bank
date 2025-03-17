document.addEventListener("DOMContentLoaded", () => {
    gsap.from(".glowing-text", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".feature-card", { opacity: 0, y: 50, duration: 1, stagger: 0.2 });
    gsap.from(".review", { opacity: 0, scale: 0.5, duration: 1, stagger: 0.2 });

    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", () => {
            let answer = button.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});