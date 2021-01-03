import './App.css';
import { useState } from 'react';
import LaunchesPastResult from './quries/LaunchesPastResult';
import LaunchesUpcomingResult from './quries/UpcomingLaunches';
import HeroSection from './components/HeroSection/HeroSection';
import { Paper, Tabs, Tab, Typography, Box } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function App() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <div className="App">
      <HeroSection />
      <Paper className="tabs-container">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className="tabs-wrapper"
        >
          <Tab label="Past Launches" {...a11yProps(0)} />
          <Tab label="Upcoming Launches" {...a11yProps(1)} />
          <Tab label="Rockets" {...a11yProps(2)} />
        </Tabs>
      </Paper>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
        className="swipeable-content"
      >
        <LaunchesPastResult value={value} index={0} dir={theme.direction} />
        <LaunchesUpcomingResult value={value} index={1} dir={theme.direction} />
        <TabPanel value={value} index={2} dir={theme.direction}>
          Comming soon
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    'id': `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    'className': `full-width-tab`
  };
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default App;
