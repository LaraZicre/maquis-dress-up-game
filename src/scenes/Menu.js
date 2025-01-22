export class Menu extends Phaser.Scene {
    constructor() {
        super({ key: "Menu" });

    }

    init() { }

    create() {

        this.add.image(960, 540, "menubackground");
        this.click = this.sound.add("clicksfx");

        this.playButton();

    }

    update() { }

    playButton() {
        //boton quieto
        const buttonplay = this.add.sprite(950, 450, "buttonstart0").setInteractive();
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

}