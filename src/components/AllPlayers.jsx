import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function AllPlayer() {
   const [players, setPlayers] = useState([]);

    const fetchAllPlayers = async () =>{
      try {
        const cohortName ="2302-ACC-PT-WEB-PT-C";
        const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`);
        const result = await res.json();
        console.log(result.data.players);
        setPlayers(result.data.players);
      } catch(error){
        console.log(error);
      }
     
    }
    
    useEffect(() => {
      fetchAllPlayers();
    }, []);

    const navigate = useNavigate()
    return (
      <div className="APBack">
       {/* <pre>{JSON.stringify(players, null, 2)} </pre>  */}
       <ul>
         {players.map(player => 
         <div className="wholeAssCard">
          <div className="card" key={player.id}>
             <img className='playerImage' src={player.imageUrl}/>
              <div className="quickDet">
                <h2>{player.id} - {player.name}</h2>
                <h3>{player.status}</h3>
                <br/>
                <button className="detailBTN" onClick={()=> navigate('/SinglePlayer')}>DETAILS</button>
                <button className="deleteBTN">DELETE</button>
              </div>         
            </div>
         </div> 
          

          )} 
       </ul>
      </div>
    );
  }