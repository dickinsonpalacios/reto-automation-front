@checkout @smoke
Feature: Compra de productos - Sauce Demo
  Como un cliente de Sauce Demo
  Quiero agregar productos al carrito y completar mi compra
  Para adquirir los productos que necesito

  Scenario: Comprar un producto correctamente
    Given el usuario estándar inició sesión en Sauce Demo
    When agrega el producto "Sauce Labs Backpack" al carrito
    Then el carrito debe mostrar 1 producto
    When abre el carrito de compras
    Then debe ver el producto "Sauce Labs Backpack" en el carrito
    When continúa al checkout
    And completa sus datos con nombre "Dickinson" apellido "Palacios" y código postal "08592"
    And confirma la compra
    Then debe aparecer la confirmación de compra exitosa
