const ImageThumbnail = ({ url, alt }: { url: string; alt: string }) => (
  <img
    className="rounded-md group-hover:rounded h-full w-full object-cover object-center"
    src={url}
    alt={alt}
  />
);

export default ImageThumbnail;
