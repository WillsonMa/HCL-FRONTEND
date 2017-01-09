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

For development, all you need to do is run an HTTP server and navigate to the development.html page.

If you don't have an http server installed, you can install and run a simple server with NPM.

```
npm install --global http-server
http-server
```

This will start a server on port 8080, so you can navigate to [localhost:8080/development.html](http://localhost:8080/development.html) to view the app.

### Running Tests

[Jasmine](https://jasmine.github.io/) unit tests can be run with the command:

```
npm test
```

or by navigating to [localhost:8080/test/test.html](http://localhost:8080/test/test.html).