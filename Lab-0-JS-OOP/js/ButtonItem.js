// Disclosure: This project was developed with assistance from ChatGPT

export class ButtonItem {
    constructor(index, labelText) {
        this.index = index;
        this.labelText = labelText;
        this.element = null;
        this.color = this.generateRandomColor();
    }

    generateRandomColor() {
        const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    createElement() {
        const button = document.createElement('button');
        button.textContent = this.labelText;
        button.style.width = '10em';
        button.style.height = '5em';
        button.style.position = 'absolute';
        button.style.backgroundColor = this.color;
        button.style.border = 'none';
        this.element = button;
        return button;
    }

    setPosition(x, y) {
        if (this.element) {
            this.element.style.left = `${x}px`;
            this.element.style.top = `${y}px`;
        }
    }

    hideNumber() {
        if (this.element) {
            this.element.textContent = '';
        }
    }

    showNumber() {
        if (this.element) {
            this.element.textContent = this.labelText;
        }
    }

    enableClick(handler) {
        if (this.element) {
            this.element.onclick = handler;
        }
    }

    disableClick() {
        if (this.element) {
            this.element.onclick = null;
        }
    }

    remove() {
        if (this.element) {
            this.element.remove();
            this.element = null;
        }
    }
}