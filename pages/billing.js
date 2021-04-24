import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import AtomInput from "../components/atoms/input";
import OrganismNav from "../components/organisms/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function billing (){
    return (
        <>
        <OrganismNav />

        <center>
            <div className="row container mt-5">
                <div className="col text-left">
                    <AtomText value="Billing Info"
                    weight="bold"                    
                    ></AtomText>
                    <AtomText value="Invoice : 13.04.2020.1"                    
                    ></AtomText>
                </div>   
            </div>
            <div className="row container mt-5">
                <div className="col text-left md-4">
                    <AtomText value = "Name">

                    </AtomText>
                    <AtomInput type="text" class="form-control" id="name" value="test">

                    </AtomInput>
                </div>
                <div className="col text-left md-4">
                    <AtomText value = "Email"></AtomText>
                    <AtomInput type="text" class="form-control" id="name" value="test">

                    </AtomInput>
                </div>
            </div>

            <div className="row container mt-5">
                <div className="col text-left md-4">
                    <AtomText value = "Nomor Telpon">

                    </AtomText>
                    <AtomInput type="text" class="form-control" id="name" value="test">

                    </AtomInput>
                </div>
                <div className="col text-left md-4">
                    <AtomText value = "Keterangan"></AtomText>
                    <AtomInput type="text" class="form-control" id="name" value="test">

                    </AtomInput>
                </div>
            </div>


        </center>
        
        </>
    )
}