import "./App.scss";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here\'s some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere\'s also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let\'s not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)',
    };
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div id="app">
        <h1 id="nameLogo">Markdown Previewer</h1>
        <div id="wrapper">
        <div id="editorDiv">
          <h3 className="desc left"> <i class="fa-solid fa-pen"></i> Editor</h3>
          <textarea
            id="editor"
            cols="30"
            rows="10"
            onChange={this.handleChange.bind(this)}
            value={this.state.input}
          />
        </div>
        <div id="previewDiv">
          <h3 className="desc right"> <i class="fa-brands fa-readme"></i> Preview</h3>
          <div id="preview">
            <ReactMarkdown
              children={this.state.input}
              remarkPlugins={[remarkGfm]}
            ></ReactMarkdown>
          </div>
        </div>
        </div>
        <a target="_blank" rel="noreferrer" id="portfolioLink" href="https://mtlpks.github.io/portfolio/"><h3 id="credits">Made by Matheus Leopoldo - mtlpks</h3></a>
      </div>
    );
  }
}

export default App;
