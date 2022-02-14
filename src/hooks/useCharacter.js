import { useQuery } from "react-apollo";
import gql from "graphql-tag";

//creating a schema to query the data regarding certain film and its characters
const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){ 
        film(id:$id){
            id
            title
            openingCrawl
            characterConnection{
              characters{
                name
                mass
                height
                eyeColor
                gender
                hairColor
              }
            }
          }
        }
`;

export const useCharacter = (id) => {
    const {data, error, loading} = useQuery(GET_CHARACTER, {
      //getting film specific data on basis of id returned by all film list(Movies.js)
        variables: {
            id
        }
    });

    return{
        data,
        error,
        loading
    }
}
