/**
 * Just a util at this point
 *
 **/
import { Logger } from '@bitblit/ratchet/dist/common/logger';
import { LedButton } from './sample/led-button';
import { PromiseRatchet } from '@bitblit/ratchet/dist/common/promise-ratchet';

async function tester(): Promise<void> {
  const b: LedButton = new LedButton();

  while (true) {
    Logger.info('Wait');
    await PromiseRatchet.wait(5000);
  }
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
