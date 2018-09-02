import React from "react";

const Editor = ({ commitEdit })=> (
  <section className="editor">
    <div>EDITING</div>
    <p><textarea> </textarea></p>
    <p>Choice <input type="text"></input></p>
    <section className="choices">
      <ul>
        <li onClick={() => commitEdit("test")}>SUBMIT</li>
      </ul>
    </section>
  </section>
);

export default Editor;
