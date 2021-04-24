export default function textarea({
    background,
    border,
    borderRadius}){
    return(
        <textarea
        style={{
            background: background,
            border: border,
            borderRadius: borderRadius,
        }}
        >
        </textarea>
    )
}