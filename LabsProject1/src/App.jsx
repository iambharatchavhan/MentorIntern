import "./App.css";
import ConditionalRender from "./components/Lab1/ConditionalRender";
import ReuseComp from "./ReuseComp";
import TextCount from "./components/Lab2/TextCount";
import DropColor from "./components/Lab3/DropColor";
import TodoList from "./components/Lab4/TodoList";

function App() {
  return (
    <main>
      <h1 className="header-heading">7 Mentor Labs Live</h1>
      <ReuseComp  number={8}/>
      <ConditionalRender />
      <ReuseComp  number={9}/>
      <TextCount/>
      <ReuseComp  number={10}/>
      <DropColor/>
      <ReuseComp  number={11}/>
      <TodoList/>
  

    </main>
  );
}

export default App;
