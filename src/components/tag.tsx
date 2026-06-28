export default function Tag({ title }: { title: string }) {
  return (
    <span className="inline-block w-fit rounded-md border border-theme bg-theme-primary px-2 py-0.5 text-xs text-theme-secondary">
      {title}
    </span>
  );
}
