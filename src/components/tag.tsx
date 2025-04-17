export default function Tag({ title }: { title: string }) {
  return (
    <div className="w-fit text-sm bg-theme-primary rounded-lg px-2 py-1">
      {title}
    </div>
  );
}
