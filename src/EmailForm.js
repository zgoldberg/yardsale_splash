import { useState } from 'react';
import $ from 'jquery';

function EmailForm(props) {

  const [emailData, setEmailData] = useState("");

  const handleRequestInvite = () => {
    $.ajax({
      // url: `http://localhost:5000/email?email=${emailData}`,
      url: `http://zgoldberg.pythonanywhere.com/email?email=${emailData}`,
      method: 'POST',
      crossDomain: true,
      dataType: 'json',
      data: JSON.stringify({
          email: emailData
      }),
      success: (res) => {
          console.log(res);
      }
    });
    console.log(emailData);
  }

  const class_prefix = props.mobile ? "mobile-" : "";

  return (
    <>
      <input type="text" placeholder="YOUR EMAIL" className={class_prefix + "email-input"}
              value={emailData}
              onChange={(e) => setEmailData(e.target.value)} />
      <button className={class_prefix +"email-input"}
              onClick={handleRequestInvite}>
        REQUEST INVITE
      </button>
    </>
  );
}

export default EmailForm;
