setInterval(() => {
  document.querySelectorAll("a").forEach((aElement) => {
    aElement.setAttribute("target", "_blank")
  });
}, 1000);
