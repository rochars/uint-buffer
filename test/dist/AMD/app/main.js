define(function (require) {
    var TwosComplementBuffer = require('../../../../uint-buffer.umd.js');
    
    var tcb = new UintBuffer(1);
    var buffer = [0, 0];
    tcb.pack(buffer, 1, 1);

    if (buffer[0] !== 0 ||
        buffer[1] !== 1) {
        throw new Error('Error in UMD, AMD not loading');
    } else {
    	console.log('OK');
    }
});
