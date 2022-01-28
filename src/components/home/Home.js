import React, {useEffect, useState} from "react";


export const Home = () => {
    const [characters, getCharacters] = useState([])

    const render = () => {
        return fetch(`https://rickandmortyapi.com/api/character/?page=1`)
        .then(res => res.json())
        .then((data) => {
            getCharacters(data)
        })
        
    }
    
    useEffect( () => {
        render()
    }, [])

    return (
        <>
            <h1>Page</h1>
            {characters?.results?.map((character) => {
                return(<>
                  <div>{character.name}</div>  
                </>)
            })}
            {console.log(characters)}
        </>
    )
}