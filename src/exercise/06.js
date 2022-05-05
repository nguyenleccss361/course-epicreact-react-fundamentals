// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// Exercise
// function UsernameForm({onSubmitUsername}) {
//   // 🐨 add a submit event handler here (`handleSubmit`).
//   // 💰 Make sure to accept the `event` as an argument and call
//   // `event.preventDefault()` to prevent the default behavior of form submit
//   // events (which refreshes the page).
//   // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
//   //
//   // 🐨 get the value from the username input (using whichever method
//   // you prefer from the options mentioned in the instructions)
//   // 💰 For example: event.target.elements[0].value
//   // 🐨 Call `onSubmitUsername` with the value of the input

//   // 🐨 add the onSubmit handler to the <form> below

//   // 🐨 make sure to associate the label to the input.
//   // to do so, set the value of 'htmlFor' prop of the label to the id of input

//   const handleSubmit = event => {
//     event.preventDefault()
//     // console.log(event.nativeEvent)
//     // console.log(event)
//     console.dir(event.target)
//     const firstNameValue = event.target.elements.firstnameInput.value
//     const userNameValue = event.target.elements.username.value
//     onSubmitUsername(firstNameValue, userNameValue)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         {/* html is just for, but DOM property is htmlFor */}
//         <label htmlFor="firstnameInput">First Name: </label>
//         <input id="firstnameInput" type="text" />
//       </div>
//       <div>
//         <label>Username: </label>
//         {/* id and htmlFor method is better than name for accessibility */}
//         <input name="username" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// 1. 💯 using refs
function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef()
  const handleSubmit = event => {
    event.preventDefault()
    // console.dir(inputRef)
    const userNameValue = inputRef.current.value
    onSubmitUsername(userNameValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username: </label>
        <input id="usernameInput" type="text" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
