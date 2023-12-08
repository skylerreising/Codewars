/*
Extract the domain name from a URL
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url){
  //split the dot out
  let comAtEnd = url.split(".");
  
  //return for http://
  if(comAtEnd[0].slice(0,7)==="http://"){
    //control for www
    if(comAtEnd[0].slice(7)==="www"){
      return comAtEnd[1]
    }
    return comAtEnd[0].slice(7);
  }
  
  //return for https://
  if(comAtEnd[0].slice(0,8)==="https://"){
    //control for www
    if(comAtEnd[0].slice(8)==="www"){
      return comAtEnd[1]
    }
    return comAtEnd[0].slice(8);
  }
  
  // return for www
  if(comAtEnd[0]==="www"){
    return comAtEnd[1];
  }
  return comAtEnd[0];
}
console.log(domainName("http://google.com"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("https://www.cnet.com" ))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))