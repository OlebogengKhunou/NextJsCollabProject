import { useState, useEffect } from "react";

import classes from "./contact-form.module.css";

function Contact() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState(); //'pending' , 'success', 'error'
  const [requestError, setRequestError] = useState();
  const [myEmail, setMyEmail] = useState(false);
  const [mySocial, setMySocial] = useState(false);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    //optional: add client-side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredMessage('');
      setEnteredEmail('');
      setEnteredName('');
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  function emailToggleHandler(){
     setMyEmail(!myEmail)
  }

  function socialToggleHandler(){
    setMySocial(!mySocial)
 }

  return (
    <section className={classes.contact}>
      <h1>Contact</h1>
      <h4>Contact me if you think I might be a good fit for your project or company</h4>
      <h4>Copy my details below:</h4>

      <section className={classes.controls1}>
        <div onClick={emailToggleHandler}>
          <h3 className={classes.socialCSS}>Email</h3>
          {myEmail && <p>johndoe@gmail.com<br/>
                         johndoe@codespace.co.za</p>}
        </div>
        <div onClick={socialToggleHandler}>
          <h3 className={classes.socialCSS}>Social Media</h3>
          {mySocial && <p>https://www.linkedin.com/in/john-doe/<br/>
                          https://github.com/JohnDoe</p>}
        </div>
      </section>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            row="5"
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {/* {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )} */}
    </section>

  )
}

export default Contact