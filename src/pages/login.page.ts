import { expect, Page } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto(process.env.WEBURL || 'https://www.saucedemo.com/');
  }

  async iniciarSesion(username: string, password: string) {
    await this.page.getByTestId('username').fill(username);
    await this.page.getByTestId('password').fill(password);
    await this.page.getByTestId('login-button').click();
  }

  async verificarLoginExitoso() {
    await expect(this.page).toHaveURL(/\/inventory\.html$/);
    await expect(this.page.getByTestId('inventory-container')).toBeVisible();
  }

  async verificarLoginBloqueado() {
    await expect(this.page).not.toHaveURL(/\/inventory\.html$/);
    await expect(this.page.getByTestId('error')).toContainText('locked out');
  }

  async verificarLoginInvalido() {
    await expect(this.page).not.toHaveURL(/\/inventory\.html$/);
    await expect(this.page.getByTestId('error')).toContainText('Username and password do not match');
  }
}
