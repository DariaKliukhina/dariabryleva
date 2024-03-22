import { createClient } from 'next-sanity'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { apiVersion, dataset, projectId, useCdn } from '../env'
import sanityImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export const sanityImageUrl = (image: SanityImageSource) =>
  sanityImageUrlBuilder(client).image(image).auto("format");
