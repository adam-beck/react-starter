### Getting Started

After pulling down the source code run `yarn install`. To start the application web server run `start:dev`. Then, navigate to `locahost:8080`.

### Package Scripts

* `start:dev` - starts webpack-dev-server which hosts the application at `0.0.0.0:8080`
* `build` - builds the production code including minifying and bundling
* `test` - runs the unit test suite with coverage
* `jest` - same as the `test` script
* `cypress:open` - opens the cypress test runner
* `cypress:run` - runs the cypress intergration tests
* `cypress:lint` - lints the cypress directory; this command also runs as a "pre-script" for `cypress:run`
