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
  
    console.log(`New message from ${usersName} (${usersEmail}): ${usersMessage}`);
  
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
      newMessage.parentNode.removeChild(newMessage);
      if (messageList.children.length === 0) {
        messageSection.style.display = "none";
      }
    });
  
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  
    messageForm.reset();
  });

const GITHUB_USERNAME = "oscargomezponce";
const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");

    repositories.forEach(repo => {
      const project = document.createElement("li");
      project.innerText = repo.name;
      projectList.appendChild(project);
    });
  })

  .catch(error => {
    alert("Error fetching repositories");
    console.error("GitHub API Fetch Error:", error);
  });