import * as prismic from "@prismicio/client";
import { IncomingMessage } from "http"; 

export function getPrismicClient(req?: IncomingMessage) {
  
  if (!process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT || !process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN) {
    throw new Error("Prismic environment variables are not set. Não");
  }

  const client = prismic.createClient(process.env.NEXT_PUBLIC_PRISMIC_ENDPOINT, {
    accessToken: process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN,
  });

  if (req) {
    client.enableAutoPreviewsFromReq(req);
  }

  return client;
}