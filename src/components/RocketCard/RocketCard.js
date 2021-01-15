import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core';
import './RocketCard.css'

function RocketCard(props) {
  return (
    <>
      <Grid
        className="grid-container"
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={3}>
        {
          props.rockets.data.map((rocket) => (
            <Grid item sm={8} md={4} lg={3} xl={2} key={`${rocket.id + '-' + Math.random()}`} className="grid-item">
              <Card className='card'>
                <CardActionArea className="card-CTA">
                  <CardContent>
                    <Typography variant="h6" className="text-ellipsis" component="h3" title={rocket.name}>
                      {rocket.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

RocketCard.propTypes = {
  rockets: PropTypes.object.isRequired
}

export default RocketCard

