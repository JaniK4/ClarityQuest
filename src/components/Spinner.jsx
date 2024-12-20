import loading from '../assets/spinner.gif';
export const Spinner =()=>{

    return (
      <div className="text-center my-4">
        <img style={{width:'3rem', height:'auto'}} src={loading} alt="loading...."/>
      </div>
    )
  
}

export default Spinner