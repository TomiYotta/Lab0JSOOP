// Disclosure: This project was developed with assistance from ChatGPT

export class AppController {
    constructor(ui, gameEngine) {
        this.ui = ui;
        this.gameEngine = gameEngine;
    }

    startGame(n) {
        this.ui.reset();
        this.ui.createButtons(n);
        this.gameEngine.initialize(n);
    }

    resetGame() {
        this.ui.reset();
        this.gameEngine.resetGame();
    }

    handleResult(isWin) {
        if (isWin) {
            this.ui.showWinMessage();
        } else {
            this.ui.showLoseMessage();
        }
    }
}