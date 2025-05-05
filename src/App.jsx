import Header from "./Components/Header";
import UserInput from "./Components/UserInputField";
import { useState } from "react";
import Result from "./Components/Result";
function App() {
  const [userInput, setUserInput] = useState({
    "Initial Investment": 0,
    "Annual Investment": 0,
    "Expected Return": 0,
    Duration: 1,
  });

  function handleChange(event, InputLabel) {
    setUserInput((oldState) => {
      return { ...oldState, [InputLabel]: +event.target.value };
    });
  }

  return (
    <main>
      <Header />
      <section id="user-input">
        <div className="input-group">
          <UserInput
            handleChange={handleChange}
            InputLabel="Initial Investment"
          />
          <UserInput
            handleChange={handleChange}
            InputLabel="Annual Investment"
          />
        </div>
        <div className="input-group">
          <UserInput handleChange={handleChange} InputLabel="Expected Return" />
          <UserInput handleChange={handleChange} InputLabel="Duration" />
        </div>
      </section>
      {userInput.Duration <= 0 ? (
        <p>Please Enter a duration greater than 0</p>
      ) : (
        <Result userInput={userInput} />
      )}
    </main>
  );
}

export default App;
