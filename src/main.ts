import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 1920,
  height: 1080,
  backgroundColor: 0x000000,
})

document.body.appendChild(app.view as HTMLCanvasElement)
