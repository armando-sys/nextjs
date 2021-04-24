import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import AtomInput from "../components/atoms/input";
import AtomTextArea from "../components/atoms/textarea";
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

            <div className="row container mt-3">

                <div className="col-md-4 text-left">
                    <AtomText value = "Name"/>

                    <AtomInput
                    type="text"
                    background="#FFFFFF"
                    border="1px solid #DDDDDD"
                    borderRadius= "5px" 
                    width="300px"
                    
                    />
                </div>

                <div className="col-md-4 text-left">
                    <AtomText value = "Email"/>
                    <AtomInput
                    type="text"
                    background="#FFFFFF"
                    border="1px solid #DDDDDD"
                    borderRadius= "5px" 
                    width="300px"
                    />
                </div>
                </div>


            <div className="row container mt-3">
                <div className="col-md-4 text-left ">
                    <AtomText value = "Nomor Telpon">

                    </AtomText>
                    <AtomInput
                    type="text"
                    background="#FFFFFF"
                    border="1px solid #DDDDDD"
                    borderRadius= "5px"
                    width="300px"
                    />
                </div>
                <div className="col-md-4 text-left">
                    <AtomText value = "Keterangan"></AtomText>
                    <AtomInput
                    type="text"
                    background="#FFFFFF"
                    border="1px solid #DDDDDD"
                    borderRadius= "5px"
                    width="300px"
                    />
                </div>
            </div>

            <div className="row container mt-3">
                <div className="col text-left">
                    <AtomText value = "Alamat">

                    </AtomText>
                    <AtomTextArea
                    class="form-control"
                    width="670px"
                    borderRadius="5px"
                    border="1px solid #DDDDDD"
                    background="#FFFFFF"
                    
                    />

                </div>

            </div>

            <div className="row container mt-3">
                <div className="col text-left">

                </div>

            </div>


        </center>
        
        </>
    )
}