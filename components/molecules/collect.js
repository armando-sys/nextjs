import AtomText from "../atoms/text";

export default function templateCollect({ image }) {
  return (
    <>
    <center>
      <div className="p-4 templateCollect">
        <img className="mb-4" src={image} />
      </div>
      </center>
    </>
  );
}