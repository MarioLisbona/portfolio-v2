import { createClient, type ClientConfig } from "@sanity/client";
const sanityProjectrId = process.env.SANITY_PROJECTID;

const config: ClientConfig = {
  projectId: sanityProjectrId,
  dataset: "production",
  apiVersion: "2023-07-16",
  useCdn: false,
};

const client = createClient(config);

export default client;
