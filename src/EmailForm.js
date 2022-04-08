import { useState } from 'react';
import $ from 'jquery';


function EmailForm(props) {

  const [emailData, setEmailData] = useState("");
  const [messageCode, setMessageCode] = useState(0);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleRequestInvite = () => {
    if (emailData && validateEmail(emailData)) {
      $.ajax({
        // url: `http://localhost:5000/email?email=${emailData}`,
        url: `https://zgtodaysyardsale.pythonanywhere.com/email?email=${emailData}`,
        method: 'POST',
        crossDomain: true,
        dataType: 'json',
        data: JSON.stringify({
          email: emailData
        }),
        success: (res) => {
          setMessageCode(1);
          setEmailData("");
        }
      });
    } else if (emailData) {
      setMessageCode(2);
    }
  }

  const class_prefix = props.mobile ? "mobile-" : "";
  const email_message_text = "Success :)"
  const invalid_email_message_text = "Invalid email :("
  const email_message = (messageCode == 1) ? (
    <p className={class_prefix + "email-message"}>{email_message_text}</p>
  ) : (
    (messageCode == 2) ? (
      <p className={class_prefix + "email-message"} style={{color: "red"}}>{invalid_email_message_text}</p>
    ) :
    <></>
  );

  return (
    <>
      <input type="text" placeholder="YOUR EMAIL" className={class_prefix + "email-input"}
              value={emailData}
              onChange={(e) => setEmailData(e.target.value)} />
      <button className={class_prefix +"email-input"}
              onClick={handleRequestInvite}>
        REQUEST INVITE
      </button>
      {email_message}
    </>
  );
}

export default EmailForm;
