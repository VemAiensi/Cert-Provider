import React from "react";
import "./main.css";
import Certificate from "./Certificate";

function App() {
  const names = [
    { name: "Marco Angelo De Dios", email: "marcoangelo.dedios@neu.edu.ph" },
    { name: "Vem Aiensi A. Marasigan", email: "vem.aiensi@gmail.com" },
    { name: "Clark Belen", email: "clark.belen@neu.edu.ph" },
    { name: "Ma. Yalaine Merino", email: "ma.yalaine.merino@neu.edu.ph" },
    { name: "Marianne Edic", email: "marianne.edic@neu.edu.ph" },
  ];

  async function sendEmail(name, email) {
    const data = {
      to: email,
      subject: "SEMINAR | Data Driven Facilities: The Future of Smart Spaces",
      html: `
<html>
  <head> </head>
  <body style="background-color:rgb(220, 221, 238); margin: 0; padding: 40px 0 40px 0;">
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
          <td>
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
                          <td>Dear <b>${name}</b></td>
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
                        <tr></tr>
                      </tbody>
                    </table>
                  </td>

                  <td>
                    <table style="margin-left: 20px; width: 200px">
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
                            <i
                              >Seminar Speaker | Data Specialist in JLL Database
                              Management</i
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
                  <td>vemaiensi.marasigan@neu.edu.ph clark.belen@neu.edu.ph</td>
                </tr>
                <tr>
                  <td>
                    marcoangelo.dedios@neu.edu.ph ma.yalaine.merino@neu.edu.ph
                  </td>
                </tr>
                <tr>
                  <td>marianne.edic@neu.edu.ph</td>
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
`,
    };
    const formData = new FormData();

    // Append data to the form
    for (const key in data) {
      formData.append(key, data[key]);
    }

    //logging email context
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }

    try {
      // Fetch the image
      const imageResponse = await fetch("/certificates/marcoangelodedios.png"); // Replace with the actual image path
      const imageBlob = await imageResponse.blob(); // Get the image as a Blob

      // Append the image to FormData
      formData.append("image", imageBlob, "cert.png"); // Append the blob with the filename

      //logging email context
      // for (const pair of formData.entries()) {
      //   console.log(`${pair[0]}: ${pair[1]}`);
      // }

      const response = await fetch("http://localhost:3000/send-email", {
        // Replace with your actual endpoint
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.text(); // or response.json() if your server sends JSON
        console.log("Data sent successfully:", responseData);
        return responseData;
      } else {
        console.error("Failed to send data:", response.statusText);
        return null;
      }
    } catch (error) {
      console.error("Error sending data:", error);
      return null;
    }
  }

  return (
    <div className="workstation">
      <div className="workspace">
        {names.map((entry) => (
          <Certificate key={entry.name} name={entry.name} />
        ))}
      </div>

      <div className="controls">
        <button
          onClick={() => {
            names.forEach((entry) => sendEmail(entry.name, entry.email));
          }}
          className="btn"
        >
          Send Email
        </button>
      </div>
    </div>
  );
}

export default App;
