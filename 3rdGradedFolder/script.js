function plotPoint() {
    // edit: variables must be grabbed from the input elements first
    var x0 = parseInt(document.getElementById('N').value);
    var y0 = parseInt(document.getElementById('M').value);
    var x = parseInt(document.getElementById('X').value);
    var y = parseInt(document.getElementById('Y').value);
    
    var in1 = document.getElementById('in1');
    var out1 = document.getElementById('out1');

    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y;

    var point = document.createElement('div');  
    point.className = 'point';

    /* edit: changed styleleft to style.left and stylebottom to style.bottom 
       (Coordinate + Offset to center - half of point width)
    */
    point.style.left = (x - x0 + 200 - 5) + 'px'; 
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; 
    
    document.getElementById('coordinatePlane').appendChild(point);

    if (x === x0 || y === y0) {
        out1.innerHTML = "divisa";
    } else if (x > x0 && y > y0) {
        out1.innerHTML = "NE";
    } else if (x < x0 && y < y0) {
        out1.innerHTML = "SO";
    } else if (x > x0 && y < y0) {
        out1.innerHTML = "SE";
    } else if (x < x0 && y > y0) {
        out1.innerHTML = "NO";
    }
}
