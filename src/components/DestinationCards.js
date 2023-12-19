import {Link} from 'react-router-dom'
import './Destination.css';


const DestinationCards = ({destination}) => {
    return(
        
        <article key={destination.id} className="destination-item">
        <div className="destination-img">
        <img src={destination.image}  className="img"/>
           
        </div>
        <div className="dest-info">
          <h5>{destination.title}</h5>
          <Link to={`/destination/${destination.id}`} >
more info
</Link>
</div>
        </article>
    )
}

export default DestinationCards