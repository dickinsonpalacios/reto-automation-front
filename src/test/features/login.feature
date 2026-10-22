@login
Feature: Login - Sauce Demo
  Como un cliente de Sauce Demo
  Quiero iniciar sesión con diferentes credenciales
  Para validar el acceso al sistema

  @smoke
  Scenario Outline: Validar el inicio de sesión con distintos modos de acceso
    Given el usuario está situado en la página de acceso de Sauce Demo
    When ingresa el usuario "<username>" y la contraseña "<password>"
    Then el sistema debe mostrar el comportamiento esperado para el acceso "<profile>"

    Examples:
      | username        | password     | profile   |
      | standard_user   | secret_sauce | exitoso   |
      | locked_out_user | secret_sauce | bloqueado |
      | standard_user   | incorrecta   | invalido  |
