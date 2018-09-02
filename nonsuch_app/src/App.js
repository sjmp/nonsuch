import React from "react";
import { connect } from "react-redux";
import Choices from "./Choices";
import Story from "./Story";
import { makeChoice } from "./state/actions";
import "./App.css";

const App = props =>
  props.ending ? (
    <div className="ending">Now write your own story</div>
  ) : (
    <div className="App">
      <Story sceneText={props.sceneText} />
      <Choices choices={props.currentChoices} makeChoice={props.makeChoice} />
    </div>
  );

  const stateToProps = state => ({
  tags: state.tags,
  currentChoices: state.currentChoices,
  sceneText: state.sceneText,
  ending: state.ending
});

const dispatchToProps = dispatch => ({
  makeChoice: idx => dispatch(makeChoice(idx))
});

export default connect(stateToProps, dispatchToProps)(App);
