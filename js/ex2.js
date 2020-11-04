//const s

const forms = document.querySelector("form");
forms.addEventListener("submit", e => {
  e.preventDefault();
  const login = forms.elements.login.value;
  fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(user => {
      const pictureElement = document.createElement("img");
      pictureElement.src = user.avatar_url;
      pictureElement.style.height = "100px";
      pictureElement.style.width = "100px";
      const nameElement = document.createElement("div");
      nameElement.textContent = user.name;
      nameElement.style.fontSize = "15px";
      const websiteElement = document.createElement("a");
      websiteElement.href = user.blog;
      websiteElement.textContent = websiteElement.href;
      const infosElement = document.getElementById("infos");
      infosElement.innerHTML = ""; // Remove previous user info
      infosElement.appendChild(pictureElement);
      infosElement.appendChild(nameElement);
      infosElement.appendChild(websiteElement);
    })
    .catch(err => {
      console.error(err.message);
    });
});