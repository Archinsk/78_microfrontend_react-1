import './Button.css';
export default function Button({ theme, title, square, icon }) {
    let btnClass = "btn"
    if (theme) {
        btnClass += " btn-" + theme;
    }
    if (square) {
        btnClass += " btn-square"
    }
    if (icon) {
        btnClass += " btn-icon";
    }
    return (
        <button class={btnClass}>Button</button>
    )
}