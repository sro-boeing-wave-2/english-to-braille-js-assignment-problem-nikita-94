/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */
import englishToBrailleLiteralSet from './english-to-braille.js';

const mapBraille = new Map(englishToBrailleLiteralSet);

function printText() {
  const input = document.getElementById('sourceLangText').value;
  let brStr = '';
  for (let i = 0; i < input.length; i += 1) {
    brStr += mapBraille.get(input[i]);
  }
  document.getElementById('targetLangText').innerHTML = brStr;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', printText);
