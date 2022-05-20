class MainScene extends Phaser.Scene {
    //global variales

    constructor(){
        super("MainScene")
    }
    preload(){
    }

    create(){
        //matter engine and renderer
        let engine = Matter.Engine.create();

        let render = Matter.Render.create({
            element: document.body,
            engine:engine,
            options: {
                width: 800,
                height: 500,
                wireframes: true
            }
        });
        Matter.Engine.run(engine);
        Matter.Render.run(render);
    }

    update(){

    }
}