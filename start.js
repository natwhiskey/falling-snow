 (() => {
    function setup(){
        const canvas = document.getElementById('falling-snow-canvas');
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        return {
        canvas,
        canvasContext: canvas.getContext('2d'),
        numberOfSnowBalls: 350
        }
    }

    function random(max, min){
       const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber; 

    }
    function createSnowBalls(canvas, numberOfSnowBalls){
      const snowBallPropety = [...Array(numberOfSnowBalls)].map(()=>{
          return {
              x: random(canvas.width, 0),
              y: random(canvas.height, 0),
              radius: random(1, 5),
              opacity: random(4, 2),
              speedX: random (5, -5), 
              speedY: random (3, 1),
            } 
        });
      return snowBallPropety;
      
    }
    function run(){
    const {canvas, canvasContext, numberOfSnowBalls} = setup();
    const snowBalls = createSnowBalls(canvas, numberOfSnowBalls);
    }
    run();

 } )(); 