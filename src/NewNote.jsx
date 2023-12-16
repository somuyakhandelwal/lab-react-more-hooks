import { ACTION_TYPE } from './App';

export default function NewNote({post,dispatch}) {
return (
    <>
      <div>
        {post.toggle?<h3 style={{fontSize:"20px",marginLeft:"10px"}}>{post.name}</h3>:<h3 style={{fontSize:"20px",marginLeft:"10px"}}>The Content is hidden</h3>}
      </div>
      <button onClick={()=>dispatch({type:ACTION_TYPE.TOGGLE, payload:{id:post.id}})}>Toggle</button>
    </>
  )
}