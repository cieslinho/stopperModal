// buttons
const startBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const deleteBtn = document.querySelector('.delete')
const archiveBtn = document.querySelector('.archive')
const infoBtn = document.querySelector('.fa-question')
const paintBtn = document.querySelector('.fa-paintbrush')
const closeModalBtn = document.querySelector('.close')
// other elements
const stopwatch = document.querySelector('.stopwatch')
const lastTime = document.querySelector('.last-time')
const timeList = document.querySelector('.time-list')
const modalShadow = document.querySelector('.instruction-shadow')
let countTime
let minutes = 0
let seconds = 0
let timesArr = []
const colorPanel = document.querySelector('.colors')
const colorOne = document.querySelector('.one')
const colorTwo = document.querySelector('.two')
const colorThree = document.querySelector('.three')
let root = document.documentElement

const handleStart = () => {
	clearInterval(countTime)
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			stopwatch.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			stopwatch.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			stopwatch.textContent = `${minutes}:00`
		}
	}, 200)
}
const handlePause = () => {
	clearInterval(countTime)
}
const handleStop = () => {
	lastTime.innerHTML = `Ostatni czas: ${stopwatch.textContent}`
	if (stopwatch.textContent !== '0:00') {
		lastTime.style.visibility = 'visible'
		timesArr.push(stopwatch.textContent)
	}
	clearStuff()
}

const handleDelete = () => {
	lastTime.style.visibility = 'hidden'
	timesArr = []
	clearStuff()
}

const clearStuff = () => {
	clearInterval(countTime)
	stopwatch.textContent = '0:00'
	timeList.textContent = ''
	seconds = 0
	minutes = 0
}

const showArchive = () => {
	timeList.textContent = ''
	let num = 1
	timesArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`
		timeList.appendChild(newTime)
		num++
	})
}

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.toggle('instruction-animation')
}

const changeColor = () => {}

startBtn.addEventListener('click', handleStart)
pauseBtn.addEventListener('click', handlePause)
stopBtn.addEventListener('click', handleStop)
deleteBtn.addEventListener('click', handleDelete)
archiveBtn.addEventListener('click', showArchive)
infoBtn.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => (e.target === modalShadow ? showModal() : false))
paintBtn.addEventListener('click', () => {
	colorPanel.classList.toggle('active-colors')
})
colorOne.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(65, 105, 225)')
})
colorTwo.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(50, 205, 50)')
})
colorThree.addEventListener('click', () => {
	root.style.setProperty('--first-color', 'rgb(128, 0, 128)')
})
