export default function button({ 
  value,
  background,
  color,
  padding,
  border,
  radius,
  weight,
  width,
  marginTop,
 }) {
  return (
    <button
      style={{
        background: background,
        color: color,
        padding: padding,
        border: border,
        borderRadius:radius,
        fontWeight: weight,
        width: width,
        marginTop: marginTop,
      }}
    >
      {value}
    </button>
  );
}