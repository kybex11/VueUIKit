"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function input(placeholder, action, customClass) {
    var input = document.createElement('input');
    input.placeholder = placeholder;
    input.style.borderColor = "#c1d3fa";
    input.style.border = "2px solid #c1d3fa";
    input.style.borderRadius = "5px";
    input.style.scale = "1.01";
    input.addEventListener('change', function () {
        action();
    });
    if (customClass) {
        input.classList.add(customClass);
    }
    return input;
}
exports.default = input;
