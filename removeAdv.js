(function removeAdvertisement() {
  Array.from(document.getElementsByTagName("img")).forEach(function(e) {
    if (
      e.parentElement.href &&
      !e.parentElement.href.includes(window.location.host)
    ) {
      e.parentElement.parentElement.remove();
    }
  });
})();
