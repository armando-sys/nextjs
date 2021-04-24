export default function button({ value, background, color, padding, border, radius }) {
  return (
    <button
      style={{
        background: background,
        color: color,
        padding: padding,
        border: border,
        borderRadius:radius
      }}
    >
      {value}
    </button>
  );
}