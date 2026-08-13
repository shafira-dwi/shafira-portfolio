import SectionTitle from "../components/SectionTitle";

function Contact() {
  return (
    <section id="contact">
      <SectionTitle title="Let's Connect" description="Feel free to reach out for opportunities, collaborations, or interesting projects." />

      <div>
        <a href="mailto:your-email@example.com">Email</a>

        <a href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/shafira-dwi-nuraulia-92aa95323/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
