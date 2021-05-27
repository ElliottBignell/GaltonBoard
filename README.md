# GaltonBoard

Provisional result of technical challenge for ClanInfo.

# Notes for the assessor

## TODOs

The application is nowhere near as complete as I would like. Known deficiencies and planned enhancements are listed in the tickets.

## Structure

The page is structured as an Angular app with three components representing buckets, bars and bin. The content is rendered as vanilla HTML with CSS so as to degrade somewhat gracefully. A service has been created to run the loop representing the falling balls. The aim is to call the service and initiate the loop when a bucket is clicked. The loop then runs, representing a random left/right bounce at each bar. Once 10 bounces (number of rows of bars) is complete, the service would fire an event which can be intercepted by the bins. These would then write to the linear gradient filling the bin and so change the height of the solid bar. See tckets for detailed comments.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
