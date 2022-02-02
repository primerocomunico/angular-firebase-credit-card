# Angular & Firebase [backend, DDBB, hosting]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0. and [Google Firebase](https://firebase.google.com/) version 9.4.0.

## Online testing 👁️‍🗨️
You can try it and have fun! 
[https://angular-firebase-c10be.web.app/](https://angular-firebase-c10be.web.app/)

## Development server 👩‍💻

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build 💻🎉

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Annotations 📝

### Using Firebase - Doesn't compile with latest Angular 13.1 and Typescript 4.5

In the `tsconfig.json` file, you need to add in `"compilerOptions"` the line `"skipLibCheck": true`. [Here the explanation](https://stackoverflow.com/questions/52311779/usage-of-the-typescript-compiler-argument-skiplibcheck). 

Also when you use the firebase methods you need to add in the route `compat`. See examples:
`import { AngularFireModule } from '@angular/fire/compat';`

`import { AngularFirestoreModule } from '@angular/fire/compat/firestore';`

[Here the explanation.](https://stackoverflow.com/questions/68946446/how-do-i-fix-a-firebase-9-0-import-error-attempted-import-error-firebase-app)

[AngularFire Quickstart.](https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md) ✔️

### Conflicts with ng build (invalid version 15.2-15.3)

Add in the `.browserslistrc` the next browers versions:

`not ios_saf 15.2-15.3`

`not safari 15.2-15.3`

[Here the explanation.](https://github.com/nrwl/nx/issues/8768)

## Tutorials 👩‍🏫

* [Complete app construction](https://www.youtube.com/watch?v=46oqfkXrL80)
* [Deploy Angular app into Firebase hosting](https://www.youtube.com/watch?v=mH8K-4YX34U)

## Technologies 🤓
1. Angular version 13.2.0.
2. Google Firebase version 9.4.0.
3. Bootstrap version 5.1.3.
4. Toastr version 14.2.1.
5. Font awesome version 5.15.