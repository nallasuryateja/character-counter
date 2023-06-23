import './index.css'

const Counter = props => {
  const {data} = props
  const {string} = data

  return (
    <li>
      <p>
        {string} : <span>{string.length}</span>
      </p>
    </li>
  )
}
export default Counter
