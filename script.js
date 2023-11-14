import { data } from './data.js'

const navBtn = document.querySelector('.nav__burger')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const creationBox = document.querySelector('.creations__box')

const toggleMenu = () => {
	nav.classList.toggle('active')
}

const createImages = () => {
	const renderImages = data
		.map(item => {
			const { title, url } = item

			return `<div class="creations__image-box">
			<div class="creations__shadow"></div>
            <img src="./images/mobile/${url}" alt="" class="creations__img creations__img-mobile">
			<img src="./images/desktop/${url}" alt="" class="creations__img creations__img-desktop">
            <h3 class="creations__title">${title}</h3>
          </div>`
		})
		.join('')

	creationBox.innerHTML = renderImages
}

const navShadowOnScroll = () => {
	const headerHeight = document.querySelector('.header').getBoundingClientRect().height
	const navHeight = nav.getBoundingClientRect().height

	if (window.scrollY > headerHeight - navHeight) {
		nav.classList.add('shadow')
	} else {
		nav.classList.remove('shadow')
	}
}

navBtn.addEventListener('click', toggleMenu)
navLinks.forEach(link => {
	link.addEventListener('click', toggleMenu)
})
window.addEventListener('scroll', navShadowOnScroll)
window.addEventListener('DOMContentLoaded', createImages)
