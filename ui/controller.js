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
function selected(a) {
    if(a==-1){
        document.getElementById("custom").style.display = "block";
    }else{
        document.getElementById("custom").style.display = "none";
    }
    console.log('select', a);
}
function startGame(){
    if(document.getElementById("easy").checked){
        createTable(9,9,10);

    }
    else if(document.getElementById("medium").checked){
        createTable(16,16,40);
    }
    else if(document.getElementById("hard").checked){
        createTable(16,30,99);
    }
    else{
        var width=document.getElementById("width").value;
        var height=document.getElementById("height").value;
        var mines=document.getElementById("mines").value;
        if(!isNaN(width) && !isNaN(height) && mines<width*height){
            createTable(width,height,mines);
        }
    }
    document.getElementById("startButton").style.display="none";
}

var matrix = [];
var ingame=false;
function createTable(x,y,mines){

    var table = document.getElementById("tablazat");
    //console.log(table);

    for(var i=0;i<x;i++)
    {
        var tr = document.createElement("tr");
        table.appendChild(tr);

        matrix.push([]);

        for(var j=0;j<y;j++)
        {
            var td = document.createElement("td");
            tr.appendChild(td);
            //td.innerHTML = i+":"+j;

            matrix[i].push(td);

            var fn = function (i2, j2) {

                switch (event.button)
                {
                    case 0:
                        if(!flagField[i2[j2]])
                        {
                            td.onclick = function() {

                    if(!ingame){initialize(i2,j2,x,y,mines);}
                    console.log("Rákattintottál a ["+i2+":"+j2+"] mezőre.");

                    exploreCell(mineField, visibleField, i2, j2);
                    var state = whatIsGameState(mineField, visibleField);
                    if(state === -1){
                        explosion(x, y);
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
                        }
                        break;
                    case 2:
                        putFlag(i2,j2);
                        matrix[i2][j2].classList.add("flaged");
                        break;


                }

            };

            fn(i, j);
        }
    }
}

