let component = '';
let componentPath = () => {
  return import('./test/' + `${component}.vue`);
};
