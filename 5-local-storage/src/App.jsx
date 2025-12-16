import React from 'react'

const App = () => {

const user = {
  userName:"Nahid Bhuyaan",
  age:24,
  city:"Dhaka"
}
localStorage.setItem("user", JSON.stringify(user))
  return (
    <div>
      App Local Storage
    </div>
  )
}

export default App
