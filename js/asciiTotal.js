function uniTotal (string) {
// total up dem unicodes!\
  return string.split('').reduce((cv, pv) => +cv + pv.charCodeAt(0),0);
}