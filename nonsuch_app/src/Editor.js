import React from "react";
import Dropzone from 'react-dropzone';


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

onDrop(accepted, rejected)
{
  if (rejected.length > 0)
  {
    window.alert("Incorrect format! Please upload a JSON file.");
  }

  const reader = new FileReader();

  reader.onload = () => {
      const fileAsBinaryString = reader.result;

      //Remove fluff
      var t = fileAsBinaryString.substr(3);

      //parse into Json
      var b = JSON.parse(t);

      //If there's an Inkversion it's likely Ink!
      //TODO: Clean the hell of out this.
      if ('inkVersion' in b)
      {
          console.log(b);
      }


  };
  reader.onabort = () => console.log('file reading was aborted');
  reader.onerror = () => console.log('file reading has failed');

  reader.readAsBinaryString(accepted[0]);


}

render(){
    return (
      <section className="editor">
        <div>EDITING</div>
        <div className="dropzone">
          <Dropzone
            accept="application/json"
            onDrop={(accepted, rejected) => { this.onDrop(accepted, rejected); }}>
              <p>Try dropping some files here, or click to select files to upload.</p>
          </Dropzone>
        </div>
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
