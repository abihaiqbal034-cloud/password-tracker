document.addEventListener("DOMContentLoaded", () => {

const input = document.getElementById("password");
const strength = document.querySelector(".strength");
const message = document.getElementById("message");

input.addEventListener("input", function() {
    const password = this.value;
    let score = 0;

if(password.length >= 8) score++;
if(/[A-Z]/.test(password)) score++;
if(/[a-z]/.test(password)) score++;
if(/[0-9]/.test(password)) score++;
if(/[£$%^&*@~]/.test(password)) score++;
if(/[^A-Za-z0-9]/.test(password)) score++;

const maxScore = 5;

if(score <= 1) {
    strength.style.width = (score / maxScore * 100) + '%';
    strength.style.height = '45%';
    strength.style.margin = '4%';
    strength.style.backgroundColor = 'red';
    message.textContent = '❌Weak';
} else if(score <= 3) {
    strength.style.width = (score / maxScore * 100) + '%';
    strength.style.height = '45%';
    strength.style.margin = '4%';
    strength.style.backgroundColor = 'orange';
    message.textContent = '⚠️Medium';
} else {
    strength.style.width = (score / maxScore * 100) + '%';
    strength.style.height = '45%';
    strength.style.margin = '4%';
    strength.style.backgroundColor = 'green';
    message.textContent = '✅Strong';
}
}); 
});