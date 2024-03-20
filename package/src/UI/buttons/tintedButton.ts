export default function tintedButton(text: string, action: () => void, customClass: string) {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.style.color = "#0285FF";
    btn.style.backgroundColor = "#001B3E";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "1.5rem";
    btn.style.padding = "20px 30px";
    btn.style.borderRadius = "15px";
    btn.onclick = () => {
        action;
    }
    if (customClass) {
        btn.classList.add(customClass);
    }
    return btn;
}