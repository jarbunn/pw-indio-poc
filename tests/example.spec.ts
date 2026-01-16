import { test, expect, firefox } from "@playwright/test";

test('test', async ({ request }) => {
  const response = await request.get('https://jacobtest-us.release.useindio.com/api/brokers/258708/submissions')
  const responseBody = await response.json()
  const responseStatus = await response.status()
  const responseStatus2 = await response.statusText()
  expect(responseStatus).toBe(200)
  expect(response).not.toBe("")
});

  // let browser = await firefox.launch();
  // let newpage = await (await browser.newContext()).newPage()
  // await (await newpage).goto("https://www.google.com")