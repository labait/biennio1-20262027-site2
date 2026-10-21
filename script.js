const menuButton = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.dataset.open = 'false';
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Apri menu');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.dataset.open = String(!isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Apri menu' : 'Chiudi menu');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});

const privacyToggle = document.querySelector('[data-privacy-toggle]');
const privacyInfo = document.querySelector('#privacy-info');
privacyToggle.addEventListener('click', () => {
  const isExpanded = privacyToggle.getAttribute('aria-expanded') === 'true';
  privacyToggle.setAttribute('aria-expanded', String(!isExpanded));
  privacyInfo.hidden = isExpanded;
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formStatus = document.querySelector('#form-status');
  formStatus.textContent = 'Dimostrazione completata: i campi sono validi. Nessuna richiesta è stata inviata e nessun dato è stato salvato.';
  formStatus.hidden = false;
  formStatus.focus();
});

document.querySelector('#year').textContent = new Date().getFullYear();