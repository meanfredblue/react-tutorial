import React, {Component} from 'react'

class App extends Component {

  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
      console.log(`App was mounted.`);

    const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

    fetch(url)
      .then((result) => {
          console.log("Got result...converting to json");
          return result.json();
      })
      .then((result) => {
        console.log("Converted to json...setting state");
        this.setState({
          data: result,
        })
      })

  }

  render() {
    console.log(`App was rendered.`);
    
    const {data} = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>    
  }
}

export default App