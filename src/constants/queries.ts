import { gql } from '@apollo/client';

export const ALL_ANTS = gql`
  query GetAllAnts {
    ants {
      name
      length
      color
      weight
    }
  }
`;
