import './App.css';

import axios from 'axios'
import { useState } from 'react';

function App() {

    const [searchText, setSearchText] = useState('')
    const [playerData, setPlayerData] = useState({})
    const API_KEY = 'RGAPI-7e8ebca5-442c-4ed8-9f0c-063cf1cbef1a'
    
    function searchForPlayer(event) {
// ---- VARIABLE DE LLAMADA DE API
        const ApiCallString = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + searchText + "?api_key=" + API_KEY
// --- LLAMADA DE API EN AXIOS
axios.get(ApiCallString).then(function (response) {

    console.log(response.data)
    setPlayerData(response.data)

}).catch(function (error){

    console.log(error)
})
}

  console.log(searchText)
  return (
    <div className="App">
      <div className='container'>
        <h5>League of Legends BUSCADOR DE JUGADORES</h5>
        <input onChange={e => setSearchText(e.target.value)} type='text'></input>

        {/* searchForPlayer es lo que hace la peticion cuando apreto */}
        <button onClick={e => searchForPlayer(e)}>Buscar al Invocador</button>
      </div>
      {JSON.stringify(playerData) !== '{}' ? <><p>Invocador</p>
      <p>{playerData.name}</p>
      <img width={'100'} height='100' src={'http://ddragon.leagueoflegends.com/cdn/13.5.1/img/profileicon/'+ playerData.profileIconId+ ".png"}></img>
     <p>Nivel del invocador: {playerData.summonerLevel}</p>
      </> 
      
      :
      
      <><p>No hay data del Invocador</p></>
      
      }



<p>hecho por Axelito jejeje</p>

    </div>
    
    
  );
}

export default App;
