






function whatIsGameState(mF, vF) {
    for (var i = 0; i < mF.length; i++) {
        for (var j = 0; j < mF[i].length; j++) {
            return mF[i][j] == -1 && vF[i][j] ? -1 : mF[i][j] != -1 && !vF[i][j] ? 0 : 1;
        }
    }
}
// ha van mine a filden ahol visible = true: -1
//ha nincs sima mező shol visible = false: 1
//egyébként: 0