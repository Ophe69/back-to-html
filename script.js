// ===== Date du jour =====
const dateArea = document.getElementById("dateArea")
const today = new Date()
dateArea.textContent = today.toLocaleDateString("fr-FR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})

// ===== Formulaire =====
const form = document.getElementById("contactForm")
const response = document.getElementById("formResponse")

form.addEventListener("submit", function (e) {
  e.preventDefault()
  response.textContent =
    "Merci " +
    document.getElementById("name").value +
    " ! Votre message a été envoyé ✅"
  response.style.color = "green"
  form.reset()
})

// ===== Bouton Hero =====
const ctaButton = document.getElementById("ctaButton")
ctaButton.addEventListener("click", () => {
  alert("Merci d'avoir cliqué 🎉")
})

// ===== Footer année dynamique =====
document.getElementById("year").textContent = new Date().getFullYear()
