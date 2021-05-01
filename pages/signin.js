import "bootstrap/dist/css/bootstrap.min.css";
import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculesInputForm from "../components/molecules/input_form";
import {users} from "../components/variables/user";
import {router} from "next/router";
import Link from "next/link";
import { useState} from "react";

export default function signIn() 
    
    {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeUsername = e =>{
        setUsername(e.target.value);
        console.log(username);
    }

    const handleChangePassword = e =>{
        setPassword(e.target.value);
        console.log(password);
    }

    const handleLogin = () =>
    {
        let check = users.filter(user => (user.username == username && user.password == password
            ));
        if (check.length)
        {
            alert("Login Success");
            router.push("/billing");
        }else if (username.length == 0)
        {
            alert("Username Empty");
        }else
        {
            alert("Username password wrong");
        }
    };

  return (
    <>
      <center>
        <div className="templateLogin p-5">
          <div className="row">
            <div className="col-md-6 pl-4 pr-4">
              <img src="/beranda/login_image.svg" />
              <AtomText
                value="Start your New Journey With Us"
                size="24px"
                weight="bold"
                marginTop="20px"
              />
              <AtomText
                value="Build your own shop using peduli digital Marketplace You can sell all your favorite item and get easy money"
                size="16px"
                color="#9D9D9D"
              />
            </div>
            <div className="col-md-6 text-left pl-3 pr-3">
              <AtomText size="36px" weight="bold" value="Sign In" />
              <MoleculesInputForm
                onChange={handleChangeUsername}
                value="Username / Email"
                height="61px"
                customClass="mt-5"
              />
              <MoleculesInputForm
                onChange={handleChangePassword}
                value="Password"
                type="password"
                height="61px"
                customClass="mt-3"
              />
              <div className="row mt-2 mb-3">
                <div className="col-1">
                  <MoleculesInputForm height="20px" type="checkbox" />
                </div>
                <div className="col">
                <AtomText value="Remember Me" size="18px" color="#9D9D9D" marginTop="10px" />
                </div>
              </div>
              <AtomButton onClick={handleLogin} value="Login" color="#FFF" width="100%" background="#0086CF" height="52px" />
              <p className="mt-5">Don’t have account <span style={{color:"#0086CF"}}>Sign Up</span></p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
