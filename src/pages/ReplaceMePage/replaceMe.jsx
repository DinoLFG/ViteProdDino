document.addEventListener("DOMContentLoaded", () => {
  window.onload = function () {
    //copy here your js
    const generateBtn = document.getElementById("generate-btn");
    const resultEl = document.getElementById("result");
    if (generateBtn && resultEl) {
      generateBtn.addEventListener("click", () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        resultEl.innerText = `Your random number is: ${randomNumber}`;
      });
    } else {
      console.log("One or both elements not found");
    }
  };
  //end of copy
});
