import '../app.css';

export default function Input(prop){
    return  <div className='inputarea'>
        <input onChange={prop.ontype} name="title" type="text" placeholder="Title...." value={prop.titlevalue}/>
    <input onChange={prop.ontype} name="note" type="text" placeholder="Note..." value={prop.notevalue}/> 
    <button onClick={prop.onadd}>+</button>
    </div>
    
}