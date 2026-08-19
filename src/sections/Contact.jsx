import { useState } from "react";

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || "-",
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="bg-[#f8f7f4] px-6 py-20 text-zinc-900 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          {/* Left */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">Contact</p>

            <h2 className="text-4xl font-extrabold leading-[0.9] tracking-tight md:text-6xl">
              LET&apos;S WORK
              <br />
              TOGETHER.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-600">Interested in working together or have an opportunity in mind? Feel free to get in touch.</p>

            <div className="mt-9 space-y-3">
              {/* Email */}
              <a href="mailto:shafiradwinuraulia@gmail.com" className="group flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-[#8b6f47]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors group-hover:border-[#8b6f47]/30">
                  <MailIcon />
                </span>

                <span>shafiradwinuraulia@gmail.com</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/shafira-dwi-nuraulia-92aa95323/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-[#8b6f47]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors group-hover:border-[#8b6f47]/30">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46Z" />
                  </svg>
                </span>

                <span>LinkedIn</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/shafira-dwi" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-[#8b6f47]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white transition-colors group-hover:border-[#8b6f47]/30">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.14c.85 0 1.7.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                  </svg>
                </span>

                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium text-zinc-700">
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-zinc-200 bg-[#fafafa] px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#8b6f47] focus:ring-2 focus:ring-[#8b6f47]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium text-zinc-700">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-200 bg-[#fafafa] px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#8b6f47] focus:ring-2 focus:ring-[#8b6f47]/10"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="mt-5">
              <label htmlFor="phone" className="mb-2 block text-xs font-medium text-zinc-700">
                Phone / WhatsApp
                <span className="ml-2 text-zinc-400">(optional)</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+62 xxx-xxxx-xxxx"
                className="w-full rounded-xl border border-zinc-200 bg-[#fafafa] px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#8b6f47] focus:ring-2 focus:ring-[#8b6f47]/10"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-medium text-zinc-700">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a little about your opportunity or project..."
                className="w-full resize-none rounded-xl border border-zinc-200 bg-[#fafafa] px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-[#8b6f47] focus:ring-2 focus:ring-[#8b6f47]/10"
              />
            </div>

            {/* Status */}
            {status && <p className={`mt-4 text-sm ${status.startsWith("Message sent") ? "text-green-600" : "text-red-600"}`}>{status}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8b6f47] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
