import { DocumentData } from 'firebase/firestore'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import { Movie } from '../typing'

interface Props {
  movie: Movie | DocumentData
}

function Thumbnail({ movie }: Props) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div
    onClick={() => {
      setCurrentMovie(movie)
      setShowModal(true)
    }}
    className="relative h-28 min-w-[180px] cursor-pointer transition transform-cpu z-20 md:hover:z-40 duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-125"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        fill alt={''}
        sizes="100vh"
        />
    </div>
  )
}

export default Thumbnail