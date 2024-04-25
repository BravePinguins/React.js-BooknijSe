export function DestinationItem({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <img
      className="h-28 rounded-lg border-[1px] border-zinc-400"
      src={image}
      alt={alt}
    />
  );
}
