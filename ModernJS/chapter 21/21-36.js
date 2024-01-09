const uriComp = "name=박근원&job=programmer&developer";

let enc = encodeURIComponent(uriComp);
console.log(enc);

let dec = decodeURIComponent(enc);
console.log(dec);

enc = encodeURI(uriComp);
console.log(enc);

dec = decodeURI(uriComp);
console.log(dec);