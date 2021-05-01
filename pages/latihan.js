import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function latihan() {
  const [data, setData] = useState();
  const [dataConfirm, setDataConfirm] = useState();

  const handleSubmit = () => {
    console.log(data,dataConfirm);
  }

  const handleChangeInput = e => {
    setData(e.target.value);
  }

  const handleChangeInputConfirm = e => {
    setDataConfirm(e.target.value);
  }


  return (<>
    <input type="text" onChange={handleChangeInput} />
    <input type="text" onChange={handleChangeInputConfirm} style={{border:data == dataConfirm ? "solid thin #eee" : "solid thin red"}} />
    <button onClick={handleSubmit}>Submit</button>
    <p style={{color:data == dataConfirm ? "black" : "red" }}>user : {data} dan password : {dataConfirm}</p>
    </>);
}