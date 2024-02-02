import './FieldProperty.css'

export default function FieldProperty(props) {
    return (
        <div class="field-property">
            <div class="property-title">{props.title}</div>
            <div class="property-value">{String(props.value)}</div>
        </div>
    )
}