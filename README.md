<p align="center">
    <img src="./public/medal.svg" width="80px">
</p>

<h2 align="center">Certificate Provider</h2>

<p align="center"><em>An automated certificate generator used for our onsite Seminar<br><strong>CICS Summit: Lessons Trends and Opportunity in the IT Industry</strong></em></p>

### 📌 Highlight

Create certificates based on a google forms attendance and send it with a formatted email message all on simple clicks.

**No more _mano-mano_!**

> [!NOTE]
> The environment varialable is not present in this source code, so if you want to test the project out, you need to ask for it from the dev of this web-app @VemAiensi

> [!TIP]
> Instead of manually typing details in the configuration box, you can create a json file that contains all your configuration and simply drag it to the dropdown file input. [Refer Here](#sample-configuration-file)

> [!IMPORTANT]
> When creating your google form attendance, be sure to:
>
> - Require email
> - create a single text-field for name: `Last Name, First Name MI.`
> - Ex. `Marasigan, Vem Aiensi A.`
>
> _It might not be the best practice but it was unfortunately done to adapt into the existing attendance form the college created._

> [!WARNING]
> Be sure to check your email service provider's limit for sending emails. For ex. Gmail has a 500 limit for free accounts. It's best to look it up first to avoid problems such as being marked as spam or account termination.

> [!CAUTION]
> Since this webapp uses your [2FA app password](https://www.youtube.com/watch?v=cqdAS49RthQ), you might need to be extra careful with your credentials as it may impose security risks.

### 🛠️ Installation

#### Frontend

- Clone repository and install dependencies

```sh
$ git clone https://github.com/VemAiensi/Cert-Provider.git
$ cd Cert-Provider
$ npm install
```

- Project runs in Vite development environment.

```sh
$ npm run dev
```

- Open localhost:5173 in the browser or with `o + enter` in terminal

#### Email Service

- Once everything above is set up, go the server directory

```sh
cd server
node email.js
```

> This will run the email backend in localhost:3000 so you might want to turn off any existing activities in said port first.

#### Sample Configuration file

```json
{
  "seminarTitle": "Your Title Here",
  "seminarDay": "17",
  "speaker": {
    "name": "Your Guest Speaker",
    "title": "Ex. they're job title"
  },
  "formId": "44characterstringformID",
  "sender": "youremail@address.here",
  "password": "your16characterapppassword"
}
```
