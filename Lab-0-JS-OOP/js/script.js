// Disclosure: This project was developed with assistance from ChatGPT

import { STRINGS } from '../lang/messages/en/user.js';
import { AppController } from './AppController.js';
import { UserInterface } from './UserInterface.js';
import { GameEngine } from './GameEngine.js';

const container = document.getElementById('game-container');
const input = document.getElementById('button-count-input');
const goButton = document.getElementById('go-button');
const label = document.getElementById('button-count-label');

label.textContent = STRINGS.LABEL_BUTTON_COUNT;
goButton.textContent = STRINGS.BUTTON_GO;

const ui = new UserInterface(container);
const engine = new GameEngine(ui, null);
const app = new AppController(ui, engine);

engine.controller = app;

goButton.addEventListener('click', () => {
    const value = Number(input.value);

    if (Number.isNaN(value) || value < 3 || value > 7) {
        alert(STRINGS.ERROR_INVALID_INPUT);
        return;
    }

    app.startGame(value);
});