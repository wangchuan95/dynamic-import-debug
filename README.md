# vue-cli-dynamic-import-debug

## source code

src/main.js

```JavaScript
let component = '';
let componentPath = () => {
  return import('./test/' + `${component}.vue`);
};
```

src/test/invalid.vue

```HTML
this is a invalid vue file.
```

## Steps to reproduce

- yarn build:normal

  console output:

  ```bash
  warning  in ./src/test/invalid.vue

  Module parse failed: Unexpected token (1:5)
  You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  > this is a invalid vue file.
  |

  @ ./src/test lazy ^\.\/.*\.vue$ namespace object
  @ ./src/main.js
  @ multi ./src/main.js
  ```

- yarn build:error

  console output:

  ```bash
  warning  in ./src/test/invalid.vue

  Module parse failed: Unexpected token (1:5)
  You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  > this is a invalid vue file.
  |

  @ ./src/test lazy ^\.\/.*$ namespace object
  @ ./src/main.js
  @ multi ./src/main.js
  ```

## analysis

There are two different outputs here:

```bash
 @ ./src/test lazy ^\.\/.*\.vue$ namespace object
```

```bash
 @ ./src/test lazy ^\.\/.*$ namespace object
```

I probably know the reason is that some dependencies of @vue/cli-plugin-babel@4.5.17 have been updated, but I don't know which ones.

---

I've found that this also seems to be related to the .browserslistrc file, I tried this and it worked:

src/main.js

```JavaScript
let component = '';
let componentPath = () => {
  // return import('./test/' + `${component}.vue`);
  return import('./test/' + component + '.vue');
};
```

But I still don't know why.
