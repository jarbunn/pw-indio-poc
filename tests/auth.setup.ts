import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ request }) => {
  // Send authentication request. Replace with your own.
  await request.post('', {
    form: {
      'email': '',
      'password': '',
      'brokerage': ''
    }
  });
  await request.storageState({ path: authFile });
});