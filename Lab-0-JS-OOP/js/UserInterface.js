// Disclosure: This project was developed with assistance from ChatGPT


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
        
        this.buttons.forEach(button => {
            const maxX = containerWidth - 160;
            const maxY = containerHeight - 80;
            
            const x = Math.max(0, Math.floor(Math.random() * maxX));
            const y = Math.max(0, Math.floor(Math.random() * maxY));
            
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