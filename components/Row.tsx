import { DocumentData } from "firebase/firestore";
import { Movie } from "../typing";
import Carousel from "./Carousel";
import Grid from "./Grid";

interface Props {
    title : string,
    movies: Movie[] | DocumentData[],
    type : string
}

function Row({title, movies, type} : Props) {
    return (
        <div>
            {(type === "carousel") ? <Carousel title={title} movies={movies}/> : <Grid title={title} movies={movies}/>}
        </div>
    )
}

export default Row