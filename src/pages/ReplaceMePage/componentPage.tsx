import "./replaceMe.css";

const ReplaceMePage = () => {
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
    //end of copy
  };
  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>My Webpage</title>
    </head>
    <body>
      <h1 id="test">Welcome to my webpage</h1>
      <div id="content">
        <p>Click the button below to generate a random number:</p>
        <p id="result"></p>
        <button id="generate-btn">Generate</button>
      </div>
    </body>
  </html>
  `;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default ReplaceMePage;
