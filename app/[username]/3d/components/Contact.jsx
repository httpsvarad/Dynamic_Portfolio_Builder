import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Loader } from "lucide-react";

const Contact = ({ currentUser }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (name, email, message) => {
    if (!currentUser || !currentUser.email) {
      toast.error("User email is missing");
      return;
    }

    const templateParams = {
      email: currentUser.email,
      client_email: email,
      name,
      message,
    };

    try {
      const response = await emailjs.send(
        "service_uq1auko",
        "template_kbvcnsn",
        templateParams,
        "w4HrRsBpz5caPc7nc"
      );

      console.log("SUCCESS!", response.status, response.text);
      toast.success("Thanks for reaching out");
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    sendEmail(form.name, form.email, form.message);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.5)}
        className="flex-[0.75] bg-[#100D25] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText} bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          Contact.
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-[#151030] text-white py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-gray-400"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-[#151030] text-white py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-gray-400"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-[#151030] text-white py-4 px-6 rounded-lg outline-none border-none font-medium placeholder:text-gray-400"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#4697C2] py-3 px-8 rounded-xl hover:bg-[#397da1] outline-none w-fit text-black font-bold shadow-md"
            disabled={loading}
          >
            {loading ? <Loader className="animate-spin" /> : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.5)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
