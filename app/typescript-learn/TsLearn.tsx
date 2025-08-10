import React, { useState } from 'react'
import ChildTs from './ChildTs'

const TsLearn = () => {
    const [value, setValue] = useState(0)
    
  return (
    <div>
        <ChildTs value = {value} setValue = {setValue} />

      
    </div>
  )
}

export default TsLearn
