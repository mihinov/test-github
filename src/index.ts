import gsap from 'gsap';

const p = document.querySelector('.p');

gsap.from(p, {
	opacity: 0,
	y: '100%',
	duration: 1
});
