// Disclosure: This project was developed with assistance from ChatGPT

import { STRINGS } from '../lang/messages/en/user.js';
import { ButtonItem } from './ButtonItem.js';

export class UserInterface {
    constructor(container) {
        this.container = container;
        this.buttons = [];
    }

    createButtons(n) {
        this.reset();
        
        for (let i = 0; i < n; i++) {
            const buttonItem = new ButtonItem(i, `${i + 1}`);
            const element = buttonItem.createElement();
            
            const leftPosition = i * 160 + 20;
            const topPosition = 20;
            buttonItem.setPosition(leftPosition, topPosition);
            
            this.container.appendChild(element);
            this.buttons.push(buttonItem);
        }
    }

    randomizeButtonPositions() {
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        
        const buttonWidth = 160;
        const buttonHeight = 80;
        
        this.buttons.forEach(button => {
            const maxX = Math.max(0, containerWidth - buttonWidth);
            const maxY = Math.max(0, containerHeight - buttonHeight);
            
            const x = Math.floor(Math.random() * (maxX + 1));
            const y = Math.floor(Math.random() * (maxY + 1));
            
            button.setPosition(x, y);
        });
    }

    hideButtonNumbers() {
        this.buttons.forEach(button => button.hideNumber());
    }

    revealButtonNumber(index) {
        this.buttons[index].showNumber();
    }

    revealAllButtons() {
        this.buttons.forEach(button => button.showNumber());
    }

    enableButtonClicks(clickHandler) {
        this.buttons.forEach((button, index) => {
            button.enableClick(() => clickHandler(index));
        });
    }

    disableButtonClicks() {
        this.buttons.forEach(button => button.disableClick());
    }

    reset() {
        this.buttons.forEach(button => button.remove());
        this.buttons = [];
    }

    showWinMessage() {
        alert(STRINGS.WIN_MESSAGE);
    }

    showLoseMessage() {
        alert(STRINGS.LOSE_MESSAGE);
    }
}