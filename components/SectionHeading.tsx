export default function SectionHeading({ title, description }: { title: string; description: React.ReactNode }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-text-light max-w-xl mx-auto">{description}</p>
    </div>
  );
}