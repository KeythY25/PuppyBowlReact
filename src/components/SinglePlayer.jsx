import { useState, useEffect } from "react";

export default function SinglePlayer() {

    const fetchAPlayer = async ()=>{
      const cohortName ="2302-ACC-PT-WEB-PT-C";
      const res = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players/15984`);
      const result = await res.json();
      console.log(result.data.player);
    }

    fetchAPlayer();
    return (
      <div className="singlePlayer">
        <h1>Single Player</h1>
      </div>
    );
  }