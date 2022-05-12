import '../App.css';
import { Routes, Route, Outlet, Link,useNavigate } from
"react-router-dom";

function Warehouselocation() {
   const productList = [
   { id: '01', name: 'Sukhumvit', latitude: '1234 ', longitude : '1234 ' , telno: '022222222 ', faxno: '022222222 '  },
   { id: '02', name: 'BangBuaThong', latitude: '1234 ', longitude : '1234 ' , telno: '022222222 ', faxno: '022222222 '  },
   { id: '03', name: 'Bang na', latitude: '1234 ', longitude : '1234 ' , telno: '022222222 ', faxno: '022222222 '  },
   { id: '04', name: 'Bang care', latitude: '1234 ', longitude : '1234 ' , telno: '022222222 ', faxno: '022222222 '  },
   { id: '05', name: 'Don Mueng', latitude: '1234 ', longitude : '1234 ' , telno: '022222222 ', faxno: '022222222 '  },
   ]
   return (<><h2>Warehouse List</h2><ul>
   {productList.map(x => 
   <li key={x.id}>
     <Link to={`${x.id}/${x.name}/${x.latitude}/${x.longitude}/${x.telno}/${x.faxno}
    `}>
       Name :{x.name},
 
       </Link></li>)}
   </ul></>
   );
  }


  // function Noodle() {
  //   let navigate = useNavigate();
  
  //   function handleChange(e) {
  //     e.preventDefault();
      
  //     let form = e.currentTarget;
  //     let formData = new FormData(form);
  //     let data = { topping: formData.getAll('toppings'), noodle: formData.get('noodle') }
  //     navigate('noodle/detail', { replace: true, state: { data } })
     
  //   }

  //   return (<><form onSubmit={handleChange}>
       
  //     <p>What would you like?</p>
  //     <p>
  //       <label>
  //         <input type="radio" name="noodle" value="small" />
  //         เส้นเล็ก
  //       </label>
  //       <br />
  //       <label>
  
  //       <input type="radio" name="noodle" value="big" />
  //         เส้นใหญ่
  //       </label>
  //       <br />
  //     </p>
  
  //     <p>
  //       <label>
  //         <input type="checkbox" name="toppings" value="meatBall" />
  //         ลูกชิ้น
  //       </label>
  //       <br />
  //       <label>
  //         <input type="checkbox" name="toppings" value="meat" />
  //         เนื้อ
  //       </label>
  //       <br />
  //       <label>
  //         <input
  //           type="checkbox" name="toppings" value="vegetable" />
  //         ผัก
  //       </label>
  //     </p>
  //     <input type='submit' />
  //   </form>
  //   </>
    
  //   );
  // }


 
   export default Warehouselocation;