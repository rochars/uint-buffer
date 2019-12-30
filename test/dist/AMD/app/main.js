define(function (require) {
    var UintBuffer = require('../../../../dist/uint-buffer.js').UintBuffer;
    console.log(UintBuffer);
    var tcb = new UintBuffer(1);
    var buffer = [0, 0];
    tcb.pack(buffer, 1, 1);
    document.write('OK');
});
