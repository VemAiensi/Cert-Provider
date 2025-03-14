import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./main.css";
import Certificate from "./Certificate";
import { Button } from "@mui/material";
import cert1 from "./assets/cert1/certTemp.png";
import CerThumbnail from "./CerThumbnail";
import cert2 from "./assets/cert2/certTemp2.png";

function App() {
  const [attendees, setAttendees] = useState([
    {
      Email: "vem.aiensi@gmail.com",
      "First Name": "Vem Aiensi",
      "Middle Initial": "A",
      "Last Name": "Marasigan",
      Program: "BS Computer Science",
      "Year Level": "4rth Year",
    },
  ]);
  const certRefs = useRef([]);
  certRefs.current = attendees.map(() => React.createRef());

  const [confirmSendDisplay, setConfirmSend] = useState(false);
  function toggleSendDisplay() {
    setConfirmSend(!confirmSendDisplay);
  }

  const [sendBtn, setSendBtn] = useState(false);
  function toggleSendBtn() {
    setSendBtn(!sendBtn);
  }

  async function fetchAttendees() {
    try {
      const response = await fetch("http://localhost:3000/form-response");

      if (!response.ok) throw new Error("Failed to fetch attendees");
      const data = await response.json();
      console.log(data);
      setAttendees(data);
      certRefs.current = data.map(() => React.createRef());
    } catch (error) {
      console.error("Error fetching attendees:", error);
    }
  }

  async function generateCertImage(index) {
    if (certRefs.current[index]) {
      const canvas = await html2canvas(certRefs.current[index].current, {
        scale: 2,
      });

      return new Promise((resolve) => {
        canvas.toBlob(resolve, "image/png", 1);
      });
    }
  }

  function htmlMessage(name) {
    return `
<html>
  <head> </head>
  <body style="background-color:rgb(220, 221, 238); margin: 0; padding: 40px 20px 40px 20px;">
    <table
      cellpadding="0"
      cellspacing="0"
      align="center"
      style="color: white; width: 100%; font-size: 1rem;"
    >
      <tbody>
        <tr>
          <td>
            <table
              style="
                width: 100%;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
                background-color: rgb(0, 11, 71);
                color: white;
                font-family: Inter, Helvetica, Arial, sans-serif;
                font-weight: 600;
                padding: 20px;
                border-radius: 10px 10px 0px 0px;
              "
            >
              <tbody>
                <tr>
                  <td style="font-family: serif;"><i>Thank you for attending</i></td>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <td
                    style="
                      line-height: 48px;
                      text-align: center;
                      font-size: 42px;
                      font-family: serif;
                      font-weight: bold;
                    "
                  >
                    DATA DRIVEN FACILITIES
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      line-height: 30px;
                      text-align: center;
                      font-size: 32px;
                      font-family: serif;
                      font-weight: bold;
                      letter-spacing: -0.022em;
                    "
                  >
                    THE FUTURE OF SMART SPACES
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>

        <tr>
          <td >
            <table
              style="
                margin: 0 auto;
                max-width: 700px;
                background-color: rgb(255, 255, 255);
                color: #0e1429;
                padding: 30px;
                font-family: Inter, Helvetica, Arial, sans-serif;
                border-radius: 0px 0px 10px 10px;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>Hi <b>${name}</b>,</td>
                        </tr>
                        <tr height="20"></tr>
                        <tr>
                          <td>
                            Thank you so much for attending our
                            <b
                              >Data Driven Facilities: The Future of Smart
                              Spaces</b
                            >
                            seminar on <b>17th of March 2025</b>! We truly
                            appreciate you taking the time to join us and we
                            hope you found the session informative and valuable.
                          </td>
                        </tr>
                        <tr height="20"></tr>
                        <tr>
                          <td>
                            As a token of our appreciation, check out your
                            certificate of attendance attached to this email.
                          </td>
                        </tr>
                        <tr height="20"></tr>
                      </tbody>
                    </table>
                  </td>

                </tr>
                <tr>
                  <td>
                    <table style="max-width: 500px; margin: 0 auto;">
                      <tbody>
                        <tr>
                          <td align="center">
                            <img
                              src="http://drive.google.com/uc?export=view&id=10F85AfaewfhX0eNB0H1SUT7XKiY33IR5"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: center">
                            <b>Paul Eraño V. Ladrillo</b>
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: center">
                            <i>
                              Seminar Speaker <br/> 
                              Data Specialist at  JLL Digital Operations Service Center
                            </i>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              align="center"
              style="
                margin: 0 auto;
                font-size: small;
                text-align: center;
                color: #51545c;
                text-decoration: none;
                padding: 30px;
                font-family: Inter, Helvetica, Arial, sans-serif;
              "
            >
              <tbody>
                <tr>
                  <td><b>CONTRIBUTORS:</b></td>
                </tr>
                <tr>
                  <td>marcoangelo.dedios@neu.edu.ph vemaiensi.marasigan@neu.edu.ph clark.belen@neu.edu.ph</td>
                </tr>
                <tr>
                  <td>
                     ma.yalaine.merino@neu.edu.ph marianne.edic@neu.edu.ph
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table
              style="
                width: 100%;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
                margin-bottom: 10px;
                background-color: rgb(0, 11, 71);
                color: white;
                font-family: Inter, Helvetica, Arial, sans-serif;
                font-weight: 300;
                padding: 20px;
                margin: 0 auto;
                border-radius: 10px;
              "
            >
              <tbody>
                <tr>
                  <td
                  
                    style="
                      font-family: serif;
                      font-weight: 600;
                      font-size: 1.2rem;
                    "
                  >
                    <img
                      src="http://drive.google.com/uc?export=view&id=1p5BT1zz8uSY168xlNDEyV6MWcjV53OeB"
                      alt=""
                      width="30"
                      height="30"
                    />
                    <i>New Era University</i>
                    <img
                      src="http://drive.google.com/uc?export=view&id=12v9f7hHm9Gni9LTh8CyAOHn1ZaO831JG"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </td>
                </tr>
                <tr>
                  <td>College of Informatics and Computing Studies</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
</html>
`;
  }

  //Submitting the post request
  async function sendEmail(name, email, cert) {
    const data = {
      to: email,
      subject: "SEMINAR | Data Driven Facilities: The Future of Smart Spaces",
      html: htmlMessage(name),
    };
    const formData = new FormData();

    // Append data to the form
    for (const key in data) {
      formData.append(key, data[key]);
    }

    try {
      const imageBlob = await generateCertImage(cert);
      // Append the image to FormData
      formData.append("image", imageBlob, "cert.png"); // Append the blob with the filename

      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.text();
        console.log(`Message to ${email}`, responseData);
        return responseData;
      } else {
        console.error("Failed to send data:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("And error occured in sending data:", error);
      return null;
    }
  }

  async function sendEmails() {
    toggleSendBtn();
    await Promise.all(
      attendees.map(async (attendee, certIndex) => {
        await sendEmail(attendee["First Name"], attendee.Email, certIndex);
      })
    );
    toggleSendDisplay();
  }

  const [theme, setTheme] = useState(1);
  function renderThemeOptions() {
    switch (theme) {
      case 1:
        return (
          <>
            <CerThumbnail
              certNum={1}
              imgSrc={cert1}
              active={true}
              clickFnc={setTheme}
            ></CerThumbnail>
            <CerThumbnail
              certNum={2}
              imgSrc={cert2}
              active={false}
              clickFnc={setTheme}
            ></CerThumbnail>
            <CerThumbnail
              certNum={3}
              imgSrc={cert1}
              active={false}
              clickFnc={setTheme}
            ></CerThumbnail>
          </>
        );
      case 2:
        return (
          <>
            <CerThumbnail
              certNum={1}
              imgSrc={cert1}
              active={false}
              clickFnc={setTheme}
            ></CerThumbnail>
            <CerThumbnail
              certNum={2}
              imgSrc={cert2}
              active={true}
              clickFnc={setTheme}
            ></CerThumbnail>
            <CerThumbnail
              certNum={3}
              imgSrc={cert1}
              active={false}
              clickFnc={setTheme}
            ></CerThumbnail>
          </>
        );
      case 3:
        return (
          <>
            <CerThumbnail
              certNum={1}
              imgSrc={cert1}
              active={false}
              clickFnc={setTheme}
            ></CerThumbnail>
            <CerThumbnail
              certNum={2}
              imgSrc={cert2}
              active={false}
              clickFnc={setTheme}
            ></CerThumbnail>
            <CerThumbnail
              certNum={3}
              imgSrc={cert1}
              active={true}
              clickFnc={setTheme}
            ></CerThumbnail>
          </>
        );
    }
  }

  return (
    <div className="workstation">
      <div className="workspace">
        {attendees.map((entry, index) => {
          let fullName = entry["First Name"] + " ";
          if (entry["Middle Initial"]) {
            fullName += entry["Middle Initial"] + ". ";
          }
          fullName += entry["Last Name"];

          return (
            <Certificate
              ref={certRefs.current[index]}
              key={index}
              name={fullName}
              theme={theme}
            />
          );
        })}
      </div>

      <div className="controls">
        <div className="attendee-container">
          <div className="title">ATTENDEE LIST</div>
          <div className="attendee-list">
            {attendees.map((entry, index) => {
              let fullName = entry["First Name"] + " ";
              if (entry["Middle Initial"]) {
                fullName += entry["Middle Initial"] + ". ";
              }
              fullName += entry["Last Name"];

              return (
                <div key={index} className="attendee">
                  <div className="dot"></div>
                  <div className="text">
                    <h3>{fullName}</h3>
                    <p>{entry.Email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={fetchAttendees}
          className="get-btn"
        >
          Get Attendees
        </Button>
        <div>
          <div className="title">Theme Selection</div>
          <div className="theme-selection">{renderThemeOptions()}</div>
        </div>

        <Button
          variant="contained"
          color="success"
          onClick={toggleSendDisplay}
          className="send-btn"
        >
          Send Email
        </Button>
      </div>
      {confirmSendDisplay && (
        <div className="confirm-send-modal">
          <div className="modal-container">
            <div className="description">
              <p>This action will send</p>
              <div className="attendee-number">
                <p>{attendees.length}</p>
              </div>
              <p>emails.</p>
            </div>

            <div className="action-buttons">
              <Button color="primary" onClick={toggleSendDisplay}>
                Cancel
              </Button>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  sendEmails();
                }}
                disabled={sendBtn}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
