import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import './Dialog.css';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function SimpleDialog(props) {
  const { open, onClose, launchData } = props;
  const sanatizeYoutubeLink = (link) => {
    if (link) {
      return (
        link.slice(0, link.lastIndexOf('/')) +
        '/embed' +
        link.slice(link.lastIndexOf('/'))
      ).replace('youtu.be', 'youtube.com');
    }
    return null;
  };
  const videoLink = sanatizeYoutubeLink(launchData.links?.video_link);

  const handleClose = () => {
    onClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="md"
        TransitionComponent={Transition}
        keepMounted
        scroll="paper"
        onClose={handleClose}
        aria-labelledby="launch-title"
        aria-describedby="launch-description"
      >
        <DialogTitle id="launch-title">
          {launchData.mission_name}{' '}
          <span className="launch-sub-title">
            ({launchData.rocket?.rocket_name} rocket)
          </span>
          <IconButton
            aria-label="close"
            className="closeButton"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {videoLink && (
            <iframe
              src={videoLink}
              frameBorder="0"
              className="embed-link"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          )}
          <DialogContentText id="launch-description">
            {launchData.details
              ? launchData.details
              : '-- No description available --'}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  launchData: PropTypes.object.isRequired,
};

export default SimpleDialog;
