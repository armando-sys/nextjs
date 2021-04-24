export default function input({
    width,
    type,
    background,
    border,
    borderRadius  }){
    return(
        <input
        style={{
            background: background,
            border: border,
            borderRadius: borderRadius,
            width: width,

        }}
        >
        </input>
    )
}