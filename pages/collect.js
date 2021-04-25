import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculeCollect from "../components/molecules/collect";
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

              <div className = "templatebag">
                <img src="/collect/bag.svg" />
              </div>
                <div className="row container" style={{width:"90%"}}>
                  <div class="col"><MoleculeCollect
                  image="/collect/bag1.svg"
                  
                  />
                  </div>

                  <div class="col"><MoleculeCollect
                  image="/collect/bag2.svg"
                  
                  />
                  </div>

                  <div class="col"><MoleculeCollect
                  image="/collect/bag3.svg"
                  />
                  </div>
                </div>

            </div>

        <div className="col text-left">
            <AtomText value="Hamlin Cellyn Tas Ransel Wanita Japan Style Big Compartment" size="30px" weight="bold" />
            <AtomText value="Stock : 50"></AtomText>
            <AtomText value="$50.00" size="20px" weight="bold"></AtomText>
            <AtomText
              value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
              size="14px"
            />
            
            <AtomButton
                  background="#0086CF"
                  value="Add to Cart"
                  border="none"    
                  padding="10px 20px"
                  radius="10px"
                  color="#FFFFFF"
                  width="bold"
                  marginTop="90px"

                  
                />
            
            
        </div>          
        </div>
      </center>
    </>
  );
}