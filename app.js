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
