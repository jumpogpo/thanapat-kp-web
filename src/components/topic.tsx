export default function Topic({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-4 w-1 rounded-full bg-white/80" />
      <h2 className="text-lg font-bold tracking-tight">{title}</h2>
    </div>
  );
}
