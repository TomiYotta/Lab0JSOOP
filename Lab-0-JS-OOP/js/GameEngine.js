// Disclosure: This project was developed with assistance from ChatGPT
// I had to use it for some logic and snytax since I am new to JS OOP

export class GameEngine {
    constructor(ui, controller) {
        this.ui = ui;
        this.controller = controller;
        this.originalOrder = [];
        this.currentIndex = 0;
        this.isClickable = false;
        this.scrambleCount = 0;
    }

    initialize(n) {
        this.originalOrder = [];
        for (let i = 0; i < n; i++) {
            this.originalOrder.push(i);
        }
        
        this.currentIndex = 0;
        this.isClickable = false;
        this.scrambleCount = 0;
        
        this.startScrambleSequence(n);
    }

    startScrambleSequence(n) {
        setTimeout(() => {
            this.scrambleButtons(n);
        }, n * 1000);
    }

    scrambleButtons(n) {
        if (this.scrambleCount >= n) {
            this.ui.hideButtonNumbers();
            this.isClickable = true;
            this.ui.enableButtonClicks((index) => this.handleButtonClick(index));
            return;
        }

        this.ui.randomizeButtonPositions();
        this.scrambleCount++;

        setTimeout(() => {
            this.scrambleButtons(n);
        }, 2000);
    }

    handleButtonClick(index) {
        if (!this.isClickable) {
            return;
        }

        if (index === this.originalOrder[this.currentIndex]) {
            this.ui.revealButtonNumber(index);
            this.currentIndex++;

            if (this.currentIndex === this.originalOrder.length) {
                this.isClickable = false;
                this.ui.disableButtonClicks();
                this.controller.handleResult(true);
            }
        } else {
            this.isClickable = false;
            this.ui.disableButtonClicks();
            this.ui.revealAllButtons();
            this.controller.handleResult(false);
        }
    }

    resetGame() {
        this.originalOrder = [];
        this.currentIndex = 0;
        this.isClickable = false;
        this.scrambleCount = 0;
    }
}