# HCL-FRONTEND

## Development Setup

### Installation

To install, clone the repo and then install with [npm](https://www.npmjs.com/):

```
git clone https://github.com/HealthConnectLink/HCL-FRONTEND.git
cd HCL-FRONTEND
npm install
```

### Running the App

For development, run the following command:

```
npm start
```

This will start a development server on port 4200, so you can navigate to [localhost:4200/](http://localhost:4200/) to view the app. This development server will also watch for any code changes you make to the app and reload your browser for you when you save.

### Running Tests

[Jasmine](https://jasmine.github.io/) unit tests can be run with the command:

```
npm test
```

This will also watch for changes and re-run tests when you save files in the app. To run the tests only once, use `npm run test:once`.

### Adding New Components

This app was created with [angular-cli](https://github.com/angular/angular-cli) so you can use any of [these commands](https://github.com/angular/angular-cli#generating-components-directives-pipes-and-services) to create new pieces of the app.

### Building the App for Production

To create a production build, run this command:

```
npm run build
```

This will generate a `dist/` folder containing everything needed to run the app in production. To deploy the app, copy the `dist/` folder to the root of the web server.
