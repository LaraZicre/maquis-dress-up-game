export class Game extends Phaser.Scene {
    constructor() {
        super({ key: "Game" });

    }

    preload() {
        //assets
        this.load.image("character", "assets/base.png");
        this.load.image("hair", "assets/pelo.png");
        this.load.image("background", "assets/fondo.png");
        this.load.image("window", "assets/ventana.png");
        //makeup
        this.load.image("eyeshadow0", "assets/sombra0.png");
        this.load.image("eyeshadow1", "assets/sombra1.png");
        this.load.image("lips0", "assets/boca0.png");
        this.load.image("lips1", "assets/boca1.png");
        this.load.image("lips2", "assets/boca2.png");
        this.load.image("lips3", "assets/boca3.png");
        this.load.image("deco0", "assets/cachetes0.png");
        this.load.image("deco1", "assets/cachetes1.png");
        //tops
        this.load.image("oversize0", "assets/over0.png");
        this.load.image("oversize1", "assets/over1.png");
        this.load.image("oversize2", "assets/over2.png");
        this.load.image("oversize3", "assets/over3.png");
        this.load.image("oversize4", "assets/over4.png");
        this.load.image("oversize5", "assets/over5.png");
        this.load.image("top0", "assets/top0.png");
        this.load.image("top1", "assets/top1.png");
        this.load.image("top2", "assets/top2.png");
        this.load.image("tomtshirt", "assets/ANIMETITTIES.png");
        this.load.image("shirt0", "assets/camisa0.png");
        this.load.image("shirt1", "assets/camisa1.png");
        this.load.image("shirt2", "assets/camisa2.png");
        this.load.image("shirt3", "assets/camisa3.png");
        this.load.image("shirt4", "assets/camisa4.png");
        this.load.image("shirt5", "assets/camisa5.png");
        this.load.image("shirt6", "assets/camisa6.png");
        this.load.image("shirt7", "assets/camisa7.png");
        this.load.image("shirt8", "assets/camisa8.png");
        this.load.image("tank0", "assets/remerita0.png");
        this.load.image("tank1", "assets/remerita1.png");
        this.load.image("tank2", "assets/remerita2.png");
        this.load.image("tank3", "assets/remerita3.png");
        this.load.image("tank4", "assets/remerita4.png");
        //skirts
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
        //pants
        this.load.image("jean0", "assets/jean0.png");
        this.load.image("jean1", "assets/jean1.png");
        this.load.image("jean2", "assets/jean2.png");
        this.load.image("jean3", "assets/jean3.png");
        this.load.image("jean4", "assets/jean4.png");
        this.load.image("jean5", "assets/jean5.png");
        this.load.image("jean6", "assets/jean6.png");
        //medias
        this.load.image("stockings0", "assets/cancan0.png");
        this.load.image("stockings1", "assets/cancan1.png");
        this.load.image("stockings2", "assets/cancan2.png");
        this.load.image("stockings3", "assets/cancan3.png");
        this.load.image("stockings4", "assets/cancan4.png");
        this.load.image("stockings5", "assets/cancan5.png");
        this.load.image("stockings6", "assets/cancan6.png");
        this.load.image("stockings7", "assets/cancan7.png");
        this.load.image("stockings8", "assets/cancan8.png");
        this.load.image("stockings9", "assets/cancan9.png");
        this.load.image("stockings10", "assets/cancan10.png");
        this.load.image("stockings11", "assets/cancan11.png");
        this.load.image("socks0", "assets/medias0.png");
        this.load.image("socks1", "assets/medias1.png");
        this.load.image("socks2", "assets/medias2.png");
        this.load.image("socks3", "assets/medias3.png");
        this.load.image("socks4", "assets/medias4.png");
        this.load.image("socks5", "assets/medias5.png");
        this.load.image("socks6", "assets/medias6.png");
        this.load.image("socks7", "assets/medias7.png");
        this.load.image("socks8", "assets/medias8.png");
        this.load.image("socksa0", "assets/soquete0.png");
        this.load.image("socksa1", "assets/soquete1.png");
        //zapatos
        this.load.image("shoes0", "assets/zapato0.png");
        this.load.image("shoes1", "assets/zapato1.png");
        this.load.image("shoes2", "assets/zapato2.png");
        this.load.image("shoes3", "assets/zapato3.png");
        this.load.image("shoes4", "assets/zapato4.png");
        this.load.image("shoes5", "assets/zapato5.png");
        this.load.image("shoes6", "assets/zapato6.png");
        this.load.image("shoes7", "assets/zapato7.png");
        //acc
        this.load.image("acc0", "assets/acc0.png");
        this.load.image("acc1", "assets/acc1.png");
        this.load.image("acc2", "assets/acc2.png");
        this.load.image("acc3", "assets/acc3.png");
        //corset
        this.load.image("corset", "assets/corset.png");
        //glasses
        this.load.image("glasses0", "assets/lentes0.png");
        this.load.image("glasses1", "assets/lentes1.png");
        //audio
        this.load.audio("backgroundMusic", "audio/dressupmaquislofi.mp3");

    }

    create() {
        // Agrega el personaje y la ropa
        const background = this.add.image(960, 540, "background");
        background.setScale(1.5); 
        const window = this.add.image(300, 550, "window");
        window.setScale(1.5); 
        const character = this.add.image(299, 570, "character").setInteractive();
        character.setScale(1.5); 
        const hair = this.add.image(280, 272, "hair").setInteractive();
        hair.setScale(1.5); 

            // Agregar y reproducir la música de fondo
        this.backgroundMusic = this.sound.add("backgroundMusic", {
            loop: true, // Activar el loop
            volume: 0.5 // Ajustar el volumen (opcional)
        });

        this.backgroundMusic.play();

         // Array que define los tipos de prendas y sus variantes
    const items = [

        {
  
            type: "stockings",
            variants: [

                { name: "stockings1", sprite: this.add.sprite(1700, 700, "stockings1").setInteractive() },
                { name: "stockings2", sprite: this.add.sprite(1650, 700, "stockings2").setInteractive() },
                { name: "stockings3", sprite: this.add.sprite(1600, 700, "stockings3").setInteractive() },
                { name: "stockings4", sprite: this.add.sprite(1550, 700, "stockings4").setInteractive() },
                { name: "stockings5", sprite: this.add.sprite(1500, 700, "stockings5").setInteractive() },
                { name: "stockings6", sprite: this.add.sprite(1450, 700, "stockings6").setInteractive() },
                { name: "stockings7", sprite: this.add.sprite(1400, 700, "stockings7").setInteractive() },
                { name: "stockings8", sprite: this.add.sprite(1350, 700, "stockings8").setInteractive() },
                { name: "stockings9", sprite: this.add.sprite(1300, 700, "stockings9").setInteractive() },
                { name: "stockings10", sprite: this.add.sprite(1250, 700, "stockings10").setInteractive() },
                { name: "stockings11", sprite: this.add.sprite(1200, 700, "stockings11").setInteractive() },
                { name: "stockings0", sprite: this.add.sprite(1150, 700, "stockings0").setInteractive() },

            ],

            targetZone: this.add.zone(280, 731, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {
  
            type: "socks",
            variants: [
                { name: "socks0", sprite: this.add.sprite(1100, 750, "socks0").setInteractive() },
                { name: "socks1", sprite: this.add.sprite(1050, 750, "socks1").setInteractive() },
                { name: "socks2", sprite: this.add.sprite(1000, 750, "socks2").setInteractive() },
                { name: "socks3", sprite: this.add.sprite(950, 750, "socks3").setInteractive() },



            ],

            targetZone: this.add.zone(280, 781, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {
  
            type: "socksa",
            variants: [
                { name: "socks4", sprite: this.add.sprite(900, 790, "socks4").setInteractive() },
                { name: "socks5", sprite: this.add.sprite(850, 790, "socks5").setInteractive() },


            ],

            targetZone: this.add.zone(280, 848, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {
  
            type: "socksb",
            variants: [
                { name: "socks6", sprite: this.add.sprite(800, 790, "socks6").setInteractive() },
                { name: "socks7", sprite: this.add.sprite(750, 790, "socks7").setInteractive() },
                { name: "socks8", sprite: this.add.sprite(700, 790, "socks8").setInteractive() },

            ],

            targetZone: this.add.zone(280, 882, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
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
                { name: "s7", sprite: this.add.sprite(1100, 500, "skirt7").setInteractive() },
                { name: "s8", sprite: this.add.sprite(1150, 500, "skirt8").setInteractive() },
                { name: "s9", sprite: this.add.sprite(1200, 500, "skirt9").setInteractive() },
                { name: "s10", sprite: this.add.sprite(1250, 500, "skirt10").setInteractive() },
                { name: "s11", sprite: this.add.sprite(1300, 500, "skirt11").setInteractive() },
                { name: "s12", sprite: this.add.sprite(1350, 500, "skirt12").setInteractive() },
                { name: "s13", sprite: this.add.sprite(1400, 500, "skirt13").setInteractive() },

            ],

            targetZone: this.add.zone(280, 543, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
        
        },

        {
            type: "jeans",
            variants: [
                { name: "jean0", sprite: this.add.sprite(1450, 500, "jean6").setInteractive() },
                { name: "jean1", sprite: this.add.sprite(1500, 500, "jean5").setInteractive() },
                { name: "jean2", sprite: this.add.sprite(1550, 500, "jean4").setInteractive() },
                { name: "jean3", sprite: this.add.sprite(1600, 500, "jean3").setInteractive() },
                { name: "jean4", sprite: this.add.sprite(1650, 500, "jean2").setInteractive() },
                { name: "jean5", sprite: this.add.sprite(1700, 500, "jean1").setInteractive() },
                { name: "jean6", sprite: this.add.sprite(1750, 500, "jean0").setInteractive() },


            ],

            targetZone: this.add.zone(280, 543, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
        
        },

        {

            
            type: "shirt",
            variants: [
                { name: "over4", sprite: this.add.sprite(1150, 200, "oversize4").setInteractive() },
                { name: "over3", sprite: this.add.sprite(1100, 200, "oversize3").setInteractive() },
                { name: "over2", sprite: this.add.sprite(1050, 200, "oversize2").setInteractive() },
                { name: "over1", sprite: this.add.sprite(1000, 200, "oversize1").setInteractive() },
                { name: "over0", sprite: this.add.sprite(950, 200, "oversize0").setInteractive() },  
                { name: "tomtshirt", sprite: this.add.sprite(950, 200, "tomtshirt").setInteractive() }, 
            ],

            targetZone: this.add.zone(283, 453, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {

            
            type: "shirta",
            variants: [
                { name: "shirt0", sprite: this.add.sprite(1150, 200, "shirt0").setInteractive() },
                { name: "shirt1", sprite: this.add.sprite(1150, 200, "shirt1").setInteractive() },
                { name: "shirt2", sprite: this.add.sprite(1150, 200, "shirt2").setInteractive() },
                { name: "shirt3", sprite: this.add.sprite(1150, 200, "shirt3").setInteractive() },
                { name: "shirt4", sprite: this.add.sprite(1150, 200, "shirt4").setInteractive() },
                { name: "shirt5", sprite: this.add.sprite(1150, 200, "shirt5").setInteractive() },
                { name: "shirt6", sprite: this.add.sprite(1150, 200, "shirt6").setInteractive() },
                { name: "shirt7", sprite: this.add.sprite(1150, 200, "shirt7").setInteractive() },
                { name: "shirt8", sprite: this.add.sprite(1150, 200, "shirt8").setInteractive() },

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

        {
            type: "tank",
            variants: [
                { name: "tank0", sprite: this.add.sprite(900, 200, "tank0").setInteractive() },
                { name: "tank1", sprite: this.add.sprite(900, 200, "tank1").setInteractive() },
                { name: "tank2", sprite: this.add.sprite(900, 200, "tank2").setInteractive() },
                { name: "tank3", sprite: this.add.sprite(900, 200, "tank3").setInteractive() },
                { name: "tank4", sprite: this.add.sprite(900, 200, "tank4").setInteractive() },

            ],

            targetZone: this.add.zone(280, 393, 100, 100).setRectangleDropZone(20, 20)// Zona del torso
        
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

            targetZone: this.add.zone(280, 920, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {
  
            type: "shoesa",
            variants: [
                { name: "shoes0", sprite: this.add.sprite(1005, 930, "shoes0").setInteractive() },

  
            ],

            targetZone: this.add.zone(280, 875, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {
  
            type: "shoesa",
            variants: [
                { name: "shoes6", sprite: this.add.sprite(850, 950, "shoes6").setInteractive() },
                { name: "shoes7", sprite: this.add.sprite(700, 950, "shoes7").setInteractive() },

                
            ],

            targetZone: this.add.zone(280, 910, 100, 100).setRectangleDropZone(20, 20),// Zona del torso
        },

        {
            type: "corset",
            variants: [
                { name: "corset", sprite: this.add.sprite(900, 200, "corset").setInteractive() },

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