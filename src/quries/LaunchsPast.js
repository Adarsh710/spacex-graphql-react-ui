import React from 'react'
import { useQuery, gql } from "@apollo/client";
import LaunchCard from '../components/LaunchCard/LaunchCard';

const LaunchsPastQuery = gql`
{
  launchesPast(limit: 5) {
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
  }
}`

export default function RenderLaunchPast() {
  const { loading, error, data } = useQuery(LaunchsPastQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <LaunchCard launches={data.launchesPast}></LaunchCard>
    </>
  );
}