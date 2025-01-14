import { Game } from './scenes/Game.js';

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT, // Ajusta el tamaño del juego manteniendo la proporción
        autoCenter: Phaser.Scale.CENTER_BOTH,
     }, // Centra el juego en la ventana
    scene: [Game]
};

const game = new Phaser.Game(config);
