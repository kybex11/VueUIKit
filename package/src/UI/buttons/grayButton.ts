export default function grayButton(text: string, action: () => void, customClass: string) {
    const btn = document.createElement('button');
    btn.innerText = text;
    btn.style.color = "#0380F5";
    btn.style.backgroundColor = "#212124";
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