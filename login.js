function quickLogin(name) {
  document.getElementById("emailInput").value = name;
  document.getElementById("passwordInput").focus();
}

function handleLogin() {
  const email = document.getElementById("emailInput").value.trim();
  const password = document.getElementById("passwordInput").value.trim();
  const errorMsg = document.getElementById("errorMsg");

  if (!email || !password) {
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userName", email);
  window.location.href = "index.html";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") handleLogin();
});
