const contentWrapper = document.querySelector('.content-wrapper');
const content = document.getElementById('content');
const cursor = document.querySelector('.cursor');
const text = 'This project is in stealth mode. \nStay tuned, we are almost ready!';
const typingDelay = 100;

function typeText(text, index) {
  if (index < text.length) {
    const char = text.charAt(index);

    if (char === '\n') {
      content.innerHTML += '<br>';
    } else {
      const span = document.createElement('span');
      span.textContent = char;
      content.appendChild(span);
    }

    positionCursor();
    setTimeout(() => typeText(text, index + 1), typingDelay);
  } else {
    //addLink();
  }
}

function positionCursor(isLink = false) {
    const lastElement = content.lastElementChild;
    if (lastElement) {
      const rect = lastElement.getBoundingClientRect();
      cursor.style.position = 'absolute';
      cursor.style.left = `${rect.right}px`;
      cursor.style.top = `${rect.top}px`;
  
      if (isLink) {
        cursor.style.marginLeft = '4px';
      }
    }
  }

function addLink() {
    const linkElement = document.createElement('a');
    linkElement.href = link;
    linkElement.target = '_blank';
    linkElement.textContent = link;
    content.appendChild(linkElement);
    contentWrapper.appendChild(cursor);
    positionCursor(true);
  }

window.addEventListener('DOMContentLoaded', () => {
  typeText(text, 0);
});
