/**
 * This class creates an Jet
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-3
 */

import Airplane from './Airplane'

class Jet extends Airplane {
  readonly Multiplier = 2

  public getSpeed (): number {
    return super.getSpeed()
  }

  public setSpeed (speed: number): void {
    super.setSpeed(speed * this.Multiplier)
  }

  public accelerate (): void {
    super.setSpeed(this.getSpeed() * 2)
  }
}
export = Jet
