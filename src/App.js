import './App.css';
import { useState } from 'react';
import LaunchesPastResult from './queries/LaunchesPastResult';
import LaunchesUpcomingResult from './queries/UpcomingLaunches';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import RocketsResult from './queries/RocketsResult'
import SwipeableViews from 'react-swipeable-views';
import { Paper, Tabs, Tab } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

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
    <>
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
          <RocketsResult value={value} index={2} dir={theme.direction} />
        </SwipeableViews>
      </div>
      <Footer />
    </>
  );
}

function a11yProps(index) {
  return {
    'id': `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
    'className': `full-width-tab`
  };
}

export default App;
