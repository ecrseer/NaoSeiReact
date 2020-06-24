import React from 'react';
import ReactDOM from 'react-dom';


class Title extends React.Component {
  render() {
    return (<h1 className="h2">{this.props.label}</h1>)
  }
}

class Paragraph extends React.Component {
  render() {  
    return (
      <p className="lead">
      {this.props.text}
      </p>
    )
  }
}
class Tablin extends React.Component{
  render(){
    return(
     <table style="width:90%">
     <tr>
       <th>momoled</th>
     </tr>
     </table>
     
     )
  } 
} 
class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    return  (
      <div className="container text-center">
        <Title label={this.props.title} />
          <Paragraph text={this.props.text} />
          <Tablin />
      </div>
    )
  }
}


ReactDOM.render(
  <Main title="React + Bootstrap" text="Time flies like an arrow, fruit flies like a banana"></Main>,
  document.getElementById('react-app')
);
