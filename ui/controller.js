function showCell(x, y) {
    if(mineField[x][y] === 0) {
        matrix[x][y].innerHTML = "";
    } else if (mineField[x][y] === -1) {
        matrix[x][y].innerHTML = "💣";
    } else {
        matrix[x][y].innerHTML = mineField[x][y];
    }
    matrix[x][y].classList.add("exploredCell"+mineField[x][y]);
    matrix[x][y].classList.add("exploredCell");
}

function explosion(x, y) {
    for (var i = 0; i < x; i++)
    {
        for (var j = 0; j < y; j++)
        {
            if (mineField[i][j] === -1)
            {
                matrix[i][j].innerHTML = "💣";
                matrix[i][j].classList.add('exploredCell3');
                exploreCell(mineField, visibleField, i, j);
            }
        }
    }
}

function stopTheClock(){
    clearInterval(intervalId);
}

var matrix = [];

function createTable(){

    var table = document.getElementById("tablazat");
    //console.log(table);

    for(var i=0;i<8;i++)
    {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        matrix.push([]);

        for(var j=0;j<8;j++)
        {
            var td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = i+":"+j;

            matrix[i].push(td);

            var fn = function (i2, j2) {
                td.onclick = function() {
                    console.log("Rákattintottál a ["+i2+":"+j2+"] mezőre.");

                    exploreCell(mineField, visibleField, i2, j2);
                    var state = whatIsGameState(mineField, visibleField);
                    if(state === -1){
                        explosion(8, 8);
                        alert('Vesztettél!');
                        stopTheClock();
                    } else if(state === 1) {
                        alert('Nyertél!');
                        stopTheClock();
                    }

                    console.log('visible', visibleField);
                };

                td.ondblclick = function(){
                    console.log("Rákattintottál a ["+i2+":"+j2+"] mezőre.");
                    matrix[i2][j2].classList.add("highlight-double");
                };
            };

            fn(i, j);
        }
    }
}

