export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });

    }

    init() {
        this.escenaActual = "Game";
    }

    preload() { }

    create() {
        this.game.config.renderType === Phaser.CANVAS
            ? this.game.renderer.config.antialias = false
            : this.game.renderer.gl.getExtension("OES_standard_derivatives");
        Phaser.ScaleModes.NEAREST;
        // Agregar y reproducir la música de fondo
        this.backgroundMusic = this.sound.add("backgroundMusic", {
            loop: true, // Activar el loop
            volume: 0.5 // Ajustar el volumen (opcional)
        });

        this.backgroundMusic.play();

        this.ginosfx = this.sound.add("spongebobsfx");
        this.huhsfx = this.sound.add("huhsfx");
        this.escuxasfx = this.sound.add("escuxasfx");
        this.camsfx = this.sound.add("camsfx");
        this.click = this.sound.add("clicksfx");

        this.backgroundMusic.play();

        // Agrega el personaje y la ropa
        this.background = [

            { name: "background", x: 960, y: 540 },
            { name: "background0", x: 960, y: 540 },
            { name: "background1", x: 960, y: 540 },
            { name: "background2", x: 960, y: 540 },
            { name: "background3", x: 960, y: 540 },
            { name: "background4", x: 960, y: 540 },
            { name: "background5", x: 960, y: 540 },
            { name: "background6", x: 960, y: 540 },
            { name: "background7", x: 960, y: 540 },
            { name: "background8", x: 960, y: 540 },
            { name: "background9", x: 960, y: 540 },
            { name: "background10", x: 960, y: 540 },
            { name: "background11", x: 960, y: 540 },
            { name: "background12", x: 960, y: 540 },
            { name: "background13", x: 960, y: 540 },

        ];

        this.currentBackgroundIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const background = this.background[this.currentBackgroundIndex];
        this.currentBackground = this.add.image(background.x, background.y, background.name);

        // Botón para cambiar accesorio
        // Crear el botón como sprite interactivo
        const buttonbc = this.add.sprite(424, 60, "buttonbackground0").setInteractive();
        buttonbc.setScale(1.5);

        //soltar boton
        buttonbc.on("pointerup", () => {
            buttonbc.setTexture("buttonbackground0");
        });

        //presionar boton
        buttonbc.on("pointerdown", () => {
            buttonbc.setTexture("buttonbackground1");
            this.click.play();
            this.changeBackground();

        });

        this.window = [

            { name: "window", x: 300, y: 565 },
            { name: "window0", x: 300, y: 565 },
            { name: "window1", x: 300, y: 565 },
            { name: "window2", x: 300, y: 565 },
            { name: "window3", x: 300, y: 565 },
            { name: "window4", x: 300, y: 565 },
            { name: "window5", x: 300, y: 565 },
            { name: "window6", x: 300, y: 565 },
            { name: "window7", x: 300, y: 565 },
            { name: "window8", x: 300, y: 565 },
            { name: "window9", x: 300, y: 565 },
            { name: "window10", x: 300, y: 565 },
            { name: "window11", x: 300, y: 565 },
            { name: "window12", x: 300, y: 565 },
            { name: "window13", x: 300, y: 565 },
            { name: "window14", x: 300, y: 565 },
            { name: "window15", x: 300, y: 565 },
            { name: "window16", x: 300, y: 565 },

        ];

        this.currentWindowIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const window = this.window[this.currentWindowIndex];
        this.currentWindow = this.add.image(window.x, window.y, window.name);
        this.currentWindow.setScale(1.5);

        // Botón para cambiar accesorio
        // Crear el botón como sprite interactivo
        const buttonw = this.add.sprite(176, 60, "buttonwindow0").setInteractive();
        buttonw.setScale(1.5);

        //soltar boton
        buttonw.on("pointerup", () => {
            buttonw.setTexture("buttonwindow0");
        });

        //presionar boton
        buttonw.on("pointerdown", () => {
            buttonw.setTexture("buttonwindow1");
            this.click.play();
            this.changeWindow();

        });


        const character = this.add.image(299, 550, "character").setInteractive();
        character.setScale(1.5);
        const hair = this.add.image(280, 252, "hair").setInteractive();
        hair.setScale(1.5);

        //BOTONES MENU Y CREDITOS
        const buttonmenu = this.add.sprite(720, 70, "buttonmenu0").setInteractive();
        buttonmenu.setScale(1.5);

        //presionar boton
        buttonmenu.on("pointerdown", () => {
            buttonmenu.setTexture("buttonmenu1");
        });

        //soltar boton
        buttonmenu.on("pointerup", () => {
            buttonmenu.setTexture("buttonmenu0");
            this.click.play();
            this.backgroundMusic.stop();
            this.goToMenu();
        });

        const buttoncredits = this.add.sprite(890, 70, "buttoncredits0").setInteractive();
        buttoncredits.setScale(1.5);

        //presionar boton
        buttoncredits.on("pointerdown", () => {
            buttoncredits.setTexture("buttoncredits1");
        });

        //soltar boton
        buttoncredits.on("pointerup", () => {
            buttoncredits.setTexture("buttoncredits0");
            this.click.play();
            this.backgroundMusic.pause();
            // Lanza la escena de pausa y pasa la clave de la escena actual
            this.scene.launch("Credits", {
                escenaActual: this.escenaActual,
                backgroundMusic: this.backgroundMusic,
            });
        });

        // Array que define los tipos de prendas y sus variantes
        const items = [

            {
                type: "stockings",
                variants: [

                    { name: "stockings1", sprite: this.add.sprite(1480, 700, "stockings1").setInteractive() },
                    { name: "stockings2", sprite: this.add.sprite(1450, 700, "stockings2").setInteractive() },
                    { name: "stockings3", sprite: this.add.sprite(1420, 700, "stockings3").setInteractive() },
                    { name: "stockings4", sprite: this.add.sprite(1390, 700, "stockings4").setInteractive() },
                    { name: "stockings5", sprite: this.add.sprite(1360, 700, "stockings5").setInteractive() },
                    { name: "stockings6", sprite: this.add.sprite(1330, 700, "stockings6").setInteractive() },
                    { name: "stockings7", sprite: this.add.sprite(1300, 700, "stockings7").setInteractive() },
                    { name: "stockings8", sprite: this.add.sprite(1270, 700, "stockings8").setInteractive() },
                    { name: "stockings9", sprite: this.add.sprite(1240, 700, "stockings9").setInteractive() },
                    { name: "stockings10", sprite: this.add.sprite(1210, 700, "stockings10").setInteractive() },
                    { name: "stockings11", sprite: this.add.sprite(1180, 700, "stockings11").setInteractive() },
                    { name: "stockings0", sprite: this.add.sprite(1150, 700, "stockings0").setInteractive() },

                ],

                targetZone: this.add.zone(280, 711, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "socks",
                variants: [
                    { name: "socks0", sprite: this.add.sprite(1100, 750, "socks0").setInteractive() },
                    { name: "socks1", sprite: this.add.sprite(1050, 750, "socks1").setInteractive() },
                    { name: "socks2", sprite: this.add.sprite(1000, 750, "socks2").setInteractive() },
                    { name: "socks3", sprite: this.add.sprite(950, 750, "socks3").setInteractive() },



                ],

                targetZone: this.add.zone(280, 761, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "socksa",
                variants: [
                    { name: "socks4", sprite: this.add.sprite(900, 790, "socks4").setInteractive() },
                    { name: "socks5", sprite: this.add.sprite(850, 790, "socks5").setInteractive() },


                ],

                targetZone: this.add.zone(280, 828, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {

                type: "socksb",
                variants: [
                    { name: "socks6", sprite: this.add.sprite(800, 790, "socks6").setInteractive() },
                    { name: "socks7", sprite: this.add.sprite(750, 790, "socks7").setInteractive() },
                    { name: "socks8", sprite: this.add.sprite(700, 790, "socks8").setInteractive() },

                ],

                targetZone: this.add.zone(280, 862, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "skirts",
                variants: [
                    { name: "s0", sprite: this.add.sprite(750, 500, "skirt0").setInteractive() },
                    { name: "s1", sprite: this.add.sprite(800, 500, "skirt1").setInteractive() },
                    { name: "s2", sprite: this.add.sprite(850, 500, "skirt2").setInteractive() },
                    { name: "s3", sprite: this.add.sprite(900, 500, "skirt3").setInteractive() },
                    { name: "s4", sprite: this.add.sprite(950, 500, "skirt4").setInteractive() },
                    { name: "s5", sprite: this.add.sprite(1000, 500, "skirt5").setInteractive() },
                    { name: "s6", sprite: this.add.sprite(1050, 500, "skirt6").setInteractive() },

                    { name: "s7", sprite: this.add.sprite(750, 360, "skirt7").setInteractive() },
                    { name: "s8", sprite: this.add.sprite(800, 360, "skirt8").setInteractive() },
                    { name: "s9", sprite: this.add.sprite(850, 360, "skirt9").setInteractive() },
                    { name: "s10", sprite: this.add.sprite(900, 360, "skirt10").setInteractive() },
                    { name: "s11", sprite: this.add.sprite(950, 360, "skirt11").setInteractive() },
                    { name: "s12", sprite: this.add.sprite(1000, 360, "skirt12").setInteractive() },
                    { name: "s13", sprite: this.add.sprite(1050, 360, "skirt13").setInteractive() },

                ],

                targetZone: this.add.zone(280, 523, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "jeans",
                variants: [
                    { name: "jean0", sprite: this.add.sprite(1100, 360, "jean6").setInteractive() },
                    { name: "jean1", sprite: this.add.sprite(1150, 360, "jean5").setInteractive() },
                    { name: "jean2", sprite: this.add.sprite(1200, 360, "jean4").setInteractive() },
                    { name: "jean3", sprite: this.add.sprite(1250, 360, "jean3").setInteractive() },


                ],

                targetZone: this.add.zone(280, 540, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "jeansa",
                variants: [
                    { name: "jean4", sprite: this.add.sprite(1550, 660, "jean2").setInteractive() },
                    { name: "jean5", sprite: this.add.sprite(1600, 660, "jean1").setInteractive() },
                    { name: "jean6", sprite: this.add.sprite(1650, 660, "jean0").setInteractive() },


                ],

                targetZone: this.add.zone(280, 649, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "bras",
                variants: [
                    { name: "bra0", sprite: this.add.sprite(820, 140, "bra0").setInteractive() },
                    { name: "bra1", sprite: this.add.sprite(860, 140, "bra1").setInteractive() },
                    { name: "bra2", sprite: this.add.sprite(900, 140, "bra2").setInteractive() },
                    { name: "bra3", sprite: this.add.sprite(940, 140, "bra3").setInteractive() },
                    { name: "bra4", sprite: this.add.sprite(980, 140, "bra4").setInteractive() },
                ],

                targetZone: this.add.zone(280, 358, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "top",
                variants: [
                    { name: "topa", sprite: this.add.sprite(1010, 200, "top0").setInteractive() },
                    { name: "topb", sprite: this.add.sprite(1030, 200, "top1").setInteractive() },
                    { name: "topc", sprite: this.add.sprite(1050, 200, "top2").setInteractive() },
                ],

                targetZone: this.add.zone(280, 373, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "tank",
                variants: [
                    { name: "tank0", sprite: this.add.sprite(1100, 200, "tank0").setInteractive() },
                    { name: "tank1", sprite: this.add.sprite(1120, 200, "tank1").setInteractive() },
                    { name: "tank2", sprite: this.add.sprite(1140, 200, "tank2").setInteractive() },
                    { name: "tank3", sprite: this.add.sprite(1160, 200, "tank3").setInteractive() },
                    { name: "tank4", sprite: this.add.sprite(1180, 200, "tank4").setInteractive() },

                ],

                targetZone: this.add.zone(281, 373, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "shirta",
                variants: [
                    { name: "shirt0", sprite: this.add.sprite(1200, 200, "shirt0").setInteractive() },
                    { name: "shirt1", sprite: this.add.sprite(1220, 200, "shirt1").setInteractive() },
                    { name: "shirt2", sprite: this.add.sprite(1260, 200, "shirt2").setInteractive() },
                    { name: "shirt3", sprite: this.add.sprite(1280, 200, "shirt3").setInteractive() },
                    { name: "shirt4", sprite: this.add.sprite(1300, 200, "shirt4").setInteractive() },
                    { name: "shirt5", sprite: this.add.sprite(1320, 200, "shirt5").setInteractive() },
                    { name: "shirt6", sprite: this.add.sprite(1340, 200, "shirt6").setInteractive() },
                    { name: "shirt7", sprite: this.add.sprite(1360, 200, "shirt7").setInteractive() },
                    { name: "shirt8", sprite: this.add.sprite(1380, 200, "shirt8").setInteractive() },

                ],

                targetZone: this.add.zone(280, 380, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "shirt",
                variants: [
                    { name: "over7", sprite: this.add.sprite(1400, 150, "oversize7").setInteractive() },
                    { name: "over6", sprite: this.add.sprite(1450, 150, "oversize6").setInteractive() },
                    { name: "over2", sprite: this.add.sprite(1500, 150, "oversize2").setInteractive() },
                    { name: "over4", sprite: this.add.sprite(1550, 150, "oversize4").setInteractive() },
                    { name: "over3", sprite: this.add.sprite(1600, 150, "oversize3").setInteractive() },
                    { name: "over5", sprite: this.add.sprite(1650, 150, "oversize5").setInteractive() },
                    { name: "over1", sprite: this.add.sprite(1700, 150, "oversize1").setInteractive() },
                    { name: "over0", sprite: this.add.sprite(1750, 150, "oversize0").setInteractive() },
                ],

                targetZone: this.add.zone(283, 433, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "tomshirt",
                variants: [

                    { name: "tomtshirt", sprite: this.add.sprite(1800, 150, "tomtshirt").setInteractive() },
                ],

                targetZone: this.add.zone(283, 428, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "dresses",
                variants: [
                    { name: "dress6", sprite: this.add.sprite(1350, 400, "dress6").setInteractive() },
                    { name: "dress5", sprite: this.add.sprite(1400, 400, "dress5").setInteractive() },
                    { name: "dress4", sprite: this.add.sprite(1450, 400, "dress4").setInteractive() },
                    { name: "dress3", sprite: this.add.sprite(1500, 400, "dress3").setInteractive() },
                    { name: "dress2", sprite: this.add.sprite(1550, 400, "dress2").setInteractive() },
                    { name: "dress1", sprite: this.add.sprite(1600, 400, "dress1").setInteractive() },
                    { name: "dress0", sprite: this.add.sprite(1650, 400, "dress0").setInteractive() },
                ],

                targetZone: this.add.zone(283, 458, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "shoesa",
                variants: [
                    { name: "shoes1", sprite: this.add.sprite(1785, 950, "shoes1").setInteractive() },
                    { name: "shoes2", sprite: this.add.sprite(1630, 950, "shoes2").setInteractive() },
                    { name: "shoes3", sprite: this.add.sprite(1475, 950, "shoes3").setInteractive() },
                    { name: "shoes4", sprite: this.add.sprite(1320, 950, "shoes4").setInteractive() },
                    { name: "shoes5", sprite: this.add.sprite(1165, 950, "shoes5").setInteractive() },

                ],

                targetZone: this.add.zone(280, 895, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "shoesa",
                variants: [
                    { name: "shoes0", sprite: this.add.sprite(1005, 930, "shoes0").setInteractive() },


                ],

                targetZone: this.add.zone(280, 856, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "shoesa",
                variants: [
                    { name: "shoes6", sprite: this.add.sprite(850, 950, "shoes6").setInteractive() },
                    { name: "shoes7", sprite: this.add.sprite(700, 950, "shoes7").setInteractive() },


                ],

                targetZone: this.add.zone(280, 894, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "socksc",
                variants: [
                    { name: "sa0", sprite: this.add.sprite(800, 650, "socksa0").setInteractive() },
                    { name: "sa1", sprite: this.add.sprite(750, 650, "socksa1").setInteractive() },

                ],

                targetZone: this.add.zone(280, 839, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "weddingdress",
                variants: [
                    { name: "dress", sprite: this.add.sprite(1780, 590, "dress").setInteractive() },
                ],

                targetZone: this.add.zone(281, 608, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
            },
            {
                type: "corset",
                variants: [
                    { name: "corset", sprite: this.add.sprite(730, 250, "corset").setInteractive() },
                    { name: "corset0", sprite: this.add.sprite(780, 250, "corset0").setInteractive() },
                    { name: "corset1", sprite: this.add.sprite(830, 250, "corset1").setInteractive() },
                    { name: "corset2", sprite: this.add.sprite(880, 250, "corset2").setInteractive() },

                ],

                targetZone: this.add.zone(280, 388, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "head",
                variants: [
                    { name: "head0", sprite: this.add.sprite(1170, 80, "head0").setInteractive() },
                    { name: "head1", sprite: this.add.sprite(1190, 80, "head1").setInteractive() },
                    { name: "head2", sprite: this.add.sprite(1210, 80, "head2").setInteractive() },
                    { name: "head3", sprite: this.add.sprite(1230, 80, "head3").setInteractive() },
                    { name: "head4", sprite: this.add.sprite(1250, 80, "head4").setInteractive() },


                ],

                targetZone: this.add.zone(280, 220, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
            },
            {
                type: "neck",
                variants: [
                    { name: "scarf0", sprite: this.add.sprite(1010, 80, "scarf0").setInteractive() },
                    { name: "scarf1", sprite: this.add.sprite(1030, 80, "scarf1").setInteractive() },
                    { name: "scarf2", sprite: this.add.sprite(1050, 80, "scarf2").setInteractive() },
                    { name: "scarf3", sprite: this.add.sprite(1070, 80, "scarf3").setInteractive() },
                    { name: "scarf4", sprite: this.add.sprite(1090, 80, "scarf4").setInteractive() },

                ],

                targetZone: this.add.zone(280, 360, 100, 100).setRectangleDropZone(20, 20)
                // Zona del torso
            },

        ];

        // Iterar sobre cada tipo de ítem
        items.forEach(item => {
            // Iterar sobre cada variante dentro del tipo
            item.variants.forEach(variant => {
                variant.sprite.setScale(1.5); // Ajustar el tamaño del sprite
            });
        });

        // Añade gráficos para visualizar las zonas objetivo
        const graphics = this.add.graphics();
        graphics.lineStyle(2, 0xff0000);
        items.forEach(item => {
            graphics.strokeRect(
                item.targetZone.x - item.targetZone.input.hitArea.width / 2,
                item.targetZone.y - item.targetZone.input.hitArea.height / 2,
                item.targetZone.input.hitArea.width,
                item.targetZone.input.hitArea.height
            );

            // Configurar sprites de variantes
            item.variants.forEach(variant => {
                this.input.setDraggable(variant.sprite);
                variant.initialPosition = { x: variant.sprite.x, y: variant.sprite.y };
            });

            graphics.setVisible(false)
        });

        // Eventos de arrastre
        this.input.on("dragstart", (pointer, gameObject) => {
            gameObject.setScale(1.6); // Agranda el objeto al arrastrar
        });

        this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on("dragend", (pointer, gameObject) => {
            let matchedItem = null;

            // Buscar la variante a la que pertenece el sprite
            items.forEach(item => {
                const variant = item.variants.find(v => v.sprite === gameObject);
                if (variant) matchedItem = { item, variant };
            });

            if (matchedItem) {
                const { item, variant } = matchedItem;
                const boundsA = gameObject.getBounds();
                const boundsB = item.targetZone.getBounds();

                // Verificar si está en la zona correcta
                if (Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB)) {
                    gameObject.x = item.targetZone.x;
                    gameObject.y = item.targetZone.y;
                } else {
                    // Volver a la posición inicial
                    gameObject.x = variant.initialPosition.x;
                    gameObject.y = variant.initialPosition.y;
                }
            }
            gameObject.setScale(1.5); // Volver al tamaño original
        });

        //////////////////LABIOS
        this.lipstick = [
            { name: "empty", x: 300, y: 200 },
            { name: "lips0", x: 280, y: 278 },
            { name: "lips1", x: 280, y: 278 },
            { name: "lips2", x: 280, y: 278 },
            { name: "lips3", x: 280, y: 278 }
        ];
        this.currentLipsIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const Lips = this.lipstick[this.currentLipsIndex];
        this.currentLips = this.add.image(Lips.x, Lips.y, Lips.name);

        // Botón para cambiar accesorio
        // Crear el botón como sprite interactivo
        const button0 = this.add.sprite(105, 1003, "buttonlips0").setInteractive();
        button0.setScale(1.5);

        //soltar boton
        button0.on("pointerup", () => {
            button0.setTexture("buttonlips0");
        });

        //presionar boton
        button0.on("pointerdown", () => {
            button0.setTexture("buttonlips1");
            this.click.play();
            this.changeLips();

        });

        ///////////////OJOS SOMBRAS
        this.eyeshadows = [
            { name: "empty", x: 300, y: 200 },
            { name: "eyeshadow0", x: 280, y: 239 },
            { name: "eyeshadow1", x: 280, y: 239 },
            { name: "eyeshadow2", x: 280, y: 239 },
            { name: "eyeshadow3", x: 280, y: 239 },
            { name: "eyeshadow4", x: 280, y: 239 },

        ];
        this.currentEyeshadowIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const eyeshadow = this.eyeshadows[this.currentEyeshadowIndex];
        this.currentEyeshadow = this.add.image(eyeshadow.x, eyeshadow.y, eyeshadow.name);

        // Botón para cambiar accesorio
        const button1 = this.add.sprite(183, 1003, "buttoneyes0").setInteractive();
        button1.setScale(1.5);

        //soltar boton
        button1.on("pointerup", () => {
            button1.setTexture("buttoneyes0");
        });

        //presionar boton
        button1.on("pointerdown", () => {
            button1.setTexture("buttoneyes1");
            this.click.play();
            this.changeEyeshadow();

        });

        ///////////////DECO
        this.cheeks = [
            { name: "empty", x: 300, y: 200 },
            { name: "deco0", x: 280, y: 260 },
            { name: "deco1", x: 305, y: 260 },
            { name: "deco2", x: 280, y: 225 },
        ];
        this.currentCheekIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const cheek = this.cheeks[this.currentCheekIndex];
        this.currentCheek = this.add.image(cheek.x, cheek.y, cheek.name);

        // Botón para cambiar accesorio
        const button2 = this.add.sprite(261, 1003, "buttondeco0").setInteractive();
        button2.setScale(1.5);

        //soltar boton
        button2.on("pointerup", () => {
            button2.setTexture("buttondeco0");
        });

        //presionar boton
        button2.on("pointerdown", () => {
            button2.setTexture("buttondeco1");
            this.click.play();
            this.changeCheek();
        });

        ///////////////////GAFAS
        this.glassess = [
            { name: "empty", x: 300, y: 200 },
            { name: "glassess0", x: 280, y: 245 }, // Gafas
            { name: "glassess1", x: 280, y: 245 } // Otro par de gafas
        ];
        this.currentGlassessIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const glasses = this.glassess[this.currentGlassessIndex];
        this.currentGlassess = this.add.image(glasses.x, glasses.y, glasses.name);

        // Botón para cambiar accesorio
        const button3 = this.add.sprite(339, 1003, "buttonglasses0").setInteractive();
        button3.setScale(1.5);

        //soltar boton
        button3.on("pointerup", () => {
            button3.setTexture("buttonglasses0");
        });

        //presionar boton
        button3.on("pointerdown", () => {
            button3.setTexture("buttonglasses1");
            this.click.play();
            this.changeGlassess();

        });

        ////////////////////ACC
        this.accessories = [
            { name: "empty", x: 300, y: 200 },
            { name: "acc1", x: 280, y: 320 },
            { name: "acc2", x: 280, y: 310 },
            { name: "acc3", x: 280, y: 310 },
            { name: "acc4", x: 280, y: 340 },
            { name: "acc5", x: 280, y: 340 }
        ];
        this.currentAccessoryIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const accessory = this.accessories[this.currentAccessoryIndex];
        this.currentAccessory = this.add.image(accessory.x, accessory.y, accessory.name);

        // Botón para cambiar accesorio
        const button4 = this.add.sprite(417, 1003, "buttonacc0").setInteractive();
        button4.setScale(1.5);

        //soltar boton
        button4.on("pointerup", () => {
            button4.setTexture("buttonacc0");
        });

        //presionar boton
        button4.on("pointerdown", () => {
            button4.setTexture("buttonacc1");
            this.click.play();
            this.changeAccessory();

        });

        ////////////////////EXTRAS
        this.extras = [
            { name: "empty", x: 300, y: 200 },
            { name: "acc0", x: 300, y: 480 },
            { name: "acc6", x: 280, y: 408 },
            { name: "acc7", x: 456, y: 350 },
            { name: "acc8", x: 460, y: 344 },
            { name: "acc9", x: 430, y: 240 },
            { name: "acc10", x: 430, y: 240 },
        ];
        this.currentExtraIndex = 0; // Índice actual del accesorio

        // Mostrar el accesorio inicial
        const extra = this.extras[this.currentExtraIndex];
        this.currentExtra = this.add.image(extra.x, extra.y, extra.name);

        // Botón para cambiar accesorio
        const button5 = this.add.sprite(495, 1003, "buttonextra0").setInteractive();
        button5.setScale(1.5);

        //soltar boton
        button5.on("pointerup", () => {
            button5.setTexture("buttonextra0");
        });

        //presionar boton
        button5.on("pointerdown", () => {
            button5.setTexture("buttonextra1");
            this.click.play();
            this.changeExtras();
        });

        ////////////////////CAPTURAR PANTALLA
        const screenshotButton = this.add.sprite(590, 65, "buttonsave0").setInteractive();
        screenshotButton.setScale(1.5);

        //soltar boton
        screenshotButton.on("pointerup", () => {
            screenshotButton.setTexture("buttonsave0");
            this.camsfx.play();
            this.captureScreenshot(this, 57, 89, 485, 951);
        });

        screenshotButton.on("pointerdown", () => {
            screenshotButton.setTexture("buttonsave1");

        });
    }

    changeLips() {
        // Incrementar el índice del accesorio
        this.currentLipsIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentLipsIndex >= this.lipstick.length) {
            this.currentLipsIndex = 0;
        }

        // Obtener el accesorio actual
        const Lips = this.lipstick[this.currentLipsIndex];

        // Actualizar la textura y posición del accesorio
        this.currentLips.setScale(1.5);
        this.currentLips.setTexture(Lips.name);
        this.currentLips.setPosition(Lips.x, Lips.y);
    }

    changeEyeshadow() {
        // Incrementar el índice del accesorio
        this.currentEyeshadowIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentEyeshadowIndex >= this.eyeshadows.length) {
            this.currentEyeshadowIndex = 0;
        }

        // Obtener el accesorio actual
        const eyeshadow = this.eyeshadows[this.currentEyeshadowIndex];

        // Actualizar la textura y posición del accesorio
        this.currentEyeshadow.setScale(1.5);
        this.currentEyeshadow.setTexture(eyeshadow.name);
        this.currentEyeshadow.setPosition(eyeshadow.x, eyeshadow.y);
    } S

    changeCheek() {
        // Incrementar el índice del accesorio
        this.currentCheekIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentCheekIndex >= this.cheeks.length) {
            this.currentCheekIndex = 0;
        }

        // Obtener el accesorio actual
        const cheek = this.cheeks[this.currentCheekIndex];

        // Actualizar la textura y posición del accesorio

        this.currentCheek.setScale(1.5);
        this.currentCheek.setTexture(cheek.name);
        this.currentCheek.setPosition(cheek.x, cheek.y);
    }

    changeGlassess() {
        // Incrementar el índice del accesorio
        this.currentGlassessIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentGlassessIndex >= this.glassess.length) {
            this.currentGlassessIndex = 0;
        }

        // Obtener el accesorio actual
        const glasses = this.glassess[this.currentGlassessIndex];

        // Actualizar la textura y posición del accesorio
        this.currentGlassess.setScale(1.5);
        this.currentGlassess.setTexture(glasses.name);
        this.currentGlassess.setPosition(glasses.x, glasses.y);
    }

    changeAccessory() {
        // Incrementar el índice del accesorio
        this.currentAccessoryIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentAccessoryIndex >= this.accessories.length) {
            this.currentAccessoryIndex = 0;
        }

        // Obtener el accesorio actual
        const accessory = this.accessories[this.currentAccessoryIndex];

        // Actualizar la textura y posición del accesorio
        this.currentAccessory.setScale(1.5);
        this.currentAccessory.setTexture(accessory.name);
        this.currentAccessory.setPosition(accessory.x, accessory.y);
    }

    changeExtras() {
        // Incrementar el índice del accesorio
        this.currentExtraIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentExtraIndex >= this.extras.length) {
            this.currentExtraIndex = 0;
        }

        if (this.currentExtraIndex == 5) {
            this.huhsfx.play();
        }

        if (this.currentExtraIndex == 6) {
            this.escuxasfx.play();
        }

        // Obtener el accesorio actual
        const extra = this.extras[this.currentExtraIndex];

        // Actualizar la textura y posición del accesorio
        this.currentExtra.setScale(1.5);
        this.currentExtra.setTexture(extra.name);
        this.currentExtra.setPosition(extra.x, extra.y);
    }

    changeBackground() {
        // Incrementar el índice del accesorio
        this.currentBackgroundIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentBackgroundIndex >= this.background.length) {
            this.currentBackgroundIndex = 0;
        }

        // Obtener el accesorio actual
        const background = this.background[this.currentBackgroundIndex];

        // Actualizar la textura y posición del accesorio
        this.currentBackground.setScale(1.5);
        this.currentBackground.setTexture(background.name);
        this.currentBackground.setPosition(background.x, background.y);
    }

    changeWindow() {
        // Incrementar el índice del accesorio
        this.currentWindowIndex++;

        // Volver al primer accesorio si se supera el último
        if (this.currentWindowIndex >= this.window.length) {
            this.currentWindowIndex = 0;
        }

        if (this.currentWindowIndex == 6) {
            this.ginosfx.play();
        }

        // Obtener el accesorio actual
        const window = this.window[this.currentWindowIndex];

        // Actualizar la textura y posición del accesorio
        this.currentWindow.setScale(1.5);
        this.currentWindow.setTexture(window.name);
        this.currentWindow.setPosition(window.x, window.y);
    }

    captureScreenshot(scene, x, y, width, height) {
        // Usar renderer.snapshot para capturar el área seleccionada
        scene.game.renderer.snapshot((image) => {
            // Crear un canvas temporal
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');

            // Dibujar la porción de la imagen capturada en el canvas temporal
            ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

            // Crear el enlace para descargar la imagen
            const link = document.createElement("a");
            link.setAttribute("download", "Maquis UwU.png");
            link.setAttribute("href", canvas.toDataURL());
            link.click();
        });
    }

    goToMenu() {
        this.scene.start("Menu");
    }

    goToCredits() {
        this.scene.start("Credits");
    }

}
