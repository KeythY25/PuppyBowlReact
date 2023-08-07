import { useState, useEffect } from "react";

export default function SinglePlayer() {

    const[playerData, setPlayerData] = useState([]);

    const fetchAPlayer = async ()=>{
      try{
        const cohortName ="2302-ACC-PT-WEB-PT-C";
        const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/16610`);
        const result = await res.json();
        console.log(result.data.player); 
        setPlayerData(result.data.player)
      } catch (error){
          console.log(error)
      }
      
    }
  
    useEffect(()=> {
      fetchAPlayer();
    }, []);

    return (
      <div className="singlePlayer" key={playerData.id}>
       {/* {<pre>{JSON.stringify(data, null, 2)}</pre>} */}
       <div >
        <h1>{playerData.id} - {playerData.name}</h1>
        <img src={playerData.imageUrl}/>
        <h2>Status: {playerData.status}</h2>
        <h3>Breed: {playerData.breed}</h3>
        <h3>Cohort ID: {playerData.cohortId}</h3>
        <h4>Created At: {playerData.createdAt}</h4>
        <h4>Updated At: {playerData.updatedAt}</h4>
        <br/>
        <button>Back</button>
       </div>
      </div>
    );
  }