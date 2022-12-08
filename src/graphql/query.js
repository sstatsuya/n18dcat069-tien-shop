import { gql } from "@apollo/client";

export const query = gql`
  query Query($name: String, $type: String, $variables: JSONObject) {
    request(name: $name, type: $type, variables: $variables) {
      data
    }
  }
`;

export const queryString = `query Query(
  $name: String
  $type: String
  $variables: JSONObject
) {
  request(name: $name, type: $type, variables: $variables) {
    data
  }
}`;
