import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App() {
  return (
    
    <div className="App">
    <Hello />
        <h1 className='ee'>wlecome to the world of react js</h1>
        <p className='ss'>hello everyone </p>
        <h3>my favourite react js</h3>

        <table border={2} align='center'>
          <tr>
            <th colSpan={7} className='user'>User Detail</th>
            
          </tr>
          <tr className='heading'>
            <th>Name</th>
            <th>profile</th>
            <th>Email</th>
            <th>contactNumber</th>
            <th>Address</th>
            <th>salary</th>
            <th>something</th>

          </tr>
          <tr className='heading'>
            <td>vikas</td>
            <td>mern stack developer</td>
            <td>vikas@gmail.com</td>
            <td>123456879</td>
            <td>new delhi</td>
            <td>20k</td>
            <td>20k</td>
          </tr>
          <tr className='heading1'>
          <td>john</td>
          <td>java developer</td>
          <td>john@gmail.com</td>
          <td>123456879</td>
          <td>new york</td>
          <td>20k</td>
          <td>thing</td>
          </tr> 
          
          <tr className='heading'>
          <td>harsh</td>
          <td>php</td>
          <td>harsh@gmail.com</td>
          <td>123456879</td>
          <td>noida</td>
          <td>25k</td>
          <td>25k</td>
          </tr>

          <tr className='heading1'>
          <td>kush</td>
          <td>php</td>
          <td>kush@gmail.com</td>
          <td>123456879</td>
          <td>noida</td>
          <td>30k</td>
          <td>detail</td>
          </tr>

          <tr className='heading'>
          <td>raju</td>
          <td>python</td>
          <td>raju@gmail.com</td>
          <td>123456879</td>
          <td>mathura</td>
          <td>10k</td>
          <td>10k</td>
          </tr>

          <tr className='heading1'>
          <td>subham</td>
          <td>react developer</td>
          <td>subham@gmail.com</td>
          <td>123456879</td>
          <td>faridabad</td>
          <td>20k</td>
          <td>20k</td>
          </tr>

          <tr className='heading'>
          <td>gaurav</td>
          <td>digital marketing</td>
          <td>gaurav@gmail.com</td>
          <td>123456879</td>
          <td>new delhi</td>
          <td>20k</td>
          <td>20k</td>
          </tr>
        </table>

        <div className='navbar'>
          <a href='https://www.flipkart.com/' target="_blank" className='links'>Flipkart</a>
          <a href='#' className='links'>AboutUs</a>
          <a href='#' className='links'>service</a>
          <a href='#' className='links'>Contact us</a>
        </div>

        <ol type='a'>  
          <li>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ol>  

        <ol start='101'>  
          <li>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ol> 

        <ol type='I'>  
          <li>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ol>

        <ul>  
          <li>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ul>

        <ul type='circle'>  
          <li>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ul>

        <ul type='square'>  
          <li>laptop </li>  
          <li>mobile</li>  
          <li>books</li>  
          <li>pen</li>  
        </ul>

        <dl> 
          <dt>javascript</dt>
          <dd>A server side scripting language.</dd> 
          <dt>react js</dt>
          <dd>javascript library</dd> 
        </dl>
    </div>


  );
}

export default App;
