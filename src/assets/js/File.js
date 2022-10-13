const file = document.querySelectorAll(".js-file");

console.log(file);
file.forEach((elem) => {
  elem.addEventListener("change", (e) => {
    const fileOutput = e.target.closest(".form").querySelector(".js-file-output");
    console.log(fileOutput);
    const fileList = [];
    for (let fileName of elem.files) {
      fileList.push(fileName.name);
      console.log(fileList);
    }
    fileOutput.innerHTML = `Прикрепленные файлы: ${fileList.join(", ")}`;
    fileOutput.classList.add('attached')
  });
});
