import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeProductList from "../components/molecules/product_list";
import OrganismNav from "../components/organisms/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function test() {
  return (
    <>
      <OrganismNav />

      <center>
        <div className="row container mt-5">

        <div className="col">
            <img src="/beranda/img_beranda.svg" />
          </div>

          <div className="col text-left">
            <AtomText value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment" size="36px" weight="bold" />
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />

            <div className="row mt-5">

            </div>
          </div>

          
        </div>

        <div
          className="mt-5 pt-5"
          style={{ width: "100%", height: "512px", background: "#F9F9F9" }}
        >
          
        </div>
      </center>
    </>
  );
}