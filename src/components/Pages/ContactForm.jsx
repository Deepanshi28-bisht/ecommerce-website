import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [email, setEmail] = useState("");
  const [mailErr, setMailErr] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneErr, setPhoneErr] = useState("");
  const [message, setMessage] = useState("");
  const [msgErr, setMsgErr] = useState("");

  const validate = () => {
    let isvalid = true;

    //Name validation
    if (!fullName.trim()) {
      setNameErr("Please enter fullname");
      isvalid = false;
    } else {
      setNameErr("");
    }

    // email validatin

    if (!email.trim()) {
      setMailErr("Please enter mail");
      isvalid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMailErr("Invalid format, please enter correct email");
      isvalid = false;
    } else {
      setMailErr("");
    }

    // number validation
    if (!/^\d*$/.test(phone)) {
      setPhoneErr("Only numeric value allowed");
      isvalid = false;
    } else if (phone.length < 10) {
      setPhoneErr("Please enter valid phone number");
      isvalid = false;
    } else if (!phone.trim()) {
      setPhoneErr("Please enter phone number");
      isvalid = false;
    } else {
      setPhoneErr("");
    }

    // message validation

    if (!message.trim()) {
      setMsgErr("Please enter your message here");
      isvalid = false;
    } else {
      setMsgErr("");
    }
    return isvalid;  
  };
  
  function submitBtn(e) {
    e.preventDefault();
    if (validate()) {
      toast.success("Form submitted successfully.");
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  }
  return (
    <form className="row mt-5">
      <div className="col-12 col-sm-12 col-lg-12 col-md-12">
        <h2 className="mb-5 text-center font-bold">Contact Us Form</h2>
        <div className="input-container">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <span className="errTextMsg">{nameErr}</span>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-lg-6 col-md-6">
        <div className="input-container">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="errTextMsg">{mailErr}</span>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-lg-6 col-md-6">
        <div className="input-container">
          <label htmlFor="name">Number</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <span className="errTextMsg">{phoneErr}</span>
        </div>
      </div>
      <div>
        <div className="col-12 col-sm-12 col-lg-12 col-md-12">
          <div className="input-container">
            <label htmlFor="msg">Message</label>
            <textarea
              type="text"
              placeholder="Message"
              id="msg"
              name="msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="errTextMsg">{msgErr}</span>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button onClick={(e) => submitBtn(e)} className="btnSubmit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
