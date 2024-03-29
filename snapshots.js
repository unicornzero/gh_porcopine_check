// const PercyScript = require('@percy/script');
// const httpServer = require('http-server');
//
// const PORT = process.env.PORT_NUMBER || 8000;
// const TEST_URL = `http://localhost:${PORT}`;
//
// // A script to navigate our app and take snapshots with Percy.
// PercyScript.run(async (page, percySnapshot) => {
//   let server = httpServer.createServer();
//   server.listen(PORT);
//
//   console.log(`Server started at ${TEST_URL}`);
//
//   await page.goto(TEST_URL);
//   await percySnapshot('TodoMVC home page');
//
//   // Enter a new to-do.
//   await page.type('.new-todo', 'A really important todo');
//   await page.keyboard.press('Enter');
//   await percySnapshot('TodoMVC with a new todo', { widths: [768, 992, 1200] });
//   server.close();
// });
//

const PercyScript = require("@percy/script");

PercyScript.run(async (page, percySnapshot) => {
  await page.goto("https://localhost:4200/");
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor(".hero-main-image");
  await percySnapshot("homepage");

  await page.goto("https://localhost:4200/login/");
  // ensure the page has loaded before capturing a snapshot
  await page.waitFor(".auth0-lock-social-buttons-container");
  await percySnapshot("login");
});
