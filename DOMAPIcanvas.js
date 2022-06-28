var canvas = document.createElement('canvas') ; 
canvas.width = 50 ; 
canvas.height = 40 ; 

var ctx = canvas.getContext('2d') 

ctx.font = '30px Cursive' ; 
ctx.fillText("Helloworld !",50,50)


document.body.appendChild(canvas)