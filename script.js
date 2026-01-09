alert("script.js está funcionando");

// Esperar a que cargue el HTML
document.addEventListener("DOMContentLoaded", () => {

  // =====================
  // LOGIN
  // =====================
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const error = document.getElementById("loginError");

      if (email === "" || password === "") {
        error.textContent = "⚠️ El correo y la contraseña son obligatorios.";
        return;
      }

      localStorage.setItem("usuarioEmail", email);
      window.location.href = "dashboard.html";
    });
  }

  // =====================
  // DASHBOARD
  // =====================
  const mensajeSesion = document.getElementById("mensajeSesion");

  if (mensajeSesion) {
    const emailGuardado = localStorage.getItem("usuarioEmail");

    if (emailGuardado) {
      mensajeSesion.textContent = `👋 Bienvenido/a, ${emailGuardado}`;
    } else {
      window.location.href = "login.html";
    }
  }
  if (!email.includes("@")) {
  error.textContent = "Ingresa un correo electrónico válido";
  return;
}

});

// =====================
// CERRAR SESIÓN
// =====================
function cerrarSesion() {
  localStorage.removeItem("usuarioEmail");
  window.location.href = "login.html";
}

// =====================
// MODO OSCURO
// =====================
function cambiarModo() {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
}