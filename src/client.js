import { GraphQLClient } from "graphql-request"

const apiToken = "f0d2ed0861a84cd6fc403e2a573a84"
const endpoint = `https://graphql.datocms.com`
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "Bearer " + apiToken,
}

const client = new GraphQLClient(endpoint, { headers })
export default client
