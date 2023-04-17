import './App.css'
import Navbar from './component/navbar'

import Section1 from './component/section1'
import Section5 from './component/section5'
import Section2 from './component/section2'
import Section3 from './component/section3'
import Flowfooter from './component/footer'
import Section4 from './component/section4'
import Section6 from './component/section6'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './component/home'
import Linksuit1 from './component/linksuit1'
import Linksuit2 from './component/linksuit2'
import about from './component/about'
import Linksuit3 from './component/linksuit3'
import Linksuit4 from './component/linksuit4'
import Onclickkurta from './component/onclickkurta'
import Onclickturban from './component/onclickturban'
import Linksuit5 from './component/linksuit5'
import Linksuit6 from './component/linksuit6'
import Linksuit7 from './component/linksuit7'
import Linksuit8 from './component/linksuit8'
import Linksuit9 from './component/linksuit9'
import Linksuit10 from './component/linksuit10'
import Linksuit11 from './component/linksuit11'
import Linksuit12 from './component/linksuit12'
import { Contact } from './component/contact'


function App() {
  // const [count, setCount] = useState(0)
return (
    <>
 <BrowserRouter>
 <Navbar></Navbar> 
 <Routes>
<Route path="/" element={<Home></Home>}/>
<Route path="/linksuit1" element={<Linksuit1></Linksuit1>}/>

{/* <Route path="/linksuit3" element={<Linksuit3></Linksuit3>}/> */}

{/* <Route path="/onclickkurta" element={<Onclickkurta></Onclickkurta>}/> */}

<Route path="/linksuit2" element={<Linksuit2></Linksuit2>}/>

<Route path="/linksuit3" element={<Linksuit3></Linksuit3>}/>

<Route path="/linksuit4" element={<Linksuit4></Linksuit4>}/>

<Route path="/linksuit5" element={<Linksuit5></Linksuit5>}/>

<Route path="/linksuit6" element={<Linksuit6></Linksuit6>}/>

<Route path="/linksuit7" element={<Linksuit7></Linksuit7>}/>

<Route path="/linksuit8" element={<Linksuit8></Linksuit8>}/>

<Route path="/linksuit9" element={<Linksuit9></Linksuit9>}/>

<Route path="/linksuit10" element={<Linksuit10></Linksuit10>}/>

<Route path="/linksuit11" element={<Linksuit11></Linksuit11>}/>

<Route path="/linksuit12" element={<Linksuit12></Linksuit12>}/>



<Route path="/onclickkurta" element={<Onclickkurta></Onclickkurta>}/>

<Route path="/onclickturban" element={<Onclickturban></Onclickturban>}/>

<Route path="/about" element={<about></about>}/>
<Route path="/contact" element={<Contact></Contact>}/>

</Routes>
 <Flowfooter></Flowfooter>
 </BrowserRouter>
    
      
  
       
         
        {/* <Section3></Section3>,
          <Section5></Section5>,
          <Section6></Section6>,
          <Section4></Section4>,
          <Section1></Section1>
      <Section2></Section2> */}

    </>

  )
}
export default App