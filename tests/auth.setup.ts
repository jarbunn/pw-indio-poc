import { test as setup } from '@playwright/test';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ request }) => {
  // Send authentication request. Replace with your own.
  await request.post('https://jacobtest-us.release.useindio.com/api/token-auth/authenticated-user/password/', {
    form: {
      'email': 'jacob.bunn+admin@useindio.com',
      'password': 'Indio123',
      'brokerage': '2875'
    }
  });
  await request.storageState({ path: authFile });
});