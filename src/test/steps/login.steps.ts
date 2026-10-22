import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/login.page';
import { CustomWorld } from '../../fixtures/world';

Given('el usuario está situado en la página de acceso de Sauce Demo', async function (this: CustomWorld) {
  await new LoginPage(this.page!).goto();
});

When('ingresa el usuario {string} y la contraseña {string}', async function (this: CustomWorld, username: string, password: string) {
  await new LoginPage(this.page!).iniciarSesion(username, password);
});

Then('el sistema debe mostrar el comportamiento esperado para el acceso {string}', async function (this: CustomWorld, profile: string) {
  const login = new LoginPage(this.page!);
  switch (profile) {
    case 'exitoso': await login.verificarLoginExitoso(); break;
    case 'bloqueado': await login.verificarLoginBloqueado(); break;
    case 'invalido': await login.verificarLoginInvalido(); break;
    default: throw new Error(`Perfil no implementado: ${profile}`);
  }
});