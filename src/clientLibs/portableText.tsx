import sanityImageUrlBuilder from "@sanity/image-url";
import { client } from "~/sanity/lib/client";
import {
  SanityAsset,
  SanityImageSource,
} from "@sanity/image-url/lib/types/types";

const SanityImage = ({ value }: { value: SanityAsset }) => {
  if (!value.asset) {
    return null;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sanityImageUrlBuilder(client)
        .image(value)
        .width(1000)
        .auto("format")
        .quality(100)
        .url()}
      alt={value.alt || " "}
      loading="lazy"
    />
  );
};

export const portableTextComponents = {
  types: {
    image: SanityImage,
  },
  block: {},
};
