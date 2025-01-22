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
        this.load.image("background0", "assets/fondo0.png");
        this.load.image("background1", "assets/fondo1.png");
        this.load.image("background2", "assets/fondo2.png");
        this.load.image("background3", "assets/fondo3.png");
        this.load.image("background4", "assets/fondo4.png");
        this.load.image("background5", "assets/fondo5.png");
        this.load.image("background6", "assets/fondo6.png");
        this.load.image("background7", "assets/fondo7.png");
        this.load.image("background8", "assets/fondo8.png");
        this.load.image("background9", "assets/fondo9.png");
        this.load.image("background10", "assets/fondo10.png");
        this.load.image("background11", "assets/fondo11.png");
        this.load.image("background12", "assets/fondo12.png");
        this.load.image("background13", "assets/fondo13.png");
        this.load.image("menubackground", "assets/fondomenu.png");
        //ventanas
        this.load.image("window", "assets/ventana.png");
        this.load.image("window0", "assets/ventana0.png");
        this.load.image("window1", "assets/ventana1.png");
        this.load.image("window2", "assets/ventana2.png");
        this.load.image("window3", "assets/ventana3.png");
        this.load.image("window4", "assets/ventana4.png");
        this.load.image("window5", "assets/ventana5.png");
        this.load.image("window6", "assets/ventana6.png");
        this.load.image("window7", "assets/ventana7.png");
        this.load.image("window8", "assets/ventana8.png");
        this.load.image("window9", "assets/ventana9.png");
        this.load.image("window10", "assets/ventana10.png");
        this.load.image("window11", "assets/ventana11.png");
        this.load.image("window12", "assets/ventana12.png");
        this.load.image("window13", "assets/ventana13.png");
        this.load.image("window14", "assets/ventana14.png");
        this.load.image("window15", "assets/ventana15.png");
        this.load.image("window16", "assets/ventana16.png");
        //makeup
        this.load.image("eyeshadow0", "assets/sombra0.png");
        this.load.image("eyeshadow1", "assets/sombra1.png");
        this.load.image("eyeshadow2", "assets/sombra2.png");
        this.load.image("eyeshadow3", "assets/sombra3.png");
        this.load.image("eyeshadow4", "assets/sombra4.png");
        this.load.image("lips0", "assets/boca0.png");
        this.load.image("lips1", "assets/boca1.png");
        this.load.image("lips2", "assets/boca2.png");
        this.load.image("lips3", "assets/boca3.png");
        this.load.image("deco0", "assets/cachetes0.png");
        this.load.image("deco1", "assets/cachetes1.png");
        this.load.image("deco2", "assets/cachetes2.png");
        //tops
        this.load.image("oversize0", "assets/over0.png");
        this.load.image("oversize1", "assets/over1.png");
        this.load.image("oversize2", "assets/over2.png");
        this.load.image("oversize3", "assets/over3.png");
        this.load.image("oversize4", "assets/over4.png");
        this.load.image("oversize5", "assets/over5.png");
        //bras
        this.load.image("bra0", "assets/corpiño0.png");
        this.load.image("bra1", "assets/corpiño1.png");
        this.load.image("bra2", "assets/corpiño2.png");
        this.load.image("bra3", "assets/corpiño3.png");
        this.load.image("bra4", "assets/corpiño4.png");
        //tops
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
        //dresses
        this.load.image("dress", "assets/vestido.png");
        this.load.image("dress0", "assets/vestido0.png");
        this.load.image("dress1", "assets/vestido1.png");
        this.load.image("dress2", "assets/vestido2.png");
        this.load.image("dress3", "assets/vestido3.png");
        this.load.image("dress4", "assets/vestido4.png");
        this.load.image("dress5", "assets/vestido5.png");
        this.load.image("dress6", "assets/vestido6.png");
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

        this.load.image("acc4", "assets/acc4.png");
        this.load.image("acc5", "assets/acc5.png");
        this.load.image("acc6", "assets/acc6.png");
        this.load.image("acc7", "assets/acc7.png");
        this.load.image("acc8", "assets/acc8.png");
        //corset
        this.load.image("corset", "assets/corset.png");
        this.load.image("corset0", "assets/corset0.png");
        this.load.image("corset1", "assets/corset1.png");
        this.load.image("corset2", "assets/corset2.png");
        //neck
        this.load.image("scarf0", "assets/bufanda0.png");
        this.load.image("scarf1", "assets/bufanda1.png");
        this.load.image("scarf2", "assets/bufanda2.png");
        this.load.image("scarf3", "assets/bufanda3.png");
        this.load.image("scarf4", "assets/bufanda4.png");
        //head
        this.load.image("head0", "assets/auris0.png");
        this.load.image("head1", "assets/auris1.png");
        this.load.image("head2", "assets/auris2.png");
        this.load.image("head3", "assets/auris3.png");
        this.load.image("head4", "assets/auris4.png");
        //glassess
        this.load.image("glassess0", "assets/lentes0.png");
        this.load.image("glassess1", "assets/lentes1.png");
        //audio
        this.load.audio("backgroundMusic", "audio/dressupmaquislofi.mp3");
        this.load.audio("spongebobsfx", "audio/Spongebob Stinky Sound Effect.mp3");
        this.load.audio("clicksfx", "audio/click.mp3");
        this.load.audio("huhsfx", "audio/huh.mp3");
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
        this.load.image("buttonwindow0", "assets/botonventana0.png");
        this.load.image("buttonwindow1", "assets/botonventana1.png");
        this.load.image("buttonbackground0", "assets/botonfondo0.png");
        this.load.image("buttonbackground1", "assets/botonfondo1.png");
        this.load.image("buttonstart0", "assets/botonstart0.png");
        this.load.image("buttonstart1", "assets/botonstart1.png");
        this.load.image("buttonback0", "assets/botonatras0.png");
        this.load.image("buttonback1", "assets/botonatras1.png");
        this.load.image("buttoncredits0", "assets/botoncreditos0.png");
        this.load.image("buttoncredits1", "assets/botoncreditos1.png");
        this.load.image("buttoncredits2", "assets/botoncreditos2.png");
        this.load.image("buttoncredits3", "assets/botoncreditos3.png");
        this.load.image("buttonmenu0", "assets/botonmenu0.png");
        this.load.image("buttonmenu1", "assets/botonmenu1.png");
        this.load.image("buttonsave0", "assets/botoncaptura0.png");
        this.load.image("buttonsave1", "assets/botoncaptura1.png");

    }

    create() { }

    update() {
        this.scene.start("Menu");
    }

}