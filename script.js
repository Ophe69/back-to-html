const form = document.getElementById("contactForm")
const response = document.getElementById("formResponse")

form.addEventListener("submit", function (e) {
  e.preventDefault() // Empêche le rechargement de la page
  response.textContent =
    "Merci " +
    document.getElementById("name").value +
    " ! Votre message a bien été envoyé ✅"
  response.style.color = "green"
  form.reset()
})
