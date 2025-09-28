import {useHistory} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => {
  const history = useHistory()

  const onClickStartTest = () => {
    history.push('/tests')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Early Detection, Better Protection</h1>
          <img
            src="https://cdn.pixabay.com/photo/2022/10/07/06/46/brain-7504289_1280.jpg"
            alt="brain visual"
            className="home-mobile-img"
          />
          <p className="home-description">
            Our AI-powered web application helps identify early signs of
            dementia by analyzing speech, memory, and cognitive patterns. With
            multilingual support, secure data handling, and easy-to-use design,
            it empowers individuals and families to take timely action for
            better cognitive health.
          </p>
          <button
            type="button"
            className="shop-now-button"
            onClick={onClickStartTest}
          >
            Start Test
          </button>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2022/10/07/06/46/brain-7504289_1280.jpg"
          alt="brain visual"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
