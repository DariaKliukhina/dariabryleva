import { client } from "./lib/client";

export async function getData(query: string, params: object) {
  try {
    return client.fetch(query, params);
  } catch(error) {
    console.error("Error fetching data:", error);
    return {error: "Error occurred"};
  }
}
