import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async verificarProducto(nombre: string) {
    await expect(this.page.getByTestId('inventory-item-name').filter({ hasText: nombre })).toBeVisible();
  }

  async continuarCheckout() {
    await this.page.getByTestId('checkout').click();
    await expect(this.page).toHaveURL(/\/checkout-step-one\.html$/);
  }
}