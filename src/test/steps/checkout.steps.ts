import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../../fixtures/world';
import { LoginPage } from '../../pages/login.page';
import { InventoryPage } from '../../pages/inventory.page';
import { CartPage } from '../../pages/cart.page';
import { CheckoutPage } from '../../pages/checkout.page';

Given('el usuario estándar inició sesión en Sauce Demo', async function (this: CustomWorld) {
  const login = new LoginPage(this.page!);
  await login.goto();
  await login.iniciarSesion('standard_user', 'secret_sauce');
  await login.verificarLoginExitoso();
});

When('agrega el producto {string} al carrito', async function (this: CustomWorld, nombre: string) {
  await new InventoryPage(this.page!).agregarProducto(nombre);
});

Then('el carrito debe mostrar {int} producto', async function (this: CustomWorld, cantidad: number) {
  await new InventoryPage(this.page!).verificarCantidadCarrito(cantidad);
});

When('abre el carrito de compras', async function (this: CustomWorld) {
  await new InventoryPage(this.page!).abrirCarrito();
});

Then('debe ver el producto {string} en el carrito', async function (this: CustomWorld, nombre: string) {
  await new CartPage(this.page!).verificarProducto(nombre);
});

When('continúa al checkout', async function (this: CustomWorld) {
  await new CartPage(this.page!).continuarCheckout();
});

When('completa sus datos con nombre {string} apellido {string} y código postal {string}', async function (this: CustomWorld, nombre: string, apellido: string, postal: string) {
  await new CheckoutPage(this.page!).completarDatos(nombre, apellido, postal);
});

When('confirma la compra', async function (this: CustomWorld) {
  await new CheckoutPage(this.page!).confirmarCompra();
});

Then('debe aparecer la confirmación de compra exitosa', async function (this: CustomWorld) {
  await new CheckoutPage(this.page!).verificarConfirmacion();
});