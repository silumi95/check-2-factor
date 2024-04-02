import { $ } from "@wdio/globals";
import Page from "./page.js";

class LoginPage extends Page {
  public get signInBtn() {
    return $('//*[@id="feature-oc387eee"]/div/div/div[1]/div/div[3]/div[1]/a');
  }
  public get outlookEmail() {
    return $(
      "/html/body/div[1]/div/div[2]/div[1]/div/div/div/div[1]/div[2]/div/div/div/form/div[2]/div/div/input"
    );
  }
  public get outlookNextBtn() {
    return $(
      "/html/body/div[1]/div/div[2]/div[1]/div/div/div/div[1]/div[2]/div/div/div/form/div[4]/div/div/div/div/button"
    );
  }
  public get outlookPassword() {
    return $(
      "/html/body/div[1]/div/div[2]/div[1]/div/div/div/div/div[2]/div[2]/div/form/div[3]/div/div/input"
    );
  }
  public get outlookSubmit() {
    return $(
      "/html/body/div[1]/div/div[2]/div[1]/div/div/div/div/div[2]/div[2]/div/form/div[5]/div/div/div/div/button"
    );
  }
  public get outlookAcceptBtn() {
    return $("#acceptButton");
  }
  public get outlookMail() {
    return $('//*[@id="MailList"]/div/div/div[1]/div/div/div/div/div[2]');
  }
  public get btnSubmit() {
    return $('button[type="submit"]');
  }
  public get wordpressBtn() {
    return $("=Log in to WordPress.com");
  }
  public get wordpressEmailInput() {
    return $("#usernameOrEmail");
  }
  public get wordpressContinueBtn() {
    return $(
      "/html/body/div[1]/div/div[2]/div[1]/div/main/div[2]/div/form/div[1]/div[2]/button"
    );
  }

  public async outlookLogin(email: string, password: string) {
    await browser.newWindow("https://outlook.live.com/");
    (await this.signInBtn).click();
    await browser.pause(5000);
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[2]);
    await this.outlookEmail.setValue(email);
    (await this.outlookNextBtn).click();
    await this.outlookPassword.setValue(password);
    await this.outlookSubmit.click();
    (await this.outlookAcceptBtn).click();
    await browser.pause(5000);
  }
  public async clickLinkFromEmail() {
    (await this.outlookMail).click();
    await browser.pause(3000);
    await (await this.wordpressBtn).click();
    await browser.pause(8000);
  }
  public async wordpressLogin(email: string) {
    await browser.url("https://wordpress.com/log-in");
    (await this.wordpressEmailInput).setValue(email);
    await browser.pause(3000);
    (await this.wordpressContinueBtn).click();
    await browser.pause(3000);
  }
}

export default new LoginPage();
