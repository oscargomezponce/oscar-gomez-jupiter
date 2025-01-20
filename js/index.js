const footer = document.createElement('footer');
document.body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `&copy; Oscar Gomez ${thisYear}`;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "CSS", "GitHub", "VS Code", "Basic Python"];
const skillsSection = document.querySelector('#Skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach((skillText) => {
    const skill = document.createElement('li');
    skill.innerText = skillText;
    skillsList.appendChild(skill);
  });
