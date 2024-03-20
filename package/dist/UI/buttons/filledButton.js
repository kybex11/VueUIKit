"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filledButton(text, action, customClass) {
    var btn = document.createElement('button');
    btn.innerText = text;
    btn.style.color = "#fff";
    btn.style.backgroundColor = "#0285ff";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "1.5rem";
    btn.style.padding = "20px 30px";
    btn.style.borderRadius = "15px";
    btn.onclick = function () {
        action;
    };
    if (customClass) {
        btn.classList.add(customClass);
    }
    return btn;
}
exports.default = filledButton;
