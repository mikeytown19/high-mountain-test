
function openNav() {
  document.querySelector('.sidenav').style.width = '250px';
// document.getElementById("sidenav").style.height = "";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector('.sidenav').style.width = '0';
}

const openNavv = document.querySelector('.open-nav');
const closeNavv = document.querySelector('.close-nav');

openNavv.addEventListener('click', () => {
  openNav();
});

closeNavv.addEventListener('click', () => {
  closeNav();
});
