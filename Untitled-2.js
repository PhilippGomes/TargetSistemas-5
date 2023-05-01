let str = "exemplo"; // string a ser invertida
let invertedStr = "";

// percorre a string original de trás para frente
for(let i = str.length - 1; i >= 0; i--) {
  invertedStr += str[i]; // adiciona o caractere atual no início da string invertida
}

console.log(invertedStr); // imprime a string invertida
