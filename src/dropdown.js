const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = function toddleDropdownMenu() {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    toggleDropdown();
});

export default toggleDropdown;