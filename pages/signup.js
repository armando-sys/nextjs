import "bootstrap/dist/css/bootstrap.min.css";
import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";
import MoleculesInputForm from "../components/molecules/input_form";

export default function signIn() {
  return (
    <>
      <center>
        <div className="templateLogin p-5">
          <div className="row">
            <div className="col-md-6 pl-4 pr-4">
              <img src="/beranda/signup_image.svg" style={{width:"100%", marginTop:"40px"}}/>
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
              <AtomText size="36px" weight="bold" value="Sign Up" />
              <MoleculesInputForm
                value="Username / Email"
                height="61px"
                customClass="mt-2"
              />
              <MoleculesInputForm
                value="Password"
                type="password"
                height="61px"
                customClass="mt-3"
              />
              <MoleculesInputForm
                value="Confirm Password"
                type="password"
                height="61px"
                customClass="mt-3"
              />
              <AtomButton value="Login" color="#FFF" width="100%" background="#0086CF" height="52px" customClass="mt-4"/>
              <p className="mt-4">Already Have An Account <span style={{color:"#0086CF"}}>Sign In</span></p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
