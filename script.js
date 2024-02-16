document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('colorTable');

    for (let i = 0; i < 5; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < 5; j++) {
            const cell = row.insertCell(j);
            cell.addEventListener('click', changeColor);
            cell.className = (i === 2 && j === 2) ? 'green no-click' : 'blue';
            if (i === 2 && j === 2) {
                const freeText = document.createElement('div');
                freeText.className = 'free-text';
                freeText.textContent = 'FREE';
                cell.appendChild(freeText);
                freeText.style.userSelect = 'none'; 
            }
            if (cell.className.includes('gray')) {
                const grayText = document.createElement('div');
                grayText.className = 'gray-text';
                grayText.textContent = 'X';
                cell.appendChild(grayText);
                grayText.style.userSelect = 'none';
            }
        }
    }

    for (let i = 1; i <= 8; i++) {
        const elementS = document.querySelector(`.S${i}`);
        elementS.addEventListener('click', changeColorToRed);
        elementS.style.cursor = 'pointer'; 
        elementS.style.userSelect = 'none'; 
    }
});

function changeColorToRed() {
    const currentColor = this.style.color || 'white';
    const nextColor = currentColor === 'red' ? 'white' : 'red';
    this.style.color = nextColor;
}

function changeColor() {
    if (!this.classList.contains('no-click')) {
        const colors = ['blue', 'white', 'red', 'yellow', 'gray'];
        const currentColor = this.className;
        const currentIndex = colors.indexOf(currentColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        this.className = colors[nextIndex];

        const grayText = this.querySelector('.gray-text');
        if (grayText) {
            grayText.remove();
        }

        if (colors[nextIndex] === 'gray') {
            const newGrayText = document.createElement('div');
            newGrayText.className = 'gray-text';
            newGrayText.textContent = 'X';
            this.appendChild(newGrayText);
            newGrayText.style.userSelect = 'none';
        }
    }
}
