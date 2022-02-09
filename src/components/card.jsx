import '../app.css';

export default function Card(prop){
    return <div className="card">
        <h1>{prop.title}</h1>
        <p>{prop.note}</p>
        <button onClick={()=>{prop.ondelete(prop.id)}}>-</button>
    </div>
}