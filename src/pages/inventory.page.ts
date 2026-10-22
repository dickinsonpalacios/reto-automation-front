import { expect, Page } from '@playwright/test';

export class InventoryPage {
  constructor(private readonly page: Page) {}

  async agregarProducto(nombre: string) {
    const producto = this.page.getByTestId('inventory-item').filter({ hasText: nombre });
    await expect(producto).toHaveCount(1);
    await producto.getByRole('button', { name: 'Add to cart' }).click();
  }

  async verificarCantidadCarrito(cantidad: number) {
    await expect(this.page.getByTestId('shopping-cart-badge')).toHaveText(String(cantidad));
  }

  async abrirCarrito() {
    await this.page.getByTestId('shopping-cart-link').click();
    await expect(this.page).toHaveURL(/\/cart\.html$/);
  }
}