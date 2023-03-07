import "./replaceMe.css";
import "./replaceMe.jsx";

const ReplaceMePage = () => {
  const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>My Webpage</title>
    </head>
    <body>
      <h1>Welcome to my webpage</h1>
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
