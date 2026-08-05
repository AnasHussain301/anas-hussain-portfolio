interface Props {
  url?: string;
}

export default function ProjectVideo({ url }: Props) {
  if (!url) {
    return <div className="rounded-3xl border border-dashed border-white/20 p-20 text-center">Video Coming Soon</div>;
  }

  return (
    <div className="overflow-hidden rounded-3xl">
      <video src={url} controls preload="metadata" className="w-full" />
    </div>
  );
}