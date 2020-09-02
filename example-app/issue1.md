The development server does live compilation and live reload of apps in development.

The development server needs to have the following features:
1.   It can be started (including the file watching) and stopped dynamically in the runtime.  We should be able to point the server to a given directory, start file watching/live compilation on that directory, and spin up the dev server on a given set of ports.  At a later time, the runtime should be able to stop the dev server (and it's file watching and everything else it was doing).

2. Looking at the `example_app` directory, there should be a separate server/port for each `html_X` folder.  One port for the html_public directory, one for the html_doc directory and one for the html_admin directory.  The compilation and other steps will largely look the same for these folders.  All typescript compilation should output a `.d.ts` file and a `.js` file with mappings.  Absolutely **zero** module bundeling or minification should be performed. 

3. Inside each `html_*` directory is a set of default subdirectories, they should be treated as follows:

## views
This contains all the react/vue/angular code for the app. The typescript files in this directory should be compiled into the `target/client` directory and the `target/server` directory.  For example, a `/html_public/index.tsx` should be compiled and placed in `/target/server/html_public/index.js` AND `/target/client/html_public/index.js`.

## views/services
This folder contains the services (controller in MVC) that anything in the views can call to perform actions on the server.  The server should expect a single file, `index.ts` in the root that has a format like this:

```ts
export default {
    service_name: async (args) => {

    },
    service_name_2: async (args) => {

    },
    user_services: {
        add_user: async (ags) => {

        }
    }
    ...
}
```

We should expect that different kinds of services will be split up into seperate files or subdirectories in this export, and it should be handled gracefully.  For example, a developer might do something like this:

```ts
import * as user_services from "./user";

export default {
    user_services: user_services
}
```

Services will have a unique compile process.  For every file in the services directory, there will be two seperate compilations, one for the client side and the other for the server side.  

**Client Side Compile**
For the client side compilation, the files should be loaded into Deno and mutated so that all of the functions are removed and replaced with a single async function (that will be created later, so just use a placeholder for now) and then copied into the target folder.  For example `/html_public/services/index.ts` should be compiled to `/target/client/html_public/services/index.js`.  Here's an example of the mutation:

Source file:
```ts
export default {
    service_name: async (args) => {
        /* ... real service code **/
    },
    user_services: {
        make_user: async (args) => {
            /* .. real service code **/
        }
    }
}
```

Target:
```ts
export default {
    service_name: call_server("service_name", 123),
    user_services: {
        make_user: call_server("user_services.make_user", 123)
    }
}
```

The `call_server` function will be implemented later on, it will be shaped like this:

```ts
const call_server = (service_name, app_id) => {
    return async (args) => {
        /* send message to server with websockets or POST */
    }
}

```

**Server Side Compile**
The server side compile should be a direct compilation of the files in the `/services` directory.  For example `/html_public/services/index.ts` will be compiled to `/target/server/html_public/services/index.js`.  Unlike the client side code, there should be no mutation.

## node_modules
Contains library dependencies of the views and services

## static
Static files for CSS and other styling like background images.

4. The files inside the `/bin` directory should be watched and compiled into `/target/bin`.  Like the other compilations, the file layout should be identical between the source and target.  For example `/bin/some_dir/index.ts` should compile to `/target/bin/some_dir/index.js` and `/target/bin/some_dir/index.d.ts`.

5. Each server should provide static file hosting for the following directories:
- `/target/client/html_X/*` should be mounted at the `/` url.
- `/html_X/static/*` should be mounted at the `/static` url.
- `/html_X/node_modules/*` should be mounted at the `/node_modules` url.
If no file is found in a GET request, the fallback is to render an HTML template generated on the server.  The HTML template should include a `script` tag for requirejs, Then a config object inside a `<script>` block for requireJS that loads the application from `html_X/views/index.js`.  The requireJS configuration should also include all js files from the `/target/client/html_X/**` so that the application can include it's own files succesfully.  Additionally, the `node_modules` directory should be scanned and include an entry in the requireJS config for each library so that libraries called by the application will work as expected on the client side.  For now, the application should be expected to just mount to the `<body>` tag or to create it's own element inside the body tag to mount to.