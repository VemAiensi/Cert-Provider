<p align="center">
    <img src="./public/medal.svg" width="80px">
</p>

<h2 align="center">Certificate Provider</h2>

<p align="center"><em>An automated certificate generator used for our Onsite Seminar</em></p>

### 📌 Highlights

- Send emails to all attendees in one click of a button

### 🧩 Dependencies

- Email
  > For Gmail: Email with 2F Verification Enabled
- Environment Variables
  > This contains your email and password generated by google; [refer to this](https://www.youtube.com/watch?v=cqdAS49RthQ)

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
