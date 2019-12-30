(function(e,d){"object"===typeof exports&&"undefined"!==typeof module?d(exports):"function"===typeof define&&define.amd?define(["exports"],d):(e=e||self,d(e.UintBuffer={}))})(this,function(e){var d=function(a){this.bits=a;this.bytes=8>a?1:Math.ceil(a/8);this.max=Math.pow(2,a)-1;this.min=0;a=8-((a-1|7)+1-a);this.lastByteMask_=Math.pow(2,0<a?a:8)-1};d.prototype.pack=function(a,c,b){b=void 0===b?0:b;if(c!==c||"number"!=typeof c)throw new TypeError;this.overflow(c);return this.pack_(a,c,b)};d.prototype.packUnsafe=
function(a,c,b){return this.pack_(a,c,void 0===b?0:b)};d.prototype.unpack=function(a,c){var b=this.unpackUnsafe(a,void 0===c?0:c);this.overflow(b);return b};d.prototype.unpackUnsafe=function(a,c){c=void 0===c?0:c;for(var b=0,d=0;d<this.bytes;d++)b+=a[c+d]*Math.pow(256,d);return b};d.prototype.overflow=function(a){if(a>this.max||a<this.min)throw new RangeError;};d.prototype.pack_=function(a,c,b){b=void 0===b?0:b;a[b]=(0>c?c+Math.pow(2,this.bits):c)&255;b++;for(var d=this.bytes,e=2;e<d;e++)a[b]=Math.floor(c/
Math.pow(2,8*(e-1)))&255,b++;8<this.bits&&(a[b]=Math.floor(c/Math.pow(2,8*(this.bytes-1)))&this.lastByteMask_,b++);return b};e.UintBuffer=d;Object.defineProperty(e,"__esModule",{value:!0})});
