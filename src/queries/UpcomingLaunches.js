import React from 'react'
import { useQuery, gql } from "@apollo/client";
import LaunchCard from '../components/LaunchCard/LaunchCard';
import RocketLoader from "../loaders/RocketLoader";

const LaunchesUpcomingQuery = gql`
{
  launchesUpcoming {
    mission_name
    launch_site {
      site_name_long
      site_name
    }
    links {
      article_link
      mission_patch
      mission_patch_small
      video_link
    }
    rocket {
      rocket_name
    }
    details
    launch_date_utc
    launch_success
    id
    upcoming
  }
}`

export default function LaunchesUpcomingResult(props) {
  const { loading, error, data } = useQuery(LaunchesUpcomingQuery);
  const { value, index } = props;

  if (loading) return <RocketLoader />;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {value === index && (<LaunchCard launches={data.launchesUpcoming}></LaunchCard>)}
    </>
  );
}