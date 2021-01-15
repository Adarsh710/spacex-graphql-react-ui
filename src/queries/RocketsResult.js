import React from 'react'
import { useQuery, gql } from "@apollo/client";
import RocketLoader from "../loaders/RocketLoader";
import RocketCard from '../components/RocketCard/RocketCard'

const RocketsResultQuery = gql`
{
  rocketsResult {
    result {
      totalCount
    }
    data {
      active
      company
      cost_per_launch
      description
      id
      height {
        meters
      }
      landing_legs {
        material
        number
      }
      mass {
        kg
      }
      name
      success_rate_pct
      type
      engines {
        number
        type
        layout
        version
      }
      first_flight
      stages
      diameter {
        meters
      }
      boosters
    }
  }
}
`

export default function RocketsResult(props) {
  const { loading, error, data } = useQuery(RocketsResultQuery);
  const { value, index } = props;

  if (loading) return <RocketLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {value === index && (<RocketCard rockets={data.rocketsResult} />)}
    </>
  );
}