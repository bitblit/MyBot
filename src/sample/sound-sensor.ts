import { Gpio } from 'pigpio';
import { Logger } from '@bitblit/ratchet/dist/common/logger';
import { PromiseRatchet } from '@bitblit/ratchet/dist/common/promise-ratchet';

export class SoundSensor {
  // The number of microseconds it takes sound to travel 1cm at 20 degrees celcius
  public static readonly MICROSECONDS_PER_CM: number = 1e6 / 34321;

  private trigger = new Gpio(23, { mode: Gpio.OUTPUT });
  private echo = new Gpio(24, { mode: Gpio.INPUT, alert: true });

  private startTick: number = null;

  constructor() {
    this.trigger.digitalWrite(0); // Make sure trigger is low
    this.echo.on('alert', (level, tick) => {
      if (level == 1) {
        this.startTick = tick;
      } else {
        const endTick = tick;
        const diff = (endTick >> 0) - (this.startTick >> 0); // Unsigned 32 bit arithmetic
        Logger.info('%s', diff / 2 / SoundSensor.MICROSECONDS_PER_CM);
      }
    });
  }

  public async run(): Promise<void> {
    // Trigger a distance measurement once per second
    while (true) {
      this.trigger.trigger(10, 1); // Set trigger high for 10 microseconds
      await PromiseRatchet.wait(1000);
    }
  }
}
