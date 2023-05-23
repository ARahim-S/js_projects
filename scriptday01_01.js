//Flash Document Title

let documentTitle = document.title;
console.log(documentTitle);

const startChangeDocumentTitle = () => {
  setInterval(() => {
    document.title =
      document.title === documentTitle ? "Live Sale" : documentTitle;
  }, 1000);
};

window.addEventListener("load", startChangeDocumentTitle);
