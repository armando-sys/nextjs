import AtomText from "../atoms/text";

export default function inputForm({ customClass, label, height, value = "Data", name, id, type, rows }) {
  return (
    <>
      <label className={customClass} htmlFor={value} style={{ width: "100%" }}>
        {type !== "checkbox" ? (<AtomText value={label ? label : value} size="18px" />) : ""}
        {type == "textarea" ? (
          <textarea
            id={id}
            type={type}
            rows={rows ? rows : "5"}
            className="form-control mt-3"
            placeholder={`Enter Your ${value}`}
          ></textarea>
        ) : (
          <input
            id={id}
            type={type}
            className="form-control mt-3"
            placeholder={`Enter Your ${value}`}
            style={{ height: height ? height : "48px" }}
          />
        )}
      </label>
    </>
  );
}
