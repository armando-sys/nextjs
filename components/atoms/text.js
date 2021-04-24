export default function text({
    value,
    color,
    margin,
    size,
    weight,
    marginTop,
    marginBottom,
    fontFamily,
    position,
    width,
    height,
  }) {
    return (
      <p
        style={{
          width: width,
          position: position,
          color: color,
          margin: margin,
          marginTop: marginTop,
          marginBottom: marginBottom,
          fontSize: size,
          fontWeight: weight,
          fontFamily: fontFamily,
          height: height,
        }}
      >
        {value}
      </p>
    );
  }