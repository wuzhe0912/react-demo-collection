import { useState, useEffect } from 'react';
import Character from './Character';

function List() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData();
  }, [characters.length]);

  async function fetchData() {
    const data = await fetch('https://rickandmortyapi.com/api/character/');
    const { results } = await data.json();
    setCharacters(results);
    setLoading(false);
  }

  return (
    <>
      <h2>Character</h2>
      <div className="row">
        {
          loading ? (
            <p>Loading...</p>
          ) : (
            characters.map((node) => {
              return <Character key={node.id} {...node} />;
            })
          )
        }
      </div>

    </>
  );
}

export default List;
