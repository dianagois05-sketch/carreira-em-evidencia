document.querySelectorAll('button').forEach((button) => {
  if (!button.closest('form')) {
    button.addEventListener('click', () => {
      document.querySelector('#inscricao')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

const form = document.querySelector('form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const message = [
    'Olá, equipe Corporate! Quero me inscrever no evento Carreira em Evidência — LinkedIn & Mentoria, dia 22/09 às 09h.',
    'Nome: ' + (data.get('nome') ?? ''),
    'E-mail: ' + (data.get('email') ?? ''),
    'Telefone: ' + (data.get('telefone') ?? ''),
    'Cargo: ' + (data.get('cargo') ?? ''),
  ].join('\n');
  window.open('https://wa.me/5516981612617?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
});
