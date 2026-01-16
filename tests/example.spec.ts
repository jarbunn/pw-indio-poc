import { test, expect, firefox } from "@playwright/test";

test('test', async ({ request }) => {
  const res = await request.get('https://jacobtest-us.release.useindio.com/api/brokers/258708/submissions')
  const responseBody = await res.json()
  const responseStatus = await res.status()
  const responseStatus2 = await res.statusText()
  expect(responseStatus).toBe(200)
  expect(res).not.toBe("")
});

  // let browser = await firefox.launch();
  // let newpage = await (await browser.newContext()).newPage()
  // await (await newpage).goto("https://www.google.com")