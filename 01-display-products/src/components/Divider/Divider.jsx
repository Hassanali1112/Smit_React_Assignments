// import { Button } from "react-bootstrap";

const Divider = () => {

  return (
    <>
      <div className="container px-2">
        <div
          className="parent px-3 py-2 pt-4 d-flex justify-content-between"
          style={{ background: "#FFFFFF", borderBottom: "1px solid #cfcfcf" }}
        >
          <div className="left d-flex gap-5">
            <span className="text-success">On Sale Now</span>
            <span>End in</span>
          </div>
          <div className="right">
            <span className="text-success p-2 border border-success">
              SHOP MORE
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Divider;