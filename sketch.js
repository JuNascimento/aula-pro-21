const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var motor, mundo

function setup() {
  createCanvas(400, 400)

  motor = Engine.create()
  mundo = motor.world
}

function draw() {
  background('black')

  Engine.update(motor)
}
