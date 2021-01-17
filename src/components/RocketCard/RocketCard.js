import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Divider } from '@material-ui/core';
import './RocketCard.css'

function RocketCard(props) {
  return (
    <ul className="rocket-list">
      {
        props.rockets.data.map((rocket) => (
          <li key={`${rocket.id + '-' + Math.random()}`}>
            <div>
            <Typography variant="h5" className="text-ellipsis" component="h2" title={rocket.name}>
              {rocket.name}
            </Typography>
            <Typography variant="body2" align="justify">
              {rocket.description}
            </Typography>
            </div>
            <Divider  key={rocket.id} variant="fullWidth" />
          </li>
        ))
      }
    </ul>
  )
}

RocketCard.propTypes = {
  rockets: PropTypes.object.isRequired
}

export default RocketCard

