import { useState } from 'react';
import '../app.css';
import Card from './card'
import Input from './inputarea';


export default function Todolist(prop){
    const [input,setinput]=useState({
        title:'',
        note:''
      });
      function handleinput(e){
        const {name,value}= e.target;
        setinput(prev=>{
          return {...prev,[name]:value}
        });
      }
      const [data,setdata]=useState([]);
    
    
      function handledata(){
        setdata(prev=>{
         
            return [...prev,input];
          }
          );
          
        setinput({
          title:'',
          note:''
        });
        }

        function handledelete(id){
            setdata( data.filter((data,index)=>{
                    return index!==id;                
            }))
        }
     

    return <div>
        <Input ontype={handleinput} onadd={handledata} titlevalue={input.title} notevalue={input.note}/>
        <div className='cards'>
        {data.map((data,index)=>{
          return <Card ondelete={handledelete} key={index} id={index} title={data.title} note={data.note}/>
          })}

        </div>
     
    </div>

}