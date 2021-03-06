console.clear();

const characterList = document.querySelectorAll('.character');

characterList.forEach(character => {
  character.addEventListener('click', () => {
    if (document.querySelector('.character.active')) {
      document.querySelector('.character.active').classList.remove('active');
    }
    character.classList.add('active');
  });
});