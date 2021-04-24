export default function form({value,background, border, borderRadius}){
    return(
        <form
        style={{
            background: background,
            border: border,
            borderRadius: borderRadius,
        }}
        >
            {value}
        </form>
    )
}