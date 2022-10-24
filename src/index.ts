/**
 * This is the main code that runs
 * with two Classes.
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-17
 */

import Airplane from './Airplane'
import Jet from './Jet'

const biplane = new Airplane()
biplane.setSpeed(212)
console.log(biplane.getSpeed())
const boeing = new Jet()
boeing.setSpeed(422)
console.log(boeing.getSpeed())
let counter = 0
while (counter < 4) {
  boeing.accelerate()
  console.log(boeing.getSpeed())
  if (boeing.getSpeed() > 5000) {
    biplane.setSpeed(biplane.getSpeed() * 2)
  } else {
    boeing.accelerate()
  }
  counter++
}
console.log(biplane.getSpeed())
