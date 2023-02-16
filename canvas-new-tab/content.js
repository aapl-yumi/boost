setInterval(() => {
  document.querySelectorAll("a").forEach((aElement) => {
    if (!aElement.href.match(/courses\/\d+/)) {
      return;
    }
    aElement.setAttribute("target", "_blank")
  });
}, 1000);
