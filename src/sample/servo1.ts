import { Gpio } from 'pigpio';
import { Logger } from '@bitblit/ratchet/dist/common/logger';
import { PromiseRatchet } from '@bitblit/ratchet/dist/common/promise-ratchet';

export class Servo1 {
  private motor: Gpio = new Gpio(10, { mode: Gpio.OUTPUT });

  private pulseWidth = 1000;
  private increment = 100;

  public async run(): Promise<void> {
    while (true) {
      Logger.info('Writing %d', this.pulseWidth);
      this.motor.servoWrite(this.pulseWidth);

      this.pulseWidth += this.increment;

      if (this.pulseWidth >= 2000) {
        this.increment = -100;
      } else if (this.pulseWidth <= 1000) {
        this.increment = 100;
      }
      await PromiseRatchet.wait(1000);
    }
  }
}
