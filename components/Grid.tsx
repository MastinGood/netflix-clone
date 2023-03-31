import { DocumentData } from "firebase/firestore"
import { Movie } from "../typing"
import Thumbnail from "./Thumbnail"

interface Props {
    title: string,
    movies: Movie[] | DocumentData[]
}

function Grid({ title, movies } : Props) {
  return (
    <div>
        <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
            {title}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-2">   
            {
                movies.map((movie) => (
                    <div className="relative">
                        <Thumbnail key={movie.id} movie={movie} />
                    </div>
                ))
            } 
        </div>
    </div>
  )
}

export default Grid