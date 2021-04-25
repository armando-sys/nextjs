export default function text({
  value,
  color,
  margin,
  size,
  weight,
  marginTop,
}) {
  return (
    <p
      style={{
        color: color,
        margin: margin,
        marginTop: marginTop,
        fontSize: size,
        fontWeight: weight,
      }}
    >
      {value}
    </p>
  );
}
