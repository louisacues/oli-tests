# Cypress E2E Tests in PNPM Workspace

This project is configured as a PNPM workspace dedicated to running Cypress End-to-End (E2E) tests. It outlines the structure and commands necessary to set up and run your tests efficiently.

## Prerequisites

Before running the tests, make sure you have the following installed on your system:

- Node.js (Preferably the latest LTS version)
- PNPM (Version 6 or above)

You can install PNPM globally using NPM with the following command:

```bash
npm install -g pnpm
```

## Setup

To set up the workspace and install dependencies, follow these steps:

1. Clone the repository to your local machine (if applicable) or navigate to the root directory of your project.

2. Install the workspace dependencies by running:

```bash
pnpm install
```

This command installs all necessary dependencies defined in your `package.json` files across the workspace, including Cypress in the `packages/cypress-e2e` directory.

## Running Cypress Tests

To run your Cypress E2E tests, navigate to the `packages/cypress-e2e` directory:

```bash
cd packages/cypress-e2e
```

Then, you can execute the tests in one of two modes:

### Interactive Mode

To open the Cypress Test Runner for interactive test execution, use:

```bash
pnpm run cypress:open
```

This opens the Cypress GUI, allowing you to run your tests interactively.

### Headless Mode

To run your tests in headless mode (useful for CI/CD pipelines), execute:

```bash
pnpm run cypress:run
```

This will run all your tests without the Cypress GUI and output the results to your terminal.

## Additional Information

- You can customize your Cypress configuration by editing the `cypress.json` file located in the `packages/cypress-e2e` directory.
- For more detailed information on writing Cypress tests, refer to the [Cypress Documentation](https://docs.cypress.io).

## Support

For questions or issues regarding the test setup, please open an issue in the repository or consult the Cypress documentation for more detailed guidance on test creation and execution.