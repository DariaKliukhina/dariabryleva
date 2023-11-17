import { createClient } from "next-sanity";
import { dataset, projectId } from './env'

export async function getData(query) {
  const client = createClient({
    projectId,
    dataset,
  })

  return client.fetch(query);
}