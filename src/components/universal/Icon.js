import "./Icon.css"
export default function ({ format, path, name }) {
    if (format === "svg" && path && name) {
        return <img class="icon" src={path + name + ".svg"} />
    } else {
        return <span class="icon"></span>
    }
}