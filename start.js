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
    function run(){
    const {canvas, canvasContext, numberOfSnowBalls} = setup();
    }
    run();

 } )(); 