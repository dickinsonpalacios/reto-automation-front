import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async completarDatos(nombre: string, apellido: string, codigoPostal: string) {
    await this.page.getByTestId('firstName').fill(nombre);
    await this.page.getByTestId('lastName').fill(apellido);
    await this.page.getByTestId('postalCode').fill(codigoPostal);
    await this.page.getByTestId('continue').click();
    await expect(this.page).toHaveURL(/\/checkout-step-two\.html$/);
  }

  async confirmarCompra() {
    await this.page.getByTestId('finish').click();
  }

  async verificarConfirmacion() {
    await expect(this.page).toHaveURL(/\/checkout-complete\.html$/);
    await expect(this.page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
  }
}