import { useState , useEffect} from 'react'
import './App.css'

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data =>{
      setPersonajes(data.results);
      setLoading(false);
    })
    .catch(err => console.error('Se ha producido un error', err))
  }, [])

  return (
    <div style={{ textAlign:'center', marginTop:'2rem'}}>
      <h1>Personajes de Rick and Morty</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div style={{ display:'flex', flexDirection:'row', flexWrap: 'wrap' }}>
          {personajes.map(char => (
            <div key={char.id} style={{ margin:'2%', display:'inline'}}>
              <img src={char.image} alt={char.name} style={{ width: '70%', borderRadius:'50%' }} />
              <h3>{CharacterData.name}</h3>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default App
