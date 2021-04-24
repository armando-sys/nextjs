import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import AtomInput from "../components/atoms/input";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

export default function signIn(){
    return(
        <>

        <center>
            <div className="templateSignin row container">
                

                <div className="col-md-6">
                    
                        <img className="templateImgSignin" src="/signin/signin.svg" />
                        <AtomText
                        value="Start your Journey With Us"
                        weight="bold"
                        size="30px"
                        marginTop="480px"
                        />

                        <AtomText
                        value="Build your own shop using peduli digital Marketplace"
                        size="12px"
                        color="#9D9D9D"
                        marginBottom="5px"
    
                        />

                        <AtomText
                        value="You can sell all your favorite item and get easy money"
                        size="12px"
                        color="#9D9D9D"
                        />
                  

                </div>

                <div className="col-md-6 text-left">

                    <AtomText 
                    value="Sign In"
                    size="24px"
                    weight="bold"
                    marginTop ="75px"
                    />

                    <AtomText
                    value="Username / Email"
                    size="12px"
                    marginTop ="30px"
                    color="#9D9D9D"
                    />

                    <AtomInput
                    type="text"
                    background="#FFFFFF"
                    border="1px solid #DDDDDD"
                    borderRadius= "5px" 
                    width="300px"
                    />

                    <AtomText
                    value="Password"
                    size="12px"
                    marginTop ="20px"
                    color="#9D9D9D"
                    />

                    <AtomInput
                    type="text"
                    background="#FFFFFF"
                    border="1px solid #DDDDDD"
                    borderRadius= "5px" 
                    width="300px"
                    />

                    <AtomText
                    value="Remember Me"
                    size="12px"
                    marginTop ="20px"
                    color="#9D9D9D"
                    />

                    <AtomButton
                    background="#0086CF"
                    value="Login"
                    border="none"    
                    radius="10px"
                    color="#FFFFFF"
                    weight="bold"
                    width="300px"
                    padding = "5px 5px"
                    />

                     <AtomText
                        value="Don't have account Sign Up"
                        size="12px"
                        marginTop ="20px"
                        color="#9D9D9D"
                    /> 

                                      

                </div>
            </div>
        </center>

        </>
    )
}