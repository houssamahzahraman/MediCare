type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const alignment = centered ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="mb-1 text-xs font-medium tracking-wider text-primary-700 uppercase">
        {eyebrow}
      </p>
      <h2 className="mb-2 text-3xl font-semibold tracking-tight text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
