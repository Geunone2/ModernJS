const uri = 'http://example.com?name=박근원&job=programmer&developer';

const enc = encodeURI(uri);
console.log(enc);

const dec = decodeURI(enc);
console.log(dec);