document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "linear-gradient(135deg, #89f7fe, #66a6ff)";
document.body.style.color = "#333";
document.body.style.overflowX = "hidden";

// ===== HEADER =====
const header = document.createElement("header");
header.style.textAlign = "center";
header.style.padding = "2rem";
header.style.background = "rgba(255,255,255,0.2)";
header.style.backdropFilter = "blur(8px)";
document.body.appendChild(header);

// Jeevitha.R title - rainbow + flying effect
const h1 = document.createElement("h1");
h1.textContent = "Jeevitha.R";
h1.style.fontFamily = "Courier New, monospace"; // substitute TopSecret
h1.style.fontSize = "3rem";
h1.style.fontWeight = "bold";
h1.style.display = "inline-block";
header.appendChild(h1);

// Subtitle - Computer Science Student running rainbow
const p = document.createElement("p");
p.textContent = "Computer Science Student";
p.style.fontFamily = "Lucida Handwriting, cursive"; // substitute FormalScript
p.style.fontSize = "1.5rem";
p.style.fontWeight = "bold";
p.style.whiteSpace = "nowrap";
p.style.display = "inline-block";
header.appendChild(p);

// ===== NAVIGATION =====
const nav = document.createElement("nav");
nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.gap = "1.5rem";
nav.style.background = "#444";
nav.style.padding = "1rem";
document.body.appendChild(nav);

["About", "Projects", "Contact"].forEach(text => {
  const a = document.createElement("a");
  a.href = "#" + text.toLowerCase();
  a.textContent = text;
  a.style.color = "white";
  a.style.textDecoration = "none";
  a.style.fontWeight = "bold";
  a.onmouseover = () => a.style.color = "#ffd700";
  a.onmouseout = () => a.style.color = "white";
  nav.appendChild(a);
});

// ===== SECTIONS =====
function createSection(id, title, content) {
  const section = document.createElement("section");
  section.id = id;
  section.style.padding = "3rem 1rem";
  section.style.textAlign = "center";

  const h2 = document.createElement("h2");
  h2.textContent = title;
  h2.style.fontSize = "2.5rem";
  h2.style.marginBottom = "1rem";
  h2.style.color = "#222";

  if (id === "projects") {
    h2.style.fontFamily = "Comic Sans MS, cursive"; // substitute SecretRecipe
    h2.style.background = "linear-gradient(90deg, red, orange, yellow, green, cyan, blue, violet)";
    h2.style.backgroundClip = "text";
    h2.style.webkitBackgroundClip = "text";
    h2.style.color = "transparent";
  }

  if (id === "contact") {
    h2.style.fontFamily = "Comic Sans MS, cursive"; // substitute JesterReg
    h2.style.background = "linear-gradient(90deg, orange, purple, cyan)";
    h2.style.backgroundClip = "text";
    h2.style.webkitBackgroundClip = "text";
    h2.style.color = "transparent";
  }

  section.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = content;
  section.appendChild(p);

  document.body.appendChild(section);
}

createSection("about", "About Me", "I am a passionate Computer Science student interested in web development, machine learning, and open-source projects.");
createSection("projects", "Projects", "");
createSection("contact", "Contact Me", "");

// ===== PROJECT CARDS =====
const projectsSection = document.getElementById("projects");

function createProject(title, description, font, colors) {
  const div = document.createElement("div");
  div.style.background = "rgba(255,255,255,0.8)";
  div.style.margin = "1rem auto";
  div.style.padding = "1.5rem";
  div.style.borderRadius = "10px";
  div.style.maxWidth = "500px";
  div.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

  const h3 = document.createElement("h3");
  h3.textContent = title;
  h3.style.fontFamily = font;
  h3.style.fontSize = "1.8rem";
  h3.style.background = colors;
  h3.style.webkitBackgroundClip = "text";
  h3.style.color = "transparent";

  const p = document.createElement("p");
  p.textContent = description;

  div.appendChild(h3);
  div.appendChild(p);
  projectsSection.appendChild(div);
}

createProject("Weather App", "A simple weather application using OpenWeatherMap API.", "Courier New, monospace", "linear-gradient(90deg, pink, blue)");
createProject("Portfolio Website", "This portfolio is a showcase of my work and skills using HTML, CSS, and JavaScript.", "Lucida Console, monospace", "linear-gradient(90deg, green, pink)");

// ===== CONTACT FORM =====
const contactSection = document.getElementById("contact");

const form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.maxWidth = "400px";
form.style.margin = "auto";
form.style.gap = "1rem";

const inputName = document.createElement("input");
inputName.type = "text";
inputName.placeholder = "Jeevitha.R";
inputName.required = true;

const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "venudon663@gmail.com";
inputEmail.required = true;

const textarea = document.createElement("textarea");
textarea.placeholder = "Your Message";
textarea.required = true;

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Send";
button.style.padding = "0.8rem";
button.style.border = "none";
button.style.borderRadius = "6px";
button.style.background = "#444";
button.style.color = "white";
button.style.fontSize = "1rem";
button.style.cursor = "pointer";

const status = document.createElement("p");

button.onclick = function(e) {
  e.preventDefault();
  status.textContent = "✅ Message sent successfully!";
}

form.appendChild(inputName);
form.appendChild(inputEmail);
form.appendChild(textarea);
form.appendChild(button);
form.appendChild(status);

contactSection.appendChild(form);

// ===== FOOTER =====
const footer = document.createElement("footer");
footer.textContent = "© 2025 Jeevitha.R. All rights reserved.";
footer.style.textAlign = "center";
footer.style.padding = "1rem";
footer.style.background = "#222";
footer.style.color = "white";
footer.style.marginTop = "2rem";

document.body.appendChild(footer);

// ===== ANIMATIONS =====

// Rainbow flying header animation
let hue = 0;
let yOffset = 0;
let direction = 1;

function animateHeader() {
  hue = (hue + 2) % 360;
  yOffset += direction;
  if (yOffset > 20 || yOffset < -20) direction *= -1;

  h1.style.background = `linear-gradient(90deg, hsl(${hue},100%,50%), hsl(${(hue+60)%360},100%,50%), hsl(${(hue+120)%360},100%,50%))`;
  h1.style.backgroundClip = "text";
  h1.style.webkitBackgroundClip = "text";
  h1.style.color = "transparent";
  h1.style.transform = `translateY(${yOffset}px) rotate(${yOffset/2}deg)`;

  // Subtitle rainbow running
  p.style.background = `linear-gradient(90deg, hsl(${hue},100%,50%), hsl(${(hue+60)%360},100%,50%), hsl(${(hue+120)%360},100%,50%))`;
  p.style.backgroundClip = "text";
  p.style.webkitBackgroundClip = "text";
  p.style.color = "transparent";

  requestAnimationFrame(animateHeader);
}

animateHeader();
