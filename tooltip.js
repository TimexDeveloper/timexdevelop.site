//This piece of script from https://corru.works
document.body.insertAdjacentHTML('beforeend', '<div id="definition-box"></div>')
window.addEventListener("mousemove", (e) => {
cursor = { x: e.clientX, y: e.clientY }

try { 
	let hovering = document.elementFromPoint(cursor.x, cursor.y)
	const defbox = document.getElementById('definition-box')

	if(hovering.hasAttribute('definition')) {
		defbox.style.setProperty("--x", cursor.x)
		defbox.style.setProperty("--y", cursor.y)

		if(cursor.x < (window.innerWidth / 2)) defbox.style.setProperty("--xFlip", 0); else defbox.style.setProperty("--xFlip", -1)
		if(cursor.y < (window.innerHeight / 2)) defbox.style.setProperty("--yFlip", 0); else defbox.style.setProperty("--yFlip", -1)

		defbox.classList.add('active')

		defbox.innerText = hovering.getAttribute('definition')
	} else {
		defbox.classList.remove('active')
	}
} catch(e) {/* don't care */}
})