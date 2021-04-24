export default function text({
    value,
    color,
    margin,
    size,
    weight,
    marginTop,
    fontFamily,
  }) {
    return (
      <p
        style={{
          color: color,
          margin: margin,
          marginTop: marginTop,
          fontSize: size,
          fontWeight: weight,
          fontFamily: fontFamily,
        }}
      >
        {value}
      </p>
    );
  }