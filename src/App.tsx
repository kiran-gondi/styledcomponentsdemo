import React from "react";
// import {RedButton, BlueButton, GreenButton} from "./Components/Button.style";
// import {Button, ButtonLabel} from "./Components/Button.style";
import {StyledButton} from "./Components/Button.style";
import {AppContainer} from "./Components/Container.style";
import {GlobalStyles} from "./GlobalStyles.style";

function App() {

  return (
    <>
      {/* <div className="App">Leave a like or subscribe!</div> */}
      {/* <div><App>Leave a like or subscribe!</App></div> */}
      {/* <div className="App">
      <Button backgroundColor="red" fontWeigh="10px">Test Button 1 Click</Button>
      {/* <BlueButton>Test Button 2 Click</BlueButton>
      <GreenButton>Test Button 3 Click</GreenButton> */}
      {/* <Button backgroundColor="violet" fontWeigh="12px">Test Button 2 Click</Button>
      </div> */} 

      <AppContainer>
      {/* <Button backgroundColor="red"><ButtonLabel>Test Button 1 Click</ButtonLabel> </Button> */}
      <GlobalStyles/>
        <StyledButton buttonLabel="Click here 123" backgroundColor="red"></StyledButton>

      </AppContainer>
    </>
  )
}

export default App
