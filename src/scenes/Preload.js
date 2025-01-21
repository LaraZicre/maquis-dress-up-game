export class Preload extends Phaser.Scene {
    constructor() {
        super({ key: "Preload" });

    }

    init() { }

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
        //glassess
        this.load.image("glassess0", "assets/lentes0.png");
        this.load.image("glassess1", "assets/lentes1.png");
        //audio
        this.load.audio("backgroundMusic", "audio/dressupmaquislofi.mp3");
        //imgen invisible
        this.load.image("empty", "assets/invisible.png");
        //UI
        this.load.image("buttonlips0", "assets/botonlabios0.png");
        this.load.image("buttonlips1", "assets/botonlabios1.png");
        this.load.image("buttondeco0", "assets/botondeco0.png");
        this.load.image("buttondeco1", "assets/botondeco1.png");
        this.load.image("buttoneyes0", "assets/botonsombras0.png");
        this.load.image("buttoneyes1", "assets/botonsombras1.png");
        this.load.image("buttonglasses0", "assets/botongafas0.png");
        this.load.image("buttonglasses1", "assets/botongafas1.png");
        this.load.image("buttonacc0", "assets/botonjoyas0.png");
        this.load.image("buttonacc1", "assets/botonjoyas1.png");
        this.load.image("buttonextra0", "assets/botonextras0.png");
        this.load.image("buttonextra1", "assets/botonextras1.png");
    }

    create() { }

    update() {
        this.scene.start("Game");
    }

}