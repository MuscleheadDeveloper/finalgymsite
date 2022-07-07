const express = require("express");
const router = express.Router();
const https = require("https");
const path = require("path");

require("dotenv").config();
const mailchimp_key = process.env.API__KEY;
const mailchimp_id = process.env.LIST__ID;

router.post("/login", (req, res) => {
  const email = req.body.email;
  const lastname = req.body.lastName;
  const firstname = req.body.firstName;
  const phone = req.body.phone;

  const RegisterTemplate = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          LNAME: lastname,
          FNAME: firstname,
          PHONE: phone,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(RegisterTemplate);
  const url = `https://us13.api.mailchimp.com/3.0/lists/${mailchimp_id}`;
  const options = {
    method: "POST",
    auth: `okondolee: ${mailchimp_key}`,
  };

  const request = https.request(url, options, (response) => {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/Success.html");
    } else {
      console.log("oops bruh");
    }

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

module.exports = router;
