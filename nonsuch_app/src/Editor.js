import React from "react";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
    this.handleChange = this.handleChange.bind(this);
}

  handleChange(event) {
    this.setState({value: event.target.value});
}

render(){
    return (
      <section className="editor">
        <div>EDITING</div>
        <p><textarea value={this.state.value} onChange={this.handleChange}> </textarea></p>
        <p>Choice <input type="text"></input></p>
        <section className="choices">
          <ul>
            <li onClick={() => this.props.commitEdit(this.state.value)}>SUBMIT</li>
          </ul>
        </section>
      </section>
    )
  }
}

export default Editor;
