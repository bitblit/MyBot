/**
 * Just a util at this point
 *
 **/
import { Blink } from './blink/blink';
import { Logger } from '@bitblit/ratchet/dist/common/logger';

async function tester(): Promise<void> {
  const b: Blink = new Blink();
  await b.run();
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
