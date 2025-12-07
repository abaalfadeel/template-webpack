import { Boot } from '../scenes/Boot.js';
import { Preloader } from '../scenes/Preloader.js';
import { MainMenu } from '../scenes/MainMenu.js';
import { Game as MainGame } from '../scenes/Game.js';
import { GameOver } from '../scenes/GameOver.js';

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Boot, Preloader, MainMenu, MainGame, GameOver]
};

const StartGame = (parent) => {
    return new Phaser.Game({ ...config, parent });
}

// Start the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    StartGame('game-container');
});

export default StartGame;
