

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="d-flex flex-column align-items-center justify-content-center mt-2"
      style={{
        minHeight: "100vh",
        backgroundColor: "#222B30",
        color: "#BDC3C7",
      }}
    >
      <div className="text-center ">
        <h2
          className="display-4"
          style={{
            color: "#BDC3C7",
            marginTop: "-20px",
            marginBottom: "150px",
          }}
        >
          Contact Me
        </h2>
      </div>
      <div className="container-contact">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="mb-2">
            
              <h3 className="mt-2">Email</h3>
              <p className="mail">
                <a
                  href="mailto:timalsinasudarshan29@gmail.com"
                  style={{ color: "#BDC3C7", textDecoration: "none" }}
                >
                timalsinana@gmail.com
                </a>
              </p>
            </div>
            <div>
             
              <h3 className="mt-4">Phone</h3>
              <p className="phone">
                <a
                  href="9804001321"
                  style={{ color: "#BDC3C7", textDecoration: "none" }}
                >
                9804001321
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactMe;





















