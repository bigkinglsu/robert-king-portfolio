# WebAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.5.

The visitor-facing application currently includes lazy-loaded Home and About experiences plus an
Experience page scaffold within a shared responsive header and footer shell.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

For a single non-watch run, use:

```bash
ng test --watch=false
```

### Snapshot testing

Focused snapshots cover the application shell and every current Angular component. They are stored
in `__snapshots__` directories next to their test files. Snapshots complement behavioral
assertions; they do not replace tests for links, accessibility, or interactions.

Normal test runs compare rendered output with committed snapshots. When an intentional component
change causes a mismatch:

1. Review the reported snapshot difference.
2. Run `ng test` in watch mode.
3. Press `u` to accept the intentional update.
4. Review the generated `.snap` diff before committing it.

Snapshot inputs should exclude framework-generated attributes and normalize dynamic values so
snapshots change only when meaningful component output changes. A global Vitest snapshot serializer
applies this normalization whenever a rendered HTML element is passed to `toMatchSnapshot()`.

The serializer is implemented in
`src/app/testing/angular-html-snapshot-serializer.ts` and registered for every test through
`src/app/testing/test-setup.ts`. Angular loads that setup file from the test target in
`angular.json`. It currently normalizes:

- Angular `_ngcontent-*` and `_nghost-*` attributes
- the Angular `ng-version` attribute
- generated test-host IDs such as `root2`
- the dynamic copyright year

Snapshot the smallest meaningful rendered element when possible:

```ts
const header = fixture.nativeElement.querySelector<HTMLElement>('.site-header');

expect(header).toBeTruthy();
expect(header).toMatchSnapshot();
```

Do not manually serialize `outerHTML` or repeat normalization inside component tests. When a new
dynamic value needs normalization, add the rule to the shared serializer and cover it through the
normal test suite.

## Continuous integration

The GitHub Actions CI workflow runs for pull requests targeting `main`, pushes to `main`, and
manual dispatches. It installs locked dependencies, type-checks the test project, runs the unit and
snapshot tests once, builds the production application, and uploads the build output as a
short-lived workflow artifact.

Run the same validation commands locally with:

```bash
npm ci
npm run typecheck:test
npm run test:ci
npm run build
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
