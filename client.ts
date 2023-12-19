import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

interface ImageData {
  asset: {
    _ref: string;
    url: string;
  };

}

export const client = createClient({
  projectId: "hvq7ed0k",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-12-18",
  //   token: "",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source:ImageData) => builder.image(source);
