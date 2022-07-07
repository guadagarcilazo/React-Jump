import peliculas from './peliculas.json' //el nombre peliculas que le puse al json que es
import './PeliculasGrilla.css'
import {PeliculasCard} from './PeliculasCard'

export function PeliculasGrilla(){
console.log (peliculas) //para que es este console.log--- guarde las peliculas en una variable?
return (
    <ul className='GrillaPeliculas'>
        {peliculas.map((peliculas)=>(
            <PeliculasCard key={peliculas.id} peliculas={peliculas} /> //Mas explicacion de esto
        )
        )}
    </ul>
)
}