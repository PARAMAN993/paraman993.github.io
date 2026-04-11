const commonPasswords = ["123456","password","123456789","qwerty","abc123","password123","admin","letmein","welcome","monkey","dragon","iloveyou","1234567","sunshine","princess"];

function checkPassword() {
  const pass = document.getElementById("password").value;
  const bar = document.getElementById("strength-bar");
  const text = document.getElementById("strength-text");

  let score = 0;
  if (pass.length >= 8) score++;
  if (pass.length >= 12) score++;
  if (/[A-Z]/.test(pass)) score++;
  if (/[0-9]/.test(pass)) score++;
  if (/[^A-Za-z0-9]/.test(pass)) score++;

  const colors = ["#ff3333", "#ffaa00", "#ffff33", "#33ff33", "#00ff88"];
  const labels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];

  bar.style.width = (score * 20) + "%";
  bar.style.backgroundColor = colors[score] || "#ff3333";
  text.textContent = labels[score] || "Too short";
  text.style.color = colors[score] || "#ff3333";
}

function checkCommonPassword() {
  const pass = document.getElementById("common-pass").value.toLowerCase().trim();
  const result = document.getElementById("common-result");

  if (pass === "") {
    result.textContent = "";
    return;
  }

  if (commonPasswords.includes(pass)) {
    result.innerHTML = "❌ This password is extremely common and dangerous!";
    result.style.color = "#ff4444";
  } else {
    result.innerHTML = "✅ Good! This password is not in the top common list.";
    result.style.color = "#00ff88";
  }
}