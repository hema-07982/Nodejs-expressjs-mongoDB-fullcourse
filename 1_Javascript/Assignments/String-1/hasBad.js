function hasBad(str){
  if(str.substr(0,3)=="bad" || str.substr(1,3)=="bad"){
    return true;
  }
  return false;
}

/*String-1 -- hasBad
Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

Examples

hasBad('badxx') → true
hasBad('xbadxx') → true
hasBad('xxbadxx') → false*/

let answer=hasBad('xxbadxx');
console.log(answer);