# Reto de automatización QA – FrontEnd

Suite de pruebas E2E de [Sauce Demo](https://www.saucedemo.com/) mediante **Playwright + Cucumber + Gherkin + TypeScript**, organizada con **Page Object Model (POM)**.

## Requisitos

- Node.js compatible con las dependencias del proyecto (recomendado Node.js 22 LTS).
- npm.

## Instalación y ejecución

```bash
npm install
npx playwright install chromium
npm test
```

Comandos alternativos:

```bash
npm run test:login
npm run test:checkout
npm run test:smoke
```

## Escenarios

- Inicio correcto: `standard_user` / `secret_sauce`.
- Usuario bloqueado: `locked_out_user` / `secret_sauce`.
- Contraseña inválida.
- Agregar y verificar un producto en el carrito.
- Completar el formulario de compra y verificar la confirmación.

## Estructura

```text
src/
  fixtures/world.ts          # World compartido por escenario
  hooks/hooks.ts             # Lanzamiento y cierre de navegador; captura en fallos
  pages/                     # Page Object Model
  test/features/             # Escenarios Gherkin
  test/steps/                # Step definitions
cucumber.json                # Configuración del runner
```

Cada escenario utiliza su propio contexto del navegador, aislando sesión y carrito de los demás.

## Reporte

Después de correr las pruebas, abre `reports/cucumber-report.html`. Una captura de pantalla se adjunta a los escenarios fallidos.