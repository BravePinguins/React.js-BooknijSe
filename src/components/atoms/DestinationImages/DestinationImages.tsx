export function DestinationItem({
  image,
  alt,
}: {
  image: string;
  alt: string;
}) {
  return (
    <img
      className="h-28 border-[1px] border-zinc-400 rounded-lg"
      src={image}
      alt={alt}
    />
  );
}
