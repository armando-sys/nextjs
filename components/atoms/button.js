export default function button({
  customClass,
  value,
  background,
  color,
  padding,
  border,
  radius,
  width,
  height,
  icon,
}) {
  return (
    <button
      className={customClass}
      style={{
        width: width ? width : "200px",
        height: height ? height : "43px",
        background: background,
        color: color,
        padding: padding,
        border: border ? border : "none",
        borderRadius: radius ? radius : "10px",
      }}
    >
      {icon ? (
        <>
          <div className="row">
            <div className="col-10">{value}</div>
            <div className="col-2">
              <img
                style={{ position: "absolute", right: "20px", top: "8px" }}
                src={icon}
              />
            </div>
          </div>
        </>
      ) : (
        <span>{value}</span>
      )}
    </button>
  );
}
