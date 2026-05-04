window.onload = function () {
  const fileList = document.getElementById("fileList");
  const codeArea = document.getElementById("codeArea");
  const fileName = document.getElementById("fileName");
  const search = document.getElementById("search");
  const lineNumbers = document.getElementById("lineNumbers");

  if (typeof codes === "undefined") {
    fileName.textContent = "Error: codes.js not loaded";
    return;
  }

  let currentCode = "";
  let activeItem = null;
  let filteredCodes = [...codes];

  function loadCode(index, element) {
    const c = filteredCodes[index];

    fileName.textContent = c.title;
    codeArea.textContent = c.code;
    currentCode = c.code;

    hljs.highlightElement(codeArea);

    // Line numbers
    const lines = c.code.split("\n").length;
    lineNumbers.innerHTML = "";
    for (let i = 1; i <= lines; i++) {
      lineNumbers.innerHTML += i + "<br>";
    }

    if (activeItem) activeItem.classList.remove("active");
    element.classList.add("active");
    activeItem = element;
  }

  function renderList(list) {
    fileList.innerHTML = "";

    list.forEach((c, index) => {
      const li = document.createElement("li");
      li.textContent = c.title;
      li.onclick = () => loadCode(index, li);
      fileList.appendChild(li);
    });

    if (list.length > 0) {
      loadCode(0, fileList.children[0]);
    }
  }

  renderList(filteredCodes);

  search.addEventListener("input", () => {
    const value = search.value.toLowerCase();
    filteredCodes = codes.filter(c =>
      c.title.toLowerCase().includes(value)
    );
    renderList(filteredCodes);
  });

  window.copyCode = function () {
    if (!currentCode) return;

    navigator.clipboard.writeText(currentCode);

    const btn = document.querySelector("button");
    btn.textContent = "Copied!";
    setTimeout(() => (btn.textContent = "Copy"), 1200);
  };
};
