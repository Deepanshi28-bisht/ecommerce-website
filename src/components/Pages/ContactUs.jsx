import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-4 col-md-4">
          <div className="contactus-card mt-5">
            <img src="/assets/images/phone-call.png" />

            <div className="toll-free">Toll Free: 1800-121-6245</div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4 col-md-4">
          <div className="contactus-card mt-5">
            <img src="/assets/images/mail.png" height={65} />

            <div>enq@ecommerce.com</div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4 col-md-4">
          <div className="contactus-card mt-5">
            <img src="/assets/images/map.png" />
            <div>A-23/19, Site-IV, Sahidabad</div>
          </div>
        </div>
      </div>
     <ContactForm/>
    </div>
  );
};

export default ContactUs;
