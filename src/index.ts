/**
 * Just a util at this point
 *
 **/
import { Logger } from '@bitblit/ratchet/dist/common/logger';
import { LedButton } from './sample/led-button';
import { PromiseRatchet } from '@bitblit/ratchet/dist/common/promise-ratchet';
import { Servo1 } from './sample/servo1';
import { SoundSensor } from './sample/sound-sensor';
import { SoundSensor2 } from './sample/sound-sensor-2';
import { Blink } from './sample/blink';

async function tester(): Promise<void> {
  //const b: SoundSensor2 = new SoundSensor2();
  const b: Blink = new Blink();

  await b.run();
  /*
  while (true) {
    Logger.info('Wait');
    await PromiseRatchet.wait(5000);
  }
  
   */
}

tester()
  .then((res) => {
    Logger.info('Result was : %s', res);
    process.exit(0);
  })
  .catch((err) => {
    Logger.error('Error was : %s', err);
    process.exit(1);
  });
