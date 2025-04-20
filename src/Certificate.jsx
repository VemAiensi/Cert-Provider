import React, { forwardRef } from "react";
import neulogo from "./assets/NEU_Logo.png";
import cicslogo from "./assets/CICS.png";
import QRCode from "./QRCode.jsx";
import "./cert.css";

const Certificate = forwardRef((props, ref) => {
  const { theme, name, speaker, title, date } = props;

  function renderCert() {
    switch (theme) {
      case 1:
        return (
          <div className="cert-1">
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

              <p>is presented to</p>
              <br />
              <br />
              <br />

              <span className="participant"> {name} </span>

              <div className="line"></div>

              <p>
                For participating in the Seminar Entitled<br></br>
                <strong>
                  “Lessons, Trends, and Opportunity in the IT Industry”
                </strong>{" "}
                with the topic<br></br>
                <strong>“{title}”</strong>
              </p>

              <br />

              <p>
                Given this <strong>{date}th day</strong> of{" "}
                <strong>March 2025</strong> at{" "}
                <strong>New Era University</strong>
              </p>
            </div>

            <div className="signatories">
              <div>
                <h3>{speaker.name}</h3>
                <p>{speaker.title}</p>
              </div>
              <div>
                <h3>Audrey Lyle D. Diego</h3>
                <p>Dean, College of Computing Studies Director</p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
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
                    Data Driven Facilities Management: The Future of Smart
                    Spaces
                  </strong>{" "}
                  <br />
                  seminar hosted by the College of Informatics and Computing
                  Studies held on <br />{" "}
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
        );
      case 3:
        return (
          <div className="cert-3">
            <div className="container">
              <div className="topSection">
                <div className="intro">
                  <h1>CERTIFICATE</h1>
                  <h3>OF ATTENDANCE</h3>
                </div>
                <div className="headers">
                  <div className="logos">
                    <img src={cicslogo} alt="" />
                    <img src={neulogo} alt="" />
                  </div>

                  <h3>New Era University</h3>
                  <p>College of Informatics and Computing Studies</p>
                </div>
              </div>

              <div className="content">
                <span>
                  <strong>THIS CERTIFICATE IS PRESENTED TO</strong>
                </span>

                <span className="participant"> {name} </span>

                <span>For participating in the seminar entitled</span>
                <span>
                  <strong>
                    Lessons, Trends, and Opportunity in the IT Industry
                  </strong>
                </span>
                <span>with the topic</span>
                <span>
                  <strong>{title}</strong>
                </span>
              </div>

              <div className="bottomSection">
                <div className="qrCode">
                  <QRCode
                    value={
                      "Guest Speaker:\n" + speaker.name + "\n" + speaker.title
                    }
                  />
                </div>

                <div className="signatory">
                  <h3>
                    <strong>Prof. Audrey Lyle D. Diego</strong>
                  </h3>
                  <p>
                    Dean, College of Informatics and
                    <br />
                    Computing Studies Director
                  </p>
                </div>

                <div className="seminarDetails">
                  <span>Seminar Date:</span>
                  <span>
                    <strong>{date} March 2025</strong>{" "}
                  </span>
                  <br />
                  <span>New Era University Hall</span>
                  <span>No. 9 Central Ave. New Era, Quezon City</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
  return (
    <div ref={ref} className="cert">
      {renderCert()}
    </div>
  );
});
export default Certificate;
