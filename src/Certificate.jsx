import React, { forwardRef } from "react";
import neulogo from "./assets/NEU_Logo.png";
import cicslogo from "./assets/CICS.png";
import "./cert.css";

const Certificate = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="cert">
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
            <img src={cicslogo} alt="" />
          </div>

          <div className="content">
            <h2>CERTIFICATE OF ATTENDANCE</h2>

            <span className="participant"> {props.name} </span>

            <p>
              is given this certificate for attending the <br />{" "}
              <strong>
                Data Driven Facilities Management: The Future of Smart Spaces
              </strong>{" "}
              <br />
              seminar hosted by the College of Informatics and Computing Studies
              held on <br />{" "}
              <strong>17th of March 2025 at New Era University.</strong>
            </p>
          </div>

          <div className="signatories">
            <div>
              <h3>Paul Eraño V. Ladrillo</h3>
              <p>
                Speaker, Data Specialist at JLL Digital Operations Service
                Center
              </p>
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
});
export default Certificate;
