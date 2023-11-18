import { client } from "./lib/client";

export async function getData(query, params) {
  try {
    return client.fetch(query, params);
  } catch(error) {
    console.error("Error fetching homepage data:", error);
    return {error: "Error occurred"};
  }
}
