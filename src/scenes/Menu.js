export class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu" });

    }


    init() {
        this.escenaActual = "Menu";
    }


    create() {

        this.add.image(960, 540, "menubackground");
        this.click = this.sound.add("clicksfx");

        this.playButton();
        this.CreditsButton();

    }

    update() { }

    playButton() {
        //boton quieto
        const buttonplay = this.add.sprite(970, 450, "buttonstart0").setInteractive();
        buttonplay.setScale(1.5);

        //presionar boton
        buttonplay.on("pointerdown", () => {
            buttonplay.setTexture("buttonstart1");
        });

        //soltar boton
        buttonplay.on("pointerup", () => {
            this.click.play();
            buttonplay.setTexture("buttonstart0");
            this.scene.start("Game");
        });

    }

    CreditsButton() {
                //boton quieto
                const buttoncreditsa = this.add.sprite(970, 530, "buttoncredits2").setInteractive();
                buttoncreditsa.setScale(1.5);
        
                //presionar boton
                buttoncreditsa.on("pointerdown", () => {
                    buttoncreditsa.setTexture("buttoncredits3");

                    
                });
                //soltar boton
                buttoncreditsa.on("pointerup", () => {
                    this.click.play();
                    buttoncreditsa.setTexture("buttoncredits2");
                    this.scene.launch("Credits", {
                        escenaActual: this.escenaActual,
                    });
                });
    }

}