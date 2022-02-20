import { Gpio } from 'pigpio';
import { Logger } from '@bitblit/ratchet/dist/common/logger';
import { PromiseRatchet } from '@bitblit/ratchet/dist/common/promise-ratchet';

export class SoundSensor2 {
  private sensor: Gpio = new Gpio(17, {
    mode: Gpio.INPUT,
    // pullUpDown: Gpio.PUD_UP,
    // alert: true,
  });

  constructor() {
    /*
    this.trigger.digitalWrite(0); // Make sure trigger is low
    this.echo.on('alert', (level, tick) => {
      if (level == 1) {
        this.startTick = tick;
      } else {
        const endTick = tick;
        const diff = (endTick >> 0) - (this.startTick >> 0); // Unsigned 32 bit arithmetic
        Logger.info('%s', diff / 2 / SoundSensor.MICROSECDONDS_PER_CM);
      }
    });

     */
  }

  public async run(): Promise<void> {
    // Trigger a distance measurement once per second
    while (true) {
      const value: number = this.sensor.getPwmFrequency();
      Logger.info('Freq: %s', value);
      //this.sensor.
      await PromiseRatchet.wait(1000);
    }
  }
}
