export default () => {
  if (
    typeof navigator !== 'undefined' &&
    navigator.userAgent.match(/Windows/i)
  ) {
    document.getElementsByTagName('html')[0].classList.add('webkit-scrollbar');
  }
};
