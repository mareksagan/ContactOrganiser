# ContactsOrganiser

Contact management SPA (Angular 9, NodeJS, ExpressJS, MongoDB)

## Description
It implements a form, which allows you to save and validate the records (only validated and non-redundant records should be saved). It's possible to find a contact with the name (search field). The result has to be shown under the search field. After the contact is selected, the whole record will be shown (update/deletion possible).

## Requirements

* REST API which provides CRUD operations and a search API
* All records should be persistent on server-side (MongoDB database)
* Material Design

## Installation

* Set up [NodeJS](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center/community) on your machine (consider using a [Docker container](https://hub.docker.com/_/mongo))
* Create a MongoDB collection under `local/contacts`
* Navigate to the project directory and execute `npm install`
* Run `npm server` and `npm start` for a dev server
* Navigate to [localhost:4200](http://localhost:4200/)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
