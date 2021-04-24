export default function textarea({
    width,
    background,
    border,
    borderRadius}){
    return(
        <textarea
        style={{
            background: background,
            border: border,
            borderRadius: borderRadius,
            width: width,
        }}
        >
        </textarea>
    )
}