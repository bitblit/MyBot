// import * as pigpio from 'pigpio';
import { Gpio } from 'pigpio';
import { Logger } from '@bitblit/ratchet/dist/common/logger';

export class LedButton {
  private led: Gpio = new Gpio(4, { mode: Gpio.OUTPUT });
  /*
  private button: Gpio = new Gpio(17, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE,
  });

   */
  private button: Gpio = new Gpio(17, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_UP,
    alert: true,
  });

  constructor() {
    this.button.on('alert', (level) => {
      Logger.info('%s Button %d', new Date(), level);
      this.led.digitalWrite(level);
    });
  }
}
