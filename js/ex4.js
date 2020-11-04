const forms = document.querySelector("form");
forms.addEventListener("submit", e => {
  e.preventDefault();
  const signup = forms.elements.login.value;
  fetch()
    .then(response => response.json())
    .then(user => {