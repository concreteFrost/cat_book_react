import s from './New.module.css'

const New=(props)=>{
  return(
      <div className={s.container}>
          <div className={s.header}><h3>{props.header}</h3></div>
          <div className={s.main}><p>{props.article} </p> </div>
      </div>
  )
}

export default New;