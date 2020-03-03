let navMenu = document.getElementById('navMenu')
if(!navMenu) {console.error('NavMenu not found!')} else {console.log('found navmenu')}

function toggleMenu(container) {
  container.classList.toggle('change')

  console.log(navMenu.style.display)

  if(navMenu.style.display === 'block') {
    navMenu.style.display = 'none'
  } else {
    navMenu.style.display = 'block'
  }
}
