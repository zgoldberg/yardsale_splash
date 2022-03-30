import { useState } from 'react';
import $ from 'jquery';

function EmailForm(props) {

  const [emailData, setEmailData] = useState("");
  const [messageCode, setMessageCode] = useState(0);

  const handleRequestInvite = () => {
    if (emailData) {      
      $.ajax({
        // url: `http://localhost:5000/email?email=${emailData}`,
        url: `https://zgoldberg.pythonanywhere.com/email?email=${emailData}`,
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
    }
  }

  const class_prefix = props.mobile ? "mobile-" : "";

  const email_message = (messageCode == 1) ? (
    <p className={class_prefix + "email-message"}>email recorded</p>
  ) : (
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
