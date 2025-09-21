const nameText = "Hassan Abdelnby"; 
const role1 = "Front-End Developer Intern at Codveda Technologies 🚀";
const role2 = "This Portfolio is a demo to practice Bootstrap 💻";

const nameEl = document.getElementById("hero-name");
const textEl = document.getElementById("hero-text");

let nameIndex = 0;
let role1Index = 0;
let role2Index = 0;

function typeWriterName() {
  if (nameIndex < nameText.length) {
    nameEl.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeWriterName, 120);
  } else {
    setTimeout(typeWriterRole1, 600); 
        nameEl.style.borderRight = "none";
  }
}

function typeWriterRole1() {
  if (role1Index < role1.length) {
    textEl.textContent += role1.charAt(role1Index);
    role1Index++;
    setTimeout(typeWriterRole1, 50);
  } else {
    setTimeout(() => {
      textEl.textContent = ""; 
      typeWriterRole2();       
    }, 1500);
  }
}

function typeWriterRole2() {
  if (role2Index < role2.length) {
    textEl.textContent += role2.charAt(role2Index);
    role2Index++;
    setTimeout(typeWriterRole2, 50);
  }else{
        textEl.style.borderRight = "none";
  }
}

window.onload = typeWriterName;
