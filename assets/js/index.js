var pointsMain = [];
var pointsRand = [];
function clip (subjectPolygon, clipPolygon) {

            var cp1, cp2, s, e;
            var inside = function (p) {
                return (cp2[0]-cp1[0])*(p[1]-cp1[1]) > (cp2[1]-cp1[1])*(p[0]-cp1[0]);
            };
            var intersection = function () {
                var dc = [ cp1[0] - cp2[0], cp1[1] - cp2[1] ],
                    dp = [ s[0] - e[0], s[1] - e[1] ],
                    n1 = cp1[0] * cp2[1] - cp1[1] * cp2[0],
                    n2 = s[0] * e[1] - s[1] * e[0], 
                    n3 = 1.0 / (dc[0] * dp[1] - dc[1] * dp[0]);
                return [(n1*dp[0] - n2*dc[0]) * n3, (n1*dp[1] - n2*dc[1]) * n3];
            };
            var outputList = subjectPolygon;
            cp1 = clipPolygon[clipPolygon.length-1];
            for (j in clipPolygon) {
                var cp2 = clipPolygon[j];
                var inputList = outputList;
                outputList = [];
                s = inputList[inputList.length - 1]; //last on the input list
                for (i in inputList) {
                    var e = inputList[i];   //case1
                    if (inside(e)) {            //case2
                        if (!inside(s)) {       //case4
                            outputList.push(intersection());
                        }   
                        outputList.push(e);
                    }
                    else if (inside(s)) {       //case3
                        outputList.push(intersection());
                    }
                    s = e;
                }
                cp1 = cp2;
            }
            return outputList
        }
 
        function drawPolygon(context, polygon, strokeStyle, fillStyle) {
            context.strokeStyle = strokeStyle;
            context.fillStyle = fillStyle;
            context.beginPath();
            context.moveTo(polygon[0][0],polygon[0][1]);
             //first vertex
            for (var i = 1; i < polygon.length ; i++){
                console.log(polygon.length);
                context.lineTo(polygon[i][0],polygon[i][1]);
                
            }
            
            context.lineTo(polygon[0][0],polygon[0][1]); //back to start
            context.fill();
            context.stroke();
            context.closePath();
        }
        function jsFunctionRandom(value){
            if (value == "Rand1"){
                pointsRand = [[50, 150], [200, 50], [350, 150], [350, 300], [250, 300], [200, 250], [150, 350], [100, 250], [100, 200]];
    
            }
            if (value == "Rand2"){
                pointsRand = [[50, 150], [300, 20], [380, 100], [350, 200],[200,180],[150,100]];
    
            }
            if (value == "Rand3"){
                pointsRand = [[100, 100], [300, 100], [300, 300], [100, 300]];
    
            }
            if (value == "Rand4"){
                pointsRand = [[100, 100], [300, 100], [300, 300], [100, 300]];
    
            }
            if (value == "Rand5"){
                pointsRand = [[100, 100], [300, 100], [300, 300], [100, 300]];
    
            }
        }

       function jsFunction(value){

        if (value == "Square"){
            pointsMain = [[100, 100], [300, 100], [300, 300], [100, 300]];

        }


        if (value == "Triangle"){
            pointsMain = [[200, 200], [400, 200], [400, 300]];

        }

        if (value == "Rectangle"){
            pointsMain = [[100, 100], [400, 100], [400, 300], [100, 300]];

        }

        if (value == "Pentagon"){
            pointsMain = [[300,200],[395,269], [359, 381], [241, 381],[205, 269]];

        }

        if (value == "Hexagon"){
            pointsMain = [[300,163],[350,250],[300,337], [200,337], [150,250], [200,163]];



        }

        } 

     function  redwarshape() {

            // var rectangle = [[x1, x1], [y1+100, x1], [y1, y1], [x1, y1]];
            
            var context = document.getElementById('canvas').getContext('2d');
            var context2 = document.getElementById('canvasResult').getContext('2d');
            
           
            // var x1 = Math.floor((Math.random() * 300) + 175); //randomize
            // var y1 =  Math.floor((Math.random() * 300) + 175); 
            // var x2 = Math.floor((Math.random() * 300) + 175); //randomize
            // var y2 =  Math.floor((Math.random() * 300) + 175); 

            var subjectPolygon = pointsRand,
                clipPolygon = pointsMain; //square
                
            var clippedPolygon = clip(subjectPolygon, clipPolygon);
	        drawPolygon(context, clipPolygon, '#888','#88f');
            drawPolygon(context, subjectPolygon, '#888','#8f8');


            
            
            
            drawPolygon(context, subjectPolygon, '#888','#F76262');
            


            drawPolygon(context, clippedPolygon, '#000','#0ff');

            drawPolygon(context2, clipPolygon, '#000','#0ff');
            drawPolygon(context2 , clippedPolygon , '#000','#F76262')

        }
        //clipPolygon = [[100, 100], [300, 100], [300, 300], [100, 300]];
        //[[x1, x1], [y1, x1], [y1, y1], [x1, y1]]
        //                x1,y1        x2,y1           x2 y2  x1 y2 
        function reloadPage(){
            location.reload(true);
        }