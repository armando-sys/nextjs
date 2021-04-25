import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import { list_product } from "../components/variables/product";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function test() {
  let products = list_product();
  return (
    <>
      <OrganismNav />
      <center>
        <div className="row container mt-5">
          <div className="col text-left">
            <AtomText value="Peduli Digital Market" size="36px" weight="bold" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />
            <div className="row mt-5">
              <div className="col-5">
                <AtomButton
                  background="#0086CF"
                  value="Browse All Products"
                  color="#FFF"
                  border="none"
                  icon="/beranda/arrow_white.svg"
                />
              </div>
              <div className="col">
                <AtomButton
                  background="#F0F0F0"
                  value="Follow This Board"
                  border="none"
                />
              </div>
            </div>
          </div>
          <div className="col">
            <img src="/beranda/img_beranda.svg" />
          </div>
        </div>
        <div
          className="mt-5 pt-5"
          style={{ width: "100%", height: "512px", background: "#F9F9F9" }}
        >
          <center>
            <div className="row container">
              <div className="col-12 text-left">
                <AtomText value="Forever bag" size="24px" weight="bold" />
              </div>
              {products.map((product, index) => {
                return (
                  <>
                    <div className="col-md-3">
                      <MoleculeProductList
                        image={product.image[0]}
                        name={product.name}
                        category={product.category}
                        price={product.price}
                        id={product.id}
                        index={index}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </center>
        </div>
      </center>
    </>
  );
}
