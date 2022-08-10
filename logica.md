**Javascript**

let inputWord = document.getElementById("decoder-data");
let resultsData = document.getElementById("results-data");

const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const clearDecoderDataBtn = document.getElementById("clearDecoderDataBtn");
const clearResultsBtn = document.getElementById("clearResultsBtn");
const copyTextBtn = document.getElementById("copyTextBtn");

function encryptWord() {
  let encryptedWord = inputWord.value;
  encryptedWord = encryptedWord.replaceAll("e", "enter")
  .replaceAll("i", "imes")
  .replaceAll("a", "ai")
  .replaceAll("o", "ober")
  .replaceAll("u", "ufat");
  resultsData.value = encryptedWord;
}

function decryptWord() {
  let decryptedWord = inputWord.value;
  decryptedWord = decryptedWord.replaceAll("enter", "e")
  .replaceAll("imes", "i")
  .replaceAll("ai", "a")
  .replaceAll("ober", "o")
  .replaceAll("ufat", "u");
  resultsData.value = decryptedWord;
}

function clearTextArea() {
  inputWord.value = "";
  inputWord.focus();
}

function clearResults() {
  resultsData.value = "";
}

function copyTextToClipboard() {
  navigator.clipboard.writeText(resultsData.value);
  console.log(`Copied the text ${resultsData.value} to the clipboard.`);
}

encryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  encryptWord();
});

decryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  decryptWord();
});

clearDecoderDataBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearTextArea();
});

clearResultsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearResults();
});

copyTextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  copyTextToClipboard();
});

/*
`A letra "e" é convertida para "enter"`
`A letra "i" é convertida para "imes"`
`A letra "a" é convertida para "ai"`
`A letra "o" é convertida para "ober"`
`A letra "u" é convertida para "ufat"`
*/


**html**





<!-- <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Text Decoder</title>
    <link rel="shortcut icon" href="assets/icons/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="assets/css/styles.css" />
    <script src="assets/js/scripts.js" defer></script>
  </head>
  <body>
    <header id="header">
      <h1 id="title">Encrypt and Decrypt Your Text</h1>
    </header> -->

    <main id="main">
      <div class="decoder">
        <form id="form">
          <div class="input-container">
            <textarea
              id="decoder-data"
              spellcheck="false"
              rows="4"
              placeholder="Insert a text to encrypt/decrypt"
            ></textarea>
          </div>

          <div class="warning-container">
            <label for="warning" id="warning"
              >Lowercase letters only and no accents!</label
            >
          </div>

          <div class="decoder-buttons">
            <button type="submit" class="decoder-button" id="encryptBtn">
              Encrypt
            </button>

            <button type="submit" class="decoder-button" id="decryptBtn">
              Decrypt
            </button>

            <button
              type="submit"
              id="clearDecoderDataBtn"
              class="decoder-button"
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div class="results-container">
        <form id="results">
          <textarea
            id="results-data"
            cols="10"
            rows="3"
            placeholder="Nothing so far..."
            readonly
          ></textarea>

          <div class="results-buttons">
            <button type="submit" class="decoder-button" id="copyTextBtn">
              Copy
            </button>

            <button type="submit" id="clearResultsBtn" class="decoder-button">
              Clear
            </button>
          </div>
        </form>
      </div>
    </main>

    <footer id="footer">
      <p>Made with ❤ by Guilherme Rocha - Oracle Next Education 2022</p>
    </footer>
  </body>
</html>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
