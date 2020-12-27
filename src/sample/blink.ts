// import * as pigpio from 'pigpio';
import { Gpio } from 'pigpio';
import { PromiseRatchet } from '@bitblit/ratchet/dist/common/promise-ratchet';

export class Blink {
  private led: Gpio = new Gpio(4, { mode: Gpio.OUTPUT });

  public async run(): Promise<void> {
    for (let i = 0; i < 20; i++) {
      for (let dutyCycle = 0; dutyCycle < 255; dutyCycle += 5) {
        this.led.pwmWrite(dutyCycle);
        await PromiseRatchet.wait(20);
      }
      await PromiseRatchet.wait(1500);
    }
  }
}
