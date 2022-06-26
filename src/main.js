let component = '';
let componentPath = () => {
  return import('./test/' + `${component}.vue`);

  // I've found that this also seems to be related to the .browserslistrc file,
  // I tried this and it worked:
  // return import('./test/' + component + '.vue');
};
