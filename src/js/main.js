//навигационная панель
const navigation = document.querySelector('.navigation');
const navigationToggle = navigation.querySelector('.navigation__toggle');
const icon = navigationToggle.querySelector('svg');

navigation.classList.add('navigation--hidden');

navigationToggle.addEventListener('click', () => {
  if (navigation.classList.contains('navigation--hidden')) {
    icon.innerHTML = `
      <use xlink:href="img/sprite.svg#close"  />
    `;
  } else {
    icon.innerHTML = `
      <use xlink:href="img/sprite.svg#menu"/>
    `;
  }
  navigation.classList.toggle('navigation--hidden')
});

//модальные окна
const form = document.querySelector('form')
const submitButton = form.querySelector('button[type="submit"]');
const modalSuccess = document.querySelector('.modal--success');
const modalSuccessButton = modalSuccess.querySelector('button');
const modalFail = document.querySelector('.modal--failure');
const modalFailButton = modalFail.querySelector('button');

const showSuccessModal = () => {
  document.body.classList.add('page__body--modal');
  modalSuccess.classList.add('modal--shown');
};

const showFailModal = () => {
  document.body.classList.add('page__body--modal');
  modalFail.classList.add('modal--shown');
};

const closeModal = () => {
  document.body.classList.remove('page__body--modal');
  modalFail.classList.remove('modal--shown');
  modalSuccess.classList.remove('modal--shown');
  form.reset();
};

modalFailButton.addEventListener('click', closeModal);
modalSuccessButton.addEventListener('click', closeModal);
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeModal();
  }
});

const isFormValid = () => form.name.value && form.surname.value && form.phone.value && form.email.value;

submitButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  isFormValid() ? showSuccessModal() : showFailModal();
}); 





