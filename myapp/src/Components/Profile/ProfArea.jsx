import './ProfArea.css';

export default function Profile({Work,hours,Date,bgColor}){


    return(
        
        <div className='Global' style={{backgroundColor:bgColor}}>
            <div className='Container'>
                <div className='Header'>
                    <h2>{Work}</h2>
                   
            </div>
            <div className='Time'>
                <h1>{hours} hrs</h1> 
                <h3> {Date} hrs</h3>
            </div>
            </div>
        </div>
        
        
        
    )
}