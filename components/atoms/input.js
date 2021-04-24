export default function input({
    
    width,
   
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
        type
        >
        </input>
    )
}