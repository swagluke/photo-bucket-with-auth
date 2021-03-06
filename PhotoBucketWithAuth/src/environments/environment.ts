// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAj3hzO_EgrjVU0tQz8GnilC-l7KAFXfvw",
    authDomain: "photo-bucket-with-auth.firebaseapp.com",
    databaseURL: "https://photo-bucket-with-auth.firebaseio.com",
    projectId: "photo-bucket-with-auth",
    storageBucket: "photo-bucket-with-auth.appspot.com",
    messagingSenderId: "587136566875"
  },
  rosefireRegistryToken: "fbbe4f1d-7eba-4249-b67a-1401d5b6f053"
};
