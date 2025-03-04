import React from "react";
import neulogo from "./assets/NEU_Logo.png";

function Certificate({ name }) {
  return (
    <div className="cert">
      <div className="border">
        <div className="container">
          <div className="logos">
            <img src={neulogo} alt="" />

            <div className="text">
              <h3>New Era University</h3>
              <p>
                College of Informatics <br /> and Computing Studies
              </p>
            </div>
            <img src={neulogo} alt="" />
          </div>

          <div className="content">
            <h2>CERTIFICATE OF ATTENDANCE</h2>
            <br />

            <p>is given to</p>

            <h2 className="participant"> {name} </h2>
            <p>for attending the</p>
            <h2 className="seminar-title">
              Data Driven Facilities Management: <br /> The Future of Smart
              Spaces
            </h2>
            <p>
              seminar hosted by the College of Informatics and Computing Studies
              held on
            </p>
            <p>17th of March 2025 at New Era University</p>
          </div>

          <div className="signatories">
            <div>
              <h3>Paul Eraño V. Ladrillo</h3>
              <p>Data Specialist at JLL</p>
            </div>
            <div>
              <h3>Audrey Lyle D. Diego</h3>
              <p>Dean, College of Computing Studies Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certificate;
