let title = document.getElementById('title2')
console.log(title)
let img = document.getElementById('img2')
console.log(img)
let text = document.getElementById('text2')
console.log(text)

let title2 = document.getElementById('title')
let img2 = document.getElementById ('img')
let text2 = document.getElementById('text')

function ipt(event){
	event.preventDefault()
	title.innerHTML = title2.value
	text.innerHTML = text2.value
	img.setAttribute('src',img2.value)
}
