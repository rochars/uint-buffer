/**
 * @see https://github.com/rochars/uint-buffer.
 */
var exports=e||{};function e(a){this.bits=a;this.bytes=8>a?1:Math.ceil(a/8);this.b=Math.pow(2,a)-1;a=8-((a-1|7)+1-a);this.a=Math.pow(2,0<a?a:8)-1}e.prototype.pack=function(a,b,c){c=void 0===c?0:c;if(b!==b)throw Error("NaN");g(this,b);a[c]=(0>b?b+Math.pow(2,this.bits):b)&255;c++;for(var d=this.bytes,f=2;f<d;f++)a[c]=Math.floor(b/Math.pow(2,8*(f-1)))&255,c++;8<this.bits&&(a[c]=Math.floor(b/Math.pow(2,8*(this.bytes-1)))&this.a,c++);return c};
e.prototype.unpack=function(a,b){for(var c=0,d=0;d<this.bytes;d++)c+=a[(void 0===b?0:b)+d]*Math.pow(256,d);a=c;g(this,a);return a};function g(a,b){if(b>a.b||0>b)throw Error("Overflow");};var UintBuffer=exports;typeof module!=='undefined'?module.exports=exports :typeof define==='function'&&define.amd?define(['exports'],exports) :typeof global!=='undefined'?global.UintBuffer=exports:null;
