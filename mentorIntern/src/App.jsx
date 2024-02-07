import { useState } from 'react'
import './App.css'
import DayFirst from "./components/ClassComponents/DayFirst"
import StatesInClass from "./components/ClassComponents/StatesInClass"
import PropsComponent from './components/Props'
import ClassComp from "./components/ClassComponents/ClassComp"
import Employee from './components/Employess'
import Day2 from "./componentDay2/classComps/Day2"
import CounterComponent from './componentDay2/classComps/CountUpdater'
import StateDemo from './componentDay2/classComps/StatesDemo'
import MyLifeComponent from './componentDay2/classComps/LifeCycleMethod'
import Day3Demo from './day3/class/day3'
import LifeCycle3 from './day3/class/LifeCycle3'
import Parent from './day3/class/Parant'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>SevenMentor</h1>
      <Day2 day="1"/>
      <DayFirst/>
      <StatesInClass/>
      <PropsComponent name="Bharat"/>
      <ClassComp name="Kara"/>
      <Employee name="Jon" id="x53" salary="$12000.00"/>
      <Day2 day="2"/>
      {/* <CounterComponent/> */}
      <StateDemo/>
      <MyLifeComponent/>
      <Day2 day="3"/>
      <Day3Demo/>
      <LifeCycle3/>
      <Parent/>

      
       
    </>
  )
}

export default App
