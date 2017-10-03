var flagFieldCount = require('../ui/flag').flagFieldCount;

function remaindMineCount(flagField,mineCount) {
    return mineCount -= flagFieldCount(flagField);
}
exports.remaindMineCount=remaindMineCount;
