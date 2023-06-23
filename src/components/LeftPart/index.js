import StringContext from '../../context/StringContext'
import './index.css'

import Counter from '../Counter'

const LeftPart = () => (
  <StringContext.Consumer>
    {value => {
      const {stringArray} = value
      console.log(stringArray)
      const isEmpty = stringArray === 0

      return (
        <div className="bg-container-left">
          <p className="para">
            Count the characters like a <br /> Boss...
          </p>
          {isEmpty ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            </div>
          ) : (
            <ul>
              {stringArray.map(each => (
                <Counter key={each.id} data={each} />
              ))}
            </ul>
          )}
        </div>
      )
    }}
  </StringContext.Consumer>
)

export default LeftPart
