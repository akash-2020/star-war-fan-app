import React from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

//creating schema to query and to fetch the data about list of the films
const GET_FILMS = gql`
    query{
        allFilms{
            films{
                id
                title
                episodeID
                director
                releaseDate
                openingCrawl
            }
        }
    }
`;

export default function Movies() {
    
    const {error, data, loading}=useQuery(GET_FILMS);

    //handling error and loading state while retrieving data from swapi
    if (loading) return <p className="loading">loading..</p>;
    if (error) return <p>error</p>;

    //setting data to UI
    return <div className="movie__cardMain">
        <h2>Explore and know more about your favourite shows</h2>
        <div className="movie__cardMain__hr"><hr /></div>
        {data.allFilms.films.map(film => {
            //link has been provided to visit the specific film
            return <Link to={`/${film.id}`}> 
                <div className="movie__card">
                    <h3 className="title">{film.title}</h3> 
                    <p> <span>Episode Number: </span> {film.episodeID}</p>
                    <p> <span>Release Date: </span> {film.releaseDate}</p>
                    <p> <span>Director: </span> {film.director}</p>
                </div>
            </Link>
        })}
    </div>
}
