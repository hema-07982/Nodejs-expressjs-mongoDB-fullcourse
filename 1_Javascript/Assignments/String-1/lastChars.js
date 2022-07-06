function lastChars(a, b){
  if(a==""){
    a ="@";
  }
  if(b==""){
    b ="@";
  }
  return a.substr(0,1) + b.substr(b.length-1);
}

/*String-1 -- lastChars
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

Examples

lastChars('last', 'chars') → ls
lastChars('yo', 'java') → ya
lastChars('hi', '') → h@*/

let answer=lastChars('last', 'chars');
console.log(answer);