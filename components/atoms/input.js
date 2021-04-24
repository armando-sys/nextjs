export default function input({
    type,
    background,
    border,
    borderRadius}){
    return(
        <input
        style={{
            background: background,
            border: border,
            borderRadius: borderRadius,
        }}
        >
        </input>
    )
}