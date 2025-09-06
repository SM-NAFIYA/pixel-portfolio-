// Scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact actions
function contactEmail() {
  alert("📧 Email: nafiyasm80@gmail.com (replace with your real one)");
}
function contactWhatsApp() {
  alert("💬 WhatsApp: +91-1234567890 (replace with your number)");
}
function contactCall() {
  alert("📞 Call: +91-1234567890 (replace with your number)");
}

// Modal functions
function openModal(title, body) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerText = body;
  document.getElementById("modalBackdrop").style.display = "flex";
}

function closeModal() {
  document.getElementById("modalBackdrop").style.display = "none";
}

// Auto year
document.getElementById("year").innerText = new Date().getFullYear();