import OrganismsNav from "../components/organisms/nav";
import MoleculesInputForm from "../components/molecules/input_form";
import AtomText from "../components/atoms/text";
import AtomButton from "../components/atoms/button";

export default function billing() {
  return (
    <>
      <OrganismsNav />
      <center>
        <div className="row container mt-5">
          <div className="col-8 text-left">
            <AtomText value="Billing Info" size="36px" weight="bold" />
            <AtomText
              value="Invoice : 13.04.2020.1"
              size="24px"
              color="#646464"
            />
            <div className="row">
              <div className="col-md-6 mt-3">
                <MoleculesInputForm value="Name" />
              </div>
              <div className="col-md-6 mt-3">
                <MoleculesInputForm value="Email" />
              </div>
              <div className="col-md-6 mt-3">
                <MoleculesInputForm value="Telpon" />
              </div>
              <div className="col-md-6 mt-3">
                <MoleculesInputForm value="Keterangan" />
              </div>
              <div className="col-md-12 mt-3">
                <MoleculesInputForm value="Email" type="email" />
              </div>
              <div className="col-md-12 mt-3">
                <MoleculesInputForm value="Alamat" type="textarea" />
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="templateCartList p-4 text-left">
              <AtomText value="Billing Info" size="24px" weight="bold" />
              <div style={{ height: "350px" }}>
                <AtomText value="Lorevial #A1294" size="16px" />
                <AtomText value="$50.00 x 1" size="14px" marginTop="-10px" />
                <AtomText value="Lorevial #A1294" size="16px" />
                <AtomText value="$50.00 x 1" size="14px" marginTop="-10px" />
                <AtomText value="Lorevial #A1294" size="16px" />
                <AtomText value="$50.00 x 1" size="14px" marginTop="-10px" />
              </div>
              <div className="row">
                <div className="col">
                  <AtomText value="Total Price :" />
                </div>
                <div className="col">
                  <AtomText value="$540.00" weight="bold" />
                </div>
              </div>
            </div>
            <AtomButton
              value="Pay"
              width="262px"
              customClass="mt-3 p-2"
              background="#0086CF"
              color="#fff"
            />
          </div>
        </div>
      </center>
    </>
  );
}
