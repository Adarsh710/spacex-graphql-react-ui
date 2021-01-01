import React, { useState } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Grid, Chip } from '@material-ui/core';
import SimpleDialog from '../Dialog/Dialog'
import './LaunchCard.css'

export default function LaunchCard(props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [lData, setLData] = useState({})
  const openDialog = (launchData) => {
    setLData(launchData);
    setDialogOpen(true);
  }

  const handleCLose = () => {
    setDialogOpen(false);
    setLData({});
  }

  return (
    <>
    <Grid
      className="grid-container"
      container
      direction="row"
      alignItems="center"
      spacing={3}>
      {
        props.launches.map((launch) => (
          <Grid item sm={12} md={6} lg={4} xl={3} key={launch.id}>
            <Card className='card' onClick={() => openDialog(launch)}>
              <CardActionArea className="card-CTA">
                <CardMedia
                  component="img"
                  alt={launch.mission_name}
                  className={`card-image ${launch.links.mission_patch_small ? '' : 'strech'}`}
                  image={launch.links.mission_patch_small ? launch.links.mission_patch_small : 'https://hdwallsource.com/img/2017/3/spacex-logo-wallpaper-59810-61599-hd-wallpapers.jpg'}
                  title={launch.mission_name}
                />
                <CardContent>
                  <Grid item xs={12} container spacing={1}>
                    <Grid item xs={9}>
                      <Typography variant="h6" className="text-ellipsis" component="h3">
                        {launch.mission_name}
                      </Typography>
                      <Typography gutterBottom className="text-ellipsis" component="h3">{launch.rocket.rocket_name} Rocket</Typography>
                      <Typography gutterBottom className="line-clamp details" component="h6">{launch.details ? launch.details : '-- No description available --'}</Typography>
                    </Grid>
                    <Grid item xs={3} className="status-chip-container">
                      <Chip className={`status-chip ${launch.launch_success ? 'success' : launch.upcoming ? 'upcoming' : 'fail'}`} variant="outlined" label={launch.launch_success ? 'success' : launch.upcoming ? 'upcoming' : 'failure'} />
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      }
    </Grid>
    <SimpleDialog open={dialogOpen} onClose={handleCLose} launchData={lData}></SimpleDialog>
    </>
  )
}
