# Seefood
This app uses AI to detect if there is a hotdog in an image or not.

## Getting started
1. Install nodejs: https://nodejs.org/
2. Install angular cli: `npm install -g @angular/cli`
3. Install nx: `npm install -g nx`
4. Install dependencies. Go to this workspace and run `npm install`
5. Run `nx serve api` and `nx serve hotdog`. The api will be available on http://localhost:8080/api and the frontend on http://localhost:4200/ \
(if you run into following issue: "Cannot find module 'ajv/dist/compile/codegen'", run the command `npm install --save-dev ajv@^7`)

## Issues to be solved
- [ ] upload button does not work
- [ ] upload button should use material design
- [ ] display the classification result in a nicer way
  - At the moment, the classification result is just stringified JSON that is displayed in an alert. Not very user friendly. Please improve it.
- [ ] preview the image before upload
  - After i select an image, i only see it's name. Instead I would like to see a preview of the image, before I click on upload.
- [ ] show loading indicator while the image is being classified
  - The backend might take some time to classify our image. During this time, I would like to see a loading indicator, so I don't feel lost as a user. (Since the backend right now is just a mock backend, it is really fast. For demo purposes, you can add an artificial delay).
- [ ] fix code style issues
  - There are several code style issues. Fix them.
- [ ] extract hotdog classification to own class in backend
  - At the moment, the AppService in the backend has a classify method that does the (mocked) classification. Extract this classification functionality to it's own class. (Separation of concerns - the appservice it self is not responsible for actually classifying a hotdog)
- [ ] add image size limit
  - Image classifiers usually require a certain image dimension (e.g. 256x256). If the image is bigger, it needs to be scaled down. This can be an expensive operation. Therefore, if the image size either greater than 1MB or the image has a dimension that is > 1024px, the api should not accept the image.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@assignment/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.
