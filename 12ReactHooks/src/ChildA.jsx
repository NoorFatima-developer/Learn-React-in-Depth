import {React, memo} from 'react'

// Accept Learning as a prop...
function ChildA({Learning, count}) {
    console.log("Child Component");
    
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildA)
