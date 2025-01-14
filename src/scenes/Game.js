export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });



        
        
    }

    preload() {
        // Carga tus assets aquí
        this.load.image("character", "assets/base.png");
        this.load.image("background", "assets/fondo.png");
        this.load.image("oversize0", "assets/over0.png");
        this.load.image("window", "assets/ventana.png");
        this.load.image("oversize1", "assets/over1.png");
        this.load.image("oversize2", "assets/over2.png");
        this.load.image("oversize3", "assets/over3.png");
        this.load.image("oversize4", "assets/over4.png");
        this.load.image("top0", "assets/top0.png");
        this.load.image("top1", "assets/top1.png");
        this.load.image("top2", "assets/top2.png");
        this.load.image("skirt0", "assets/falda0.png");
        this.load.image("skirt1", "assets/falda1.png");
        this.load.image("skirt2", "assets/falda2.png");
        this.load.image("skirt3", "assets/falda3.png");
        this.load.image("skirt4", "assets/falda4.png");
        this.load.image("skirt5", "assets/falda5.png");
        this.load.image("skirt6", "assets/falda6.png");
        this.load.image("skirt7", "assets/falda7.png");
        this.load.image("skirt8", "assets/falda8.png");
        this.load.image("skirt9", "assets/falda9.png");
        this.load.image("skirt10", "assets/falda10.png");
        this.load.image("skirt11", "assets/falda11.png");
        this.load.image("skirt12", "assets/falda12.png");
        this.load.image("skirt13", "assets/falda13.png");
    }

    create() {
        // Agrega el personaje y la ropa
        const background = this.add.image(960, 540, "background");
        background.setScale(1.5); 
        const window = this.add.image(300, 550, "window");
        window.setScale(1.5); 
        const character = this.add.image(299, 570, "character").setInteractive();
        character.setScale(1.5); 



         // Array que define los tipos de prendas y sus variantes
    const items = [

        {
            type: "skirts",
            variants: [
                { name: "s0", sprite: this.add.sprite(720, 500, "skirt0").setInteractive() },
                { name: "s1", sprite: this.add.sprite(740, 500, "skirt1").setInteractive() },
                { name: "s2", sprite: this.add.sprite(760, 500, "skirt2").setInteractive() },
                { name: "s3", sprite: this.add.sprite(780, 500, "skirt3").setInteractive() },
                { name: "s4", sprite: this.add.sprite(800, 500, "skirt4").setInteractive() },
                { name: "s5", sprite: this.add.sprite(820, 500, "skirt5").setInteractive() },
                { name: "s6", sprite: this.add.sprite(840, 500, "skirt6").setInteractive() },
                { name: "s7", sprite: this.add.sprite(860, 500, "skirt7").setInteractive() },
                { name: "s8", sprite: this.add.sprite(880, 500, "skirt8").setInteractive() },
                { name: "s9", sprite: this.add.sprite(900, 500, "skirt9").setInteractive() },
                { name: "s10", sprite: this.add.sprite(920, 500, "skirt10").setInteractive() },
                { name: "s11", sprite: this.add.sprite(960, 500, "skirt11").setInteractive() },
                { name: "s12", sprite: this.add.sprite(980, 500, "skirt12").setInteractive() },
                { name: "s13", sprite: this.add.sprite(1000, 500, "skirt13").setInteractive() },

            ],

            targetZone: this.add.zone(280, 546, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
        
        },

        {

            
            type: "shirt",
            variants: [
                { name: "over4", sprite: this.add.sprite(1150, 200, "oversize4").setInteractive() },
                { name: "over3", sprite: this.add.sprite(1100, 200, "oversize3").setInteractive() },
                { name: "over2", sprite: this.add.sprite(1050, 200, "oversize2").setInteractive() },
                { name: "over1", sprite: this.add.sprite(1000, 200, "oversize1").setInteractive() },
                { name: "over0", sprite: this.add.sprite(950, 200, "oversize0").setInteractive() },  
            ],

            targetZone: this.add.zone(283, 453, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {
            type: "top",
            variants: [
                { name: "topa", sprite: this.add.sprite(900, 200, "top0").setInteractive() },
                { name: "topb", sprite: this.add.sprite(880, 200, "top1").setInteractive() },
                { name: "topc", sprite: this.add.sprite(860, 200, "top2").setInteractive() },
            ],

            targetZone: this.add.zone(280, 393, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
        
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
}

}