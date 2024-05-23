const reveal = document.getElementById('revealBtn');
const senha = document.getElementById('password');


reveal.addEventListener('click', () => {
  senha.type === 'password'? senha.type = 'text' : senha.type = 'password';
});
