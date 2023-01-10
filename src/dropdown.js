const dropdownBtn = document.getElementById('btn');
const dropdownMenu = document.getElementById('dropdown');
const toggleArrow = document.getElementById('arrow');

const toggleDropdown = function toddleDropdownMenu() {
  dropdownMenu.classList.toggle('show');
  toggleArrow.classList.toggle('arrow');
};

dropdownBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleDropdown();
});

// Close dropdown when a DOM element is clicked
document.documentElement.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('show')) {
    toggleDropdown();
  }
});

export default toggleDropdown;
