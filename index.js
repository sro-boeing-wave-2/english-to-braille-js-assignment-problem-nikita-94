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
  const brStr = input.split('');
  const map1 = brStr.map(x => mapBraille.get(x)).join('');
  document.getElementById('targetLangText').innerHTML = map1;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', printText);
