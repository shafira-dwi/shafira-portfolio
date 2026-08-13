function SectionTitle({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;
