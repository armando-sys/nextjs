export default function test({
    value,
    color,
    margin,
    size,
    weight,
    marginTop,
}){
    return(
    <p style={{
        color:color,
        margin:margin,
        marginTop: marginTop,
        fontsize: size,
        fontWeight: weight,
        }}
        >
            {value}
        </p>
    );
}