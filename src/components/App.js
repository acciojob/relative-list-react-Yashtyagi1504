import React from 'react'
let arr = ["abc","xyz","lmn","ijk"]
const App = () => {
  
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol>
                {
                  arr.map(value=>(
                    <li>{value}</li>
                  ))
                }
               </ol>
    </div>
  )
}

export default App
