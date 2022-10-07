import { useState } from "react";


const Todo = ({todo, setTodo}) => {
const [value, setValue] = useState('')
function addValue(){
 if(value){
    setTodo(
        [...todo, {
            id:Date.now(),
            title:value,
            status: false,
            like:0,
            disLike:0,
            time: new Date().toLocaleTimeString()
        }]
    )
 }
    setValue('')
}
function deleteText(id){
    const newItem = [...todo].filter(item => item.id !==id)
    setTodo(newItem)
}

function status(id){
    const newItem =[...todo].filter(item => {
        if(item.id ===id){
            item.status = !item.status
        }
        return item
    })
    setTodo(newItem)
    console.log(newItem)
}
const [edit, setEdit] =useState(null)// щось не то робитью Тре переробити 5.10
function editeText(id, title){
    setEdit(id)
    setValue(title)
}

function like(id){
    const newLike =[...todo].filter(item => {
        if(item.id ===id){
            item.like = item.like+1
        }
        return item
    } )
    setTodo(newLike)
}
// function disLike(id){
//     const disLike =[...todo].filter(item => {
//         if(item.id ===id ){
//             item.like = item.like-1
//             if(item.like <= 0){
//                 item.like = 0
//             }
           

//         }
//         return item
//     } )
//     setTodo(disLike)
// }
function disLike(id){
    const newLike =[...todo].filter(item => {
        if(item.id ===id){
            item.disLike = item.disLike+1
        }
        return item
    } )
    setTodo(newLike)
}

    return(
         <div>
               <input type="text" 
               value={value}
               onChange ={(e) => setValue(e.target.value)}/>
        <button onClick={addValue}>ADD</button>
        <ol >
            {
                todo.map(item => (
                    <li key={item.id} className={item.status ? 'stat':""}>
                       {`${item.title}, like - ${item.like}, disLike - ${item.disLike},
                      time -${item.time}`}
                    <button onClick={() => deleteText(item.id)}>delete</button>
                    <button onClick={() => status(item.id)}>Виконане</button>
                    <button onClick={() => editeText(item.id, item.title)}>EDIT</button>
                    <button onClick={() =>like(item.id)}>Like</button>
                    <button onClick={() =>disLike(item.id)}>Dislike</button>
                    </li>
                ))
            }
        </ol>
        </div>
    )
}
export default Todo;
