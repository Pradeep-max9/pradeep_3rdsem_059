
import ButtonComponent from './component/ButtonComponent'
import './App.css'
import Fromcomponent from './component/Fromcomponent'
import Orderd from './component/Orderd'
import Unorderd from './component/Unorderd'


function App() {
  
  

  return (
    <>
      <h1>hello world</h1>
      <ButtonComponent/>
      <Fromcomponent text={"hello this is data"} value={34} arr={[1,2,,3,4,5,6]}/>
      <Orderd />
      <Unorderd/>
     

    </>
  )
}

export default App
