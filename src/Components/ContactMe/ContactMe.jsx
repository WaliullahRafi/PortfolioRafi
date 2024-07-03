import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmail = (event) => {
    event.preventDefault();

    const serviceId = "service_f9xoo7e";
    const templateId = "template_odzz416";
    const publicKey = "SVND3jofZCC6XCvHj";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Waliullah Rafi",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        // console.log("Email Sent Successfully", res);
        toast.success("Successfully Sent Email")
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        // console.error("Error Happened", err);
        toast.error("Error Happened")
      });
  };

  return (
    <div className="bg-[#161513]">
      <div className="max-w-5xl mx-auto py-8 px-3">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#FF8660] uppercase">
          Contact Me
        </h2>

        <div className="flex items-center justify-center mt-12 w-full">
          <form
            onSubmit={handleEmail}
            className="flex flex-col space-y-4 w-full lg:w-[40vw]"
          >
            <input
              className="bg-[#191919] px-5 py-3 rounded-md outline-none border-b-[1px] border-[#FF8660]"
              placeholder="Name :"
              type="text"
              name="fullName"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              className="bg-[#191919] px-5 py-3 rounded-md outline-none border-b-[1px] border-[#FF8660]"
              placeholder="Email :"
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <textarea
              className="bg-[#191919] px-5 py-3 rounded-md outline-none border-b-[1px] border-[#FF8660]"
              placeholder="Message"
              name="message"
              cols="20"
              rows="8"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>
            <input
              type="submit"
              value="Send"
              className="btn rounded-s-md bg-[#FF8660] text-zinc-900 hover:text-zinc-200 hover:border-[#FF8660]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
