import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from './hooks/useCharacter';

export default function Character(){
    const {id} = useParams();
    const {data, loading, error} = useCharacter(id.toString());

    //handling error and loading state
    if(error) return <p>error</p>;
    if(loading) return <p className='loading'>loading..</p>;

    //populating UI for selected film data
    return(
        <div className="character__main">
            <h1>{data.film.title}</h1>
            <p className='description'>{data.film.openingCrawl}</p>
            <div className="character__list">
                <h2>Character's List:</h2>              
                {data.film.characterConnection.characters.map(char=>{                    
                    return <div>
                        <div className="character">
                        <h4>Name: {char.name}</h4>
                        <p>Height: {char.height}</p>
                        <p>Weight: {char.mass}</p>
                        <p className='eyecolor'>Eye Color: {char.eyeColor}</p> 
                        <p className='gender'>Gender: {char.gender}</p>
                        <p className='haircolor'>Hair Color: {char.hairColor}</p>
                    </div>
                    <hr />
                    </div>                    
                })}
            </div>
        </div>);
}