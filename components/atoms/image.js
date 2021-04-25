export default function image({
  border,
  height,
  width,
  image,
  position,
  size,
  repeat,
  radius,
}) {
  return (
    <>
      <div
        style={{
          border: border ? border : "solid thin #eee",
          height: height ? height : "100px",
          width: width ? width : "100px",
          background: image ? `url(${image})` : "url(/products/product_1.svg)",
          backgroundPosition: position ? position : "center",
          backgroundSize: size ? size : "70%",
          backgroundRepeat: repeat ? repeat : "no-repeat",
          borderRadius: radius ? radius : "5px",
        }}
      ></div>
    </>
  );
}
