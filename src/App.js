//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from 'react';
import './App.css';
import BottomRow from './BottomRow';

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(null);
  const [timer, setTimer] = useState('15:00');
  const tdHome = e => {
    setHomeScore(homeScore + 7);
  };
  const fgHome = e => {
    setHomeScore(homeScore + 3);
  };
  const tdAway = e => {
    setAwayScore(awayScore + 7);
  };
  const fgAway = e => {
    setAwayScore(awayScore + 3);
  };
  const increaseQt = e => {
    setQuarter(quarter < 4 ? quarter + 1 : quarter - 3);
  };
  const resetHomeScore = e => {
    setHomeScore(0);
  };
  const resetAwayScore = e => {
    setAwayScore(0);
  };
  const increaseDown = e => {
    if (down < 4) {
      setDown(down + 1);
    } else setDown(down - 3);
    if (down === 1) {
      setToGo(10);
    }
  };

  // const timer = e => {
  //   setTimer();
  // };

  const reset = () => {
    setHomeScore(0);
    setAwayScore(0);
    setQuarter(1);
    setDown(1);
    setToGo(10);
    setBallOn(null);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow
          quarter={quarter}
          down={down}
          togo={toGo}
          ballon={ballOn}
          resetHome={resetHomeScore}
          resetAway={resetAwayScore}
          resetAll={reset}
        />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={tdHome}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={fgHome}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={tdAway}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={fgAway}>
            Away Field Goal
          </button>
        </div>
      </section>
      <section className="buttons">
        <div className="stretchButtons">
          <ValueChanger valueChange={increaseDown} label="Down" />
          <ValueChanger valueChange={toGo} label="To Go" />
          <ValueChanger valueChange={ballOn} label="Ball On" />
          <ValueChanger valueChange={increaseQt} label="Quarter" />
          <ValueChanger valueChange={resetHomeScore} label="Reset Home Score" />
          <ValueChanger valueChange={resetAwayScore} label="Reset Away Score" />
          <ResetAll reset={reset} />
        </div>
      </section>
    </div>
  );
}

function ValueChanger(props) {
  const { valueChange, label } = props;
  return (
    <button className="quarterButton" onClick={valueChange}>
      {label}
    </button>
  );
}

function ResetAll(props) {
  const { reset } = props;
  return (
    <button className="quarterButton" onClick={reset}>
      Reset All
    </button>
  );
}

export default App;
