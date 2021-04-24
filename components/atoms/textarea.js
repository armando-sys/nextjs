export default function textarea({
    marginTop,
    width,
    background,
    border,
    borderRadius}){
    return(
        <textarea
        style={{
            marginTop:marginTop,
            background: background,
            border: border,
            borderRadius: borderRadius,
            width: width,
        }}
        >
        </textarea>
    )
}