import React from "react";
import { connect } from "react-redux";
import Choices from "./Choices";
import Story from "./Story";
import Editor from "./Editor";
import { makeChoice, commitEdit } from "./state/actions";
import "./App.css";

const App = props => (
    <div className="App">
      { props.ending ?
        <Editor commitEdit = {props.commitEdit}/>
      :
        <div>
        <Story sceneText={props.sceneText} />
        <Choices choices={props.currentChoices} makeChoice={props.makeChoice} />
        </div>
      }

    </div>
  );

  const stateToProps = state => ({
  tags: state.tags,
  currentChoices: state.currentChoices,
  sceneText: state.sceneText,
  ending: state.ending
});

const dispatchToProps = dispatch => ({
  makeChoice: idx => dispatch(makeChoice(idx)),
  commitEdit: idx => dispatch(commitEdit(idx))
});

export default connect(stateToProps, dispatchToProps)(App);
