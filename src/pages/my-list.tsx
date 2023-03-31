import Head from "next/head"
import { useRecoilValue } from "recoil"
import { modalState } from "../../atoms/modalAtom"
import Header from "../../components/Header"
import Modal from "../../components/Modal"
import Row from "../../components/Row"
import useAuth from "../../hooks/useAuth"
import useList from "../../hooks/useList"

function myList() {
    const { user } = useAuth()
    const list = useList(user?.uid)
    const showModal = useRecoilValue(modalState)

  return (
    <div>
        <Head>
            My List - Netflix
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header/>

        <div className="mx-4 lg:mx-12 mt-16 md:mt-24">
            {list.length > 0 && <Row title="My List" movies={list} type="grid" />}
        </div>
        { showModal && <Modal/> }
    </div>
  )
}

export default myList