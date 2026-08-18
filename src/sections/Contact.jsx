import { useState } from "react";

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact - ${formData.name}`);

    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || "-"}\n\nMessage:\n${formData.message}`);

    window.location.href = `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-[#f8f7f4] px-6 py-20 text-zinc-900 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          {/* Left */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#8b6f47]">Contact</p>

            <h2 className="max-w-md text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              LET&apos;S WORK
              <br />
              TOGETHER.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-zinc-600">Interested in working together or have an opportunity in mind? Feel free to get in touch.</p>

            <div className="mt-9 space-y-4">
              {/* Email */}
              <a href="mailto:YOUR_EMAIL@example.com" className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-[#8b6f47]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white">
                  <MailIcon />
                </span>

                <span>YOUR_EMAIL@example.com</span>
              </a>

              {/* Phone */}
              <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-zinc-700 transition-colors hover:text-[#8b6f47]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white">
                  <PhoneIcon />
                </span>

                <span>+62 xxx-xxxx-xxxx</span>
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

            {/* Submit */}
            <button type="submit" className="mt-6 inline-flex items-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8b6f47]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
