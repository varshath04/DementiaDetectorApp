import {useHistory} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Products = () => {
  const history = useHistory()

  const goToLevel1 = () => {
    history.push('/level1-test')
  }

  const goToLevel2 = () => {
    history.push('/level2-test')
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <div className="product-card">
          <h2 className="product-title">Level 1 Test</h2>
          <p className="product-description">
            Designed for quick, low-friction assessment of cognitive
            health—ideal for first-time users or older adults with limited tech
            experience.
          </p>
          <button type="button" className="view-button" onClick={goToLevel1}>
            Start Test
          </button>
        </div>

        <div className="product-card">
          <h2 className="product-title">Level 2 Test</h2>
          <p className="product-description">
            Designed for users seeking a deeper assessment of cognitive health.
            This level includes clinically validated tasks that test memory,
            attention.
          </p>
          <button type="button" className="view-button" onClick={goToLevel2}>
            Start Test
          </button>
        </div>
      </div>
    </>
  )
}

export default Products
