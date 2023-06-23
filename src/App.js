import {Component} from 'react'
import './App.css'
import CharCounter from './components/CharCounter'
import StringContext from './context/StringContext'

// Replace your code here
class App extends Component {
  state = {
    stringArray: [],
  }

  addString = ob => {
    this.setState(prevState => [...prevState.stringArray, ob])
  }

  render() {
    const {stringArray} = this.state
    return (
      <StringContext.Provider
        value={(stringArray, {addString: this.addString})}
      >
        <CharCounter />
      </StringContext.Provider>
    )
  }
}

export default App
