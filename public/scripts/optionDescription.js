
const optionContainers = document.querySelectorAll('.option-container');

optionContainers.forEach(container => {
  container.addEventListener('mouseover', showDescription);
  container.addEventListener('click', showDescription);

  container.addEventListener('mouseleave', hideDescription);
  container.addEventListener('blur', hideDescription);
});

function showDescription() {
  const descriptionElement = this.querySelector('.option-description');
  descriptionElement.style.display = 'block';
}

function hideDescription() {
  const descriptionElement = this.querySelector('.option-description');
  descriptionElement.style.display = 'none';
}
