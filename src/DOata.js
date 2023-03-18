import  React,{useState} from 'react';
import { dataref } from './firebase'

function DOata(){
    const [name,SetName] = useState('')
    const [age,SetAge] = useState('')

    const handleAdd =()=>{
        dataref.ref("user").push().set({
            name : name,
            age : age,
        }).catch(alert);
        
    } 
    return(
        <div>
            <input value={name} onChange={(e) => {SetName(e.target.value)}}></input>
            <br/>
            <input value={age} onChange={(e) => {SetAge(e.target.value)}}></input>
            <br/>
            
            <button onClick={handleAdd}>Submit</button>
        </div>
    )
}
export default DOata;