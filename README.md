# vue-cli-dynamic-import-debug

## Steps to reproduce

### correct

```bash
yarn build
```

console output:

```bash
 warning  in ./src/test/error.vue

Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> this is a invalid vue file.
|

 @ ./src/test lazy ^\.\/.*\.vue$ namespace object
 @ ./src/main.js
 @ multi ./src/main.js
```

### incorrect

```bash
yarn build:error
```

console output:

```bash
 warning  in ./src/test/error.vue

Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> this is a invalid vue file.
|

 @ ./src/test lazy ^\.\/.*$ namespace object
 @ ./src/main.js
 @ multi ./src/main.js
```

## result

There are two different outputs here:

```bash
 @ ./src/test lazy ^\.\/.*\.vue$ namespace object
```

```bash
 @ ./src/test lazy ^\.\/.*$ namespace object
```

I probably know the reason is that some dependencies of @vue/cli-plugin-babel@4.5.17 have been updated, but I don't know which ones.
