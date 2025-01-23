export class Credits extends Phaser.Scene {
    constructor() {
        super({ key: "Credits" });
    }

    init(data) {
        this.escenaActual = data.escenaActual;
        this.backgroundMusic = data.backgroundMusic;
    }

    create() {
        this.add.image(960, 540, "creditsbackground");
        this.click = this.sound.add("clicksfx");
        this.huh = this.sound.add("huhsfx");

        // Botón para volver al menú
        const buttonmenu = this.add.sprite(1800, 40, "buttonmenu0").setInteractive();
        buttonmenu.setScale(1.5);

        buttonmenu.on("pointerdown", () => {
            buttonmenu.setTexture("buttonmenu1");
        });

        buttonmenu.on("pointerup", () => {
            buttonmenu.setTexture("buttonmenu0");
            this.click.play();
            this.goToMenu();
        });

        // Botón para volver al juego
        const buttonback = this.add.sprite(40, 40, "buttonback0").setInteractive();

        // Verifica si el botón debe estar visible
        if (this.escenaActual === "Menu") {
            buttonback.setVisible(false);
            buttonback.disableInteractive(); // Desactiva interactividad
        }

        buttonback.on("pointerdown", () => {
            buttonback.setTexture("buttonback1");
        });

        buttonback.on("pointerup", () => {
            this.click.play();
            this.scene.stop();
            if (this.escenaActual === "Game") {
                this.scene.stop("Credits");
                this.backgroundMusic.resume(this.escenaActual);
                this.scene.resume("Game");
            }
        });
    }

    update() {}

    goToMenu() {

        if (this.escenaActual === "Game") {
        this.backgroundMusic.stop();
        this.scene.stop("Game");
        this.scene.start("Menu");

        }

        else if (this.escenaActual === "Menu") {
        this.scene.start("Menu");

        }
    }
}
