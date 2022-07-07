import './PeliculasCard.css'

export function PeliculasCard({peliculas}){

    const imgUrl = 'https://image.tmdb.org/t/p/w300'+peliculas.poster_path
    return <li className='cardPelis'>
        
        <img  className='cardImagen' src={imgUrl} alt={peliculas.title} />
        <div>{peliculas.title} {peliculas.original_language}</div>
    </li>
}