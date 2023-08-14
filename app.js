const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const side = 100
const padding = 30
const offset = 80

ctx.fillStyle = "rgb(125, 140, 228)"
ctx.fillRect(padding, padding, side, side)

ctx.fillStyle = "rgb(204, 4, 17)"
ctx.fillRect(offset + padding, offset + padding, side, side)

ctx.fillStyle = "rgba(251, 150, 250, .8)"
ctx.fillRect(offset * 2 + padding, offset * 2 + padding, side, side)

ctx.fillStyle = "red"
ctx.fillRect(250, 30, 80, 80)

ctx.fillStyle = "blue"
ctx.fillRect(280, 60, 80, 80)

ctx.fillStyle = "orange"
ctx.beginPath()
ctx.moveTo(820, 40)
ctx.lineTo(845, 95)
ctx.lineTo(720, 95)
ctx.fill()

ctx.strokeStyle = "green"
ctx.beginPath()
ctx.moveTo(845, 95)
ctx.lineTo(875, 135)
ctx.stroke()

ctx.strokeStyle = "gray"
ctx.fillStyle = "brown"
ctx.beginPath()
ctx.arc(800, 175, 40, 0, 2 * Math.PI)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.arc(900, 175, 40, 0, 2 * Math.PI)
ctx.stroke()
const side = 100
const padding = 30
const offset = 80

ctx.fillStyle = "rgb(125, 140, 228)"
ctx.fillRect(padding, padding, side, side)

ctx.fillStyle = "rgb(204, 4, 17)"
ctx.fillRect(offset + padding, offset + padding, side, side)

ctx.fillStyle = "rgba(251, 150, 250, .8)"
ctx.fillRect(offset * 2 + padding, offset * 2 + padding, side, side)

ctx.fillStyle = "red"
ctx.fillRect(20, 20, 80, 80)

ctx.fillStyle = "blue"
ctx.fillRect(50, 50, 80, 80)

ctx.fillStyle = "orange"
ctx.beginPath()
ctx.moveTo(300, 40)
ctx.lineTo(325, 95)
ctx.lineTo(200, 95)
ctx.fill()

ctx.strokeStyle = "green"
ctx.beginPath()
ctx.moveTo(325, 95)
ctx.lineTo(340, 135)
ctx.stroke()

ctx.strokeStyle = "gray"
ctx.fillStyle = "brown"
ctx.beginPath()
ctx.arc(200, 155, 40, 0, 2 * Math.PI)
ctx.stroke()
ctx.fill()

ctx.beginPath()
ctx.arc(300, 155, 40, 0, 2 * Math.PI)
ctx.stroke()
