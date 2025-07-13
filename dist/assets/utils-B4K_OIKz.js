function e(a) {
  return JSON.parse(localStorage.getItem(a));
}
function o(a, t) {
  localStorage.setItem(a, JSON.stringify(t));
}
function n(a) {
  const t = window.location.search;
  return new URLSearchParams(t).get(a);
}
export { n as a, e as g, o as s };
