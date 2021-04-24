import AtomText from "../atoms/text";

export default function product_list({ image, name, category, price }) {
  return (
    <>
      <div className="p-4 templateProductList text-left">
        <div
          className="mb-3"
          style={{
            width: "100%",
            background: "red",
            height: "156px",
            background: `url(${image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center"
          }}
        ></div>
        {/*<img className="mb-4" src={image} />*/}
        <AtomText value={name} size="14px" weight="bold" />
        <AtomText value={category} size="9px" margin="-10px 0px 20px 0px" />
        <div className="row">
          <div className="col-md-8">
            <AtomText value={price} size="18px" weight="bold" />
          </div>
          <div className="col-md-4">
            <img src="/beranda/icon_cart_black.svg" />
          </div>
        </div>
      </div>
    </>
  );
}