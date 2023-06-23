import React from 'react'

const StringContext = React.createContext({
  stringArray: [],
  addString: () => {},
})

export default StringContext
