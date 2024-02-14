import "./App.css";
import Day2 from "./componentDay2/classComps/Day2";
import Day7 from "./Day7/Day7";
import LoginValidate from "./Labs2/LoginValidation";
import Labs from "./Labs";
import ValidationComp from "./Lab4/ValidationComp";
import Day8 from "./Day8/Day8";
function App() {
  return (
    <>
      <h1>SevenMentors</h1>
      <Day2 Day2 day="8" />
      {/* <Day7/> */}
      <Day8/>
      {/* <LoginValidate/> */}
     {/* <Labs/> */}
     {/* <ValidationComp/s> */}
    </>
  );
}

export default App;
