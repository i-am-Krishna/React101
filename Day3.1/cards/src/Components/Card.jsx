import styles from './Details.module.css'

 




function Card(abc){

  return  <div className={styles.card} >
        <div className={styles.left_side}>

        <h3>{abc.date}</h3>
        <h4 style={{display:"inline",padding:"5px",backgroundColor:"black",color:"white"}}>{abc.caseStudy}</h4>
        <h2 style={{fontSize:"40px"}}>{abc.name}</h2> 
        <h2  style={{fontSize:"30px"}}>{abc.payment}</h2> 
        <h3>{abc.brand}</h3>
        </div>
        <div className={styles.right_side}>
           <div style={{width:"80px",height:"80px",margin:"auto"}}> <img style={{width:"100%",height:"100%",backgroundColor:""}} src={abc.logoimg} alt={abc.name} />
           </div>
           <div><img src={abc.arrow} style={{marginTop:"200px"}} alt="" /></div>

        </div>
    </div>
}

export default Card ;
