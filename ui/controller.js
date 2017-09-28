function gomb(){

    /*alert('42');
    document.getElementById("gomb").style.backgroundColor="red";
    var li = document.createElement("li");
    li.innerHTML = "szöveg";
    var ul = document.getElementById("lista");
    ul.appendChild(li);*/

    /*var matrix = [];
    console.log(matrix);
    for(var i=0;i<8;i++){
        matrix.push([]);
        console.log(i, matrix);

        for(var j=0;j<8;j++){
            matrix[i].push(i*10+j);
        }
    }
    console.log(matrix);*/
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
                    if(matrix[i2][j2].classList.contains("exploredCell")){
                        matrix[i2][j2].classList.remove("exploredCell");
                    } else{
                        matrix[i2][j2].classList.add("exploredCell");
                    }
                }

                td.ondblclick = function(){
                    console.log("Rákattintottál a ["+i2+":"+j2+"] mezőre.");
                    matrix[i2][j2].classList.add("highlight-double");
                }
            };

            fn(i, j);
        }
    }

    console.log(matrix);
    //matrix[4][3].classList.add("highlight");
    //.style.backgroundColor = "blue";highlight
    function button(){
        console.log("ALMA");
    }
}

