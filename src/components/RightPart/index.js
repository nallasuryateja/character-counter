import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'
import StringContext from '../../context/StringContext'

class RightPart extends Component {
  state = {
    inputt: '',
  }

  render() {
    const {inputt} = this.state

    return (
      <StringContext.Consumer>
        {value => {
          const {addString} = value
          const id = uuidv4()

          const onClickk = () => {
            addString({inputt, id})
          }

          const onChangee = event => {
            this.setState(event.target.value)
          }

          return (
            <div className="bg-container-right">
              <h1 className="heading">Character Count</h1>
              <div className="input-container">
                <input
                  onChange={onChangee}
                  className="input"
                  type="text"
                  label="Enter the characters here"
                />
                <button className="add-button" type="button" onClick={onClickk}>
                  Add
                </button>
              </div>
            </div>
          )
        }}
      </StringContext.Consumer>
    )
  }
}

export default RightPart
