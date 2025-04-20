import React, { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import "./main.css";
import Certificate from "./Certificate";
import { Button, TextField } from "@mui/material";
import cert1 from "./assets/cert1/certTemp.png";
import CerThumbnail from "./CerThumbnail";
import cert2 from "./assets/cert2/certTemp2.png";
import FileInput from "./FileInput";
import SettingsIcon from "@mui/icons-material/Settings";
import ImageInput from "./ImageInput";

function App() {
  const [attendees, setAttendees] = useState([
    {
      email: "vem.aiensi@gmail.com",
      name: "Marasigan, Vem Aiensi A.",
    },
  ]);

  //seminar details
  const [seminarTitle, setSeminarTitle] = useState("[Insert Title]");
  function updateSeminarTitle(e) {
    setSeminarTitle(e.target.value);
  }
  const [speaker, setSpeaker] = useState({
    name: "[Insert Speaker Name]",
    title: "[Insert Title]",
  });

  const [formId, setFormId] = useState("dwoadhoawihfoaw");
  const [sender, setSender] = useState("example@gmail.com");
  const [password, setPassword] = useState("password1234");
  const [seminarDate, setSeminarDate] = useState("00");
  const [signPath, setSignPath] = useState(null);

  const certRefs = useRef([]);
  certRefs.current = attendees.map(() => React.createRef());

  const [configDisplay, setConfigDisplay] = useState(false);
  function toggleConfigDisplay() {
    setConfigDisplay(!configDisplay);
  }
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
      const response = await fetch(
        `http://localhost:3000/form-response?formId=${formId}`
      );

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

  function htmlMessage(seminarTitle, date, speakerName, speakerTitle) {
    return `
<html>
  <body style="background-color:#f1f8fc; margin: 0; padding: 40px 20px 40px 20px;">
    <table
      cellpadding="0"
      cellspacing="0"
      align="center"
      style="color: white; width: 100%; font-size: 1rem"
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
                background-color: #2c2c7c;
                color: white;
                font-family: Inter, Helvetica, Arial, sans-serif;
                font-weight: 600;
                padding: 20px;
                border-radius: 10px 10px 0px 0px;
              "
            >
              <tbody>
                <tr>
                  <td style="font-family: serif;"><i>Thank you for Attending</i></td>
                </tr>
                <tr height="10"></tr>
                <tr>
                  <td
                    style="
                      text-align: center;
                      font-size: 34px;
                      font-family: serif;
                      font-weight: bold;
                      text-transform: uppercase;
                    "
                  >
                    ${seminarTitle}
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                      font-family: sans;
                      font-weight: bold;
                    "
                  >
                    <hr>
                    <p>Lessons, Trends, and Opportunities in the IT Industry</p>
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
                margin: 0 auto;
                max-width: 700px;
                background-color: rgb(255, 255, 255);
                color: #0e1429;
                padding: 30px;
                font-family: Inter, Helvetica, Arial, sans-serif;
              "
            >
              <tbody>
                <tr>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>Hello 👋</td>
                        </tr>
                        <tr height="20"></tr>
                        <tr>
                          <td>
                            <p>Thank you so much for attending our seminar entitled <br/>
                            "Lessons, Trends, and
                            Opportunities in the IT Industry" with the topic: <br/>
                            
                            <b>${seminarTitle}</b>

                            <br/>
                            on <b>March ${date}, 2025</b>
                            
                            <br/>
                            <br/>
                            We truly appreciate your effort for taking the time to join us and we
                            hope you found the session informative and valuable.
                            </p>
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
                    <table style="width: 100%; text-align: center; margin-bottom: 10px">
                      <tbody>
                        <tr>
                          <td style="text-align: center">
                            <b>${speakerName}</b>
                          </td>
                        </tr>
                        <tr>
                          <td style="text-align: center">
                            <i
                              >Seminar Speaker | ${speakerTitle}</i
                            >
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
              style="
                width: 100%;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
                margin-bottom: 10px;
                background-color: #2c2c7c;
                color: white;
                font-family: Inter, Helvetica, Arial, sans-serif;
                font-weight: 300;
                padding: 20px;
                margin: 0 auto;
                border-radius: 0px 0px 10px 10px;
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
  async function sendEmail(email, cert) {
    const data = {
      sender: sender,
      to: email,
      subject: `SEMINAR | ${seminarTitle}`,
      html: htmlMessage(seminarTitle, seminarDate, speaker.name, speaker.title),
      password: password,
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
        await sendEmail(attendee.email, certIndex);
      })
    );
    toggleSendBtn();
    document.querySelector("#sendBtn").removeAttribute("disabled");
    toggleSendDisplay();
  }

  const [theme, setTheme] = useState(3);
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
          return (
            <Certificate
              ref={certRefs.current[index]}
              key={index}
              name={entry.name}
              theme={theme}
              speaker={speaker}
              title={seminarTitle}
              date={seminarDate}
              signPath={signPath}
            />
          );
        })}
      </div>

      <div className="controls">
        <div className="title">ATTENDEE LIST</div>
        <div className="attendee-container">
          <div className="attendee-list">
            {attendees.map((entry, index) => {
              // let fullName = entry["First Name"] + " ";
              // if (entry["Middle Initial"]) {
              //   fullName += entry["Middle Initial"] + ". ";
              // }
              // fullName += entry["Last Name"];

              return (
                <div key={index} className="attendee">
                  <div className="dot"></div>
                  <div className="text">
                    <h3>{entry.name}</h3>
                    <p>{entry.email}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="input-group">
          <Button
            variant="contained"
            color="white"
            onClick={toggleConfigDisplay}
          >
            <SettingsIcon></SettingsIcon>
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={fetchAttendees}
            className="get-btn"
          >
            Get Attendees
          </Button>
        </div>

        {/* <div>
          <div className="title">Theme Selection</div>
          <div className="theme-selection">{renderThemeOptions()}</div>
        </div> */}

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
        <div className="modal-display">
          <div className="send-modal-container">
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
                id="sendBtn"
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

      {configDisplay && (
        <div className="modal-display">
          <div className="config-modal-container">
            <div className="configTitle">CONFIGURATION</div>
            <div className="input-fields">
              Seminar Details
              <div className="input-group">
                <TextField
                  fullWidth
                  label="Seminar Title"
                  onChange={updateSeminarTitle}
                  value={seminarTitle}
                  variant="standard"
                />
                <TextField
                  type="number"
                  label="Seminar Date"
                  onChange={(e) => {
                    setSeminarDate(e.target.value);
                  }}
                  value={seminarDate}
                  variant="standard"
                />
              </div>
              <div className="input-group">
                <TextField
                  label="Speaker"
                  fullWidth
                  onChange={(e) => {
                    setSpeaker({ ...speaker, name: e.target.value });
                  }}
                  value={speaker.name}
                  variant="standard"
                />
                <TextField
                  fullWidth
                  label="Speaker Title"
                  onChange={(e) => {
                    setSpeaker({ ...speaker, title: e.target.value });
                  }}
                  value={speaker.title}
                  variant="standard"
                />
              </div>
              <div className="input-group">
                <TextField
                  fullWidth
                  type="password"
                  label="Form ID"
                  onChange={(e) => {
                    setFormId(e.target.value);
                  }}
                  value={formId}
                  variant="standard"
                />
                <ImageInput setSignPath={setSignPath}></ImageInput>
              </div>
              <br />
              <br />
              Email Credentials
              <TextField
                fullWidth
                label="Sender Email"
                onChange={(e) => {
                  setSender(e.target.value);
                }}
                value={sender}
                variant="standard"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                variant="standard"
              />
            </div>
            <FileInput
              setTitle={setSeminarTitle}
              setDate={setSeminarDate}
              setSpeaker={setSpeaker}
              setFormId={setFormId}
              setEmail={setSender}
              setPassword={setPassword}
            ></FileInput>
            <div className="action-buttons">
              <Button color="primary" onClick={toggleConfigDisplay}>
                CLOSE
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
