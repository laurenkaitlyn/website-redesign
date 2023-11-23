//TODO have this send to an email address
/*
  I'm using FormData which is natively supported in all current browsers. 
  It loads fields from the form, so they can be then submitted to the server. 
*/
async function handleSubmit(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  try {
    const response = await fetch("api/contact-us", {
      method: "post",
      body: new URLSearchParams(data),
    });
    if (!response.ok) {
      throw new Error(`Invalid response: ${response.status}`);
    }
    alert("Thanks for contacting us, we will get back to you soon!");
  } catch (err) {
    console.error(err);
    alert("We can't submit the form, try again later?");
  }
}

export default function ContactUsForm() {
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Get in touch</h1>
      <div className="email block">
        <label htmlFor="frm-email">Email</label>
        <input
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="name block">
        <div>
          <label htmlFor="frm-first">First Name</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Last Name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
          />
        </div>
      </div>
      <div className="email block">
        <label htmlFor="frm-company">Company</label>
        <input id="frm-company" type="text" name="company" required />
      </div>
      <div className="email block">
        <label htmlFor="frm-people">
          How many people are you looking to solve for?
        </label>
        <input id="frm-numberOfPeople" type="number" min='0' name="numberOfPeople" required />
      </div>
      <div className="message block">
        <label htmlFor="frm-message">Message</label>
        <textarea id="frm-message" rows="6" name="message"></textarea>
      </div>
      <div className="button block">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
