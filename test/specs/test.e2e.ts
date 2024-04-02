import LoginPage from "../pageobjects/login.page.js";

describe("Login to wordpress application", () => {
  it("should login with 2 factor authentication", async () => {
    await browser.maximizeWindow();
    await LoginPage.wordpressLogin("testqaauto1234@hotmail.com");
    await LoginPage.outlookLogin("testqaauto1234@hotmail.com", "eyepax@123");
    await LoginPage.clickLinkFromEmail();
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[3]);
    await browser.pause(5000);
    await expect(browser).toHaveUrl(
      "https://wordpress.com/home/testqaauto.wordpress.com"
    );
  });
});
