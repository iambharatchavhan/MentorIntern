import { useState } from "react";
import "./App.css";
import DayFirst from "./components/ClassComponents/DayFirst";
import StatesInClass from "./components/ClassComponents/StatesInClass";
import PropsComponent from "./components/Props";
import ClassComp from "./components/ClassComponents/ClassComp";
import Employee from "./components/Employess";
import Day2 from "./componentDay2/classComps/Day2";
import CounterComponent from "./componentDay2/classComps/CountUpdater";
import StateDemo from "./componentDay2/classComps/StatesDemo";
import MyLifeComponent from "./componentDay2/classComps/LifeCycleMethod";
import Day3Demo from "./day3/class/day3";
import LifeCycle3 from "./day3/class/LifeCycle3";
import Parent from "./day3/class/Parant";
import EvenDemo from "./Day4/Day4Class";
import Day4fun from "./Day4/Day4fun";
import Counter from "./Day4/Counter";
import ChangeNameOnClick from "./Day4/CHangeNameOnClick";
import BgColor from "./Day4/BgColor";
import EmployeeDetails from "./Day4/Fun/EmployeeDetails";
import ParentTwo from "./Assign/StateAndPrps";
import Uncontrolled from "./Day5/Controlled";
import Controlled from "./Day5/Controlled";
import ControlledDif from "./Day5/ControlledDif";
import UsernamePassword from "./Day5/UserNamePassword";
import ValidateForm from "./Day6/FormValidation";
import Destructuring from "./Day6/Destructure";
import List from "./Day6/List";
import StateAndProps from "./Labs2/StateProp";
import TextBoxAlert from "./Labs2/TextAlert";
import Day7 from "./Day7/Day7";
import LoginValidate from "./Labs2/LoginValidation";
function App() {
  return (
    <>
      <h1>SevenMentors</h1>
      {/*

      <Day2 day="1"/>
      <DayFirst/>
      <StatesInClass/>
      <PropsComponent name="Bharat"/>
      <ClassComp name="Kara"/>
      <Employee name="Jon" id="x53" salary="$12000.00"/>
      <Day2 day="2"/>
      <StateDemo/>
      <MyLifeComponent/>
      <Day2 day="3"/>
      <Day3Demo/>
      <LifeCycle3/>
      <Parent/>
      <EvenDemo/>
      <BgColor/>
   <ParentTwo name="bharat" id="12" salary="5LPA"/> 
       <Counter/>
       <ChangeNameOnClick/>
       <ParentTwo name="nilesh" id="55" salary="12LPA"/>  
       <EmployeeDetails name="Nimesh Gala" id="T20" salary="12LPA"/>
     <EmployeeDetails name="Yuraj Singh" id="T11" salary="10LPA"/> 
     
   */}

      {/* <Day2 day="5"/>
<Uncontrolled/>
<Controlled/>
<ControlledDif/>
 <UsernamePassword/> */}
      {/* <Day2 Day2 day="6"/>
 <ValidateForm/>
 <Destructuring name="Nilesh" id="532"/>
 <List/> */}
      {/* <StateAndProps course="React" teacher="Mr.john Doe"/> */}
      {/* <TextBoxAlert/> */}
      <Day2 Day2 day="7" />
      <Day7/>
      <LoginValidate/>
    </>
  );
}

export default App;
