/**
 * This class creates an Airplane
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-10-3
 */

class Airplane {
  private speed: number = 0

  public setSpeed (speeds: number): void {
    this.speed = speeds
  }

  public getSpeed (): number {
    return this.speed
  }
}
export = Airplane
