import photoBan from "../assets/img/banniere.jpg"
import photoBan1 from "../assets/img/banniere1.png"
import photoBan2 from "../assets/img/banniere2.png"
import "./home.css"
import Articles from "../components/Articles"

function Home() {
  return (
    <div>
      <div className="containerBanniere flex justify-center">
        <img  src={photoBan} alt="photoBanniere" width="1000"/>
      </div>
      <div className="secondaryBanniere flex justify-center">
        <img src={photoBan1} alt="photoBanniere" />
        <img src={photoBan2} alt="photoBanniere" />
      </div>
      <Articles/>
    </div>
  )
}

export default Home