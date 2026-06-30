import {useState} from 'react';
import Login from './Login';
import Upload from './Upload';
export default function App(){
 const [ok,setOk]=useState(false);
 return ok?<Upload/>:<Login success={()=>setOk(true)}/>;
}