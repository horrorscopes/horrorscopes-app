# Horrorscope

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Mobile Build requirements

- Java JDK 15
- Gradle-7.3.3 in the Users/User/AppData/Local/Android/SDK folder
- Android Studio installed
- Add JAVA_HOME to environment variables pointing to jdk-15.0.2
- Add jdk-15.0.2\bin directory to PATH environment variable

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

### Mobile Build

Reference steps: https://medium.com/@christof.thalmann/convert-angular-project-to-android-apk-in-10-steps-c49e2fddd29

## Build

Run `ng build --prod --aot` to build the project. Then run `cordova build android` to create the apk file.

## Release Build

Run `cordova build --release android` this will create an unsigned .aab file of the apk.

## Self Sign APK

Run `keytool -genkey -v -keystore horrorscope.keystore -alias horroscope -keyalg RSA -keysize 2048 -validity 10000` to self sign the apk file.

## Sign Java Archive Package

Run `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore horrorscope.keystore pathToAPKFile/app-release.aab horroscope` to sign the Java Archive Package.
