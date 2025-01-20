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

  const messageForm = document.querySelector("form[name='leave_message']");

  messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
  
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);
  
    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
  
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a>: 
      <span>${usersMessage}</span>
    `;
  
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
  
    removeButton.addEventListener("click", () => {
      messageList.removeChild(newMessage);
    });
  
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  
    messageForm.reset();
  });