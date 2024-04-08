import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current!, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="email-background">
      <form ref={form} onSubmit={sendEmail} className="email">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactPage;
