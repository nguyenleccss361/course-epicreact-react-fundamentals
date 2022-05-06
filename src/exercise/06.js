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
// function UsernameForm({onSubmitUsername}) {
//   const inputRef = React.useRef()
//   const handleSubmit = event => {
//     event.preventDefault()
//     // console.dir(inputRef)
//     const userNameValue = inputRef.current.value
//     onSubmitUsername(userNameValue)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username: </label>
//         <input id="usernameInput" type="text" ref={inputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// 2. 💯 Validate lower-case
// function UsernameForm() {
//   const [isValid, setIsValid] = React.useState(false)
//   const [error, setError] = React.useState(null)

//   const handleChange = event => {
//     event.preventDefault()
//     const userNameValue = event.target.value
//     if (userNameValue === userNameValue.toLowerCase()) {
//       setIsValid(true)
//     } else {
//       setIsValid(false)
//       setError('Username must be lower case')
//     }
//   }

//   return (
//     <form>
//       <div>
//         <label>Username: </label>
//         <input name="username" type="text" onChange={handleChange} />
//       </div>
//       <h1>{setIsValid}</h1>
//       {isValid ? (
//         <button type="submit">Submit</button>
//       ) : (
//         <div>
//           <h1 role="alert" style={{fontSize: '1rem', color: 'red'}}>
//             {error}
//           </h1>
//           <button type="submit" disabled>
//             Submit
//           </button>
//         </div>
//       )} // Other way: disabled={Boolean(error)}
//     </form>
//   )
// }

// 3. 💯 Control the input value
function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  function handleChange(event) {
    setInputValue(event.target.value.toLowerCase())

    // If we want to explicitly update that value we could do this: inputNode.value = 'whatever' but that’s pretty imperative.
    // const {value} = event.target
    // event.target.value = value.toLowerCase()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username: </label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={inputValue} // Controlled input
          // Some other props: readOnly (equivalent to get rid of onChange), defaultValue
        />
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
