// src/components/Level1Test/index.js
import Header from '../Header'
import './index.css'

const Level1Test = () => (
  <>
    <Header />
    <div className="test-container">
      <h1 className="test-heading">🧠 Level 1 Cognitive Screening</h1>
      <p className="test-description">
        This test includes memory recall, orientation questions, and basic
        attention tasks. Designed for quick screening and elderly-friendly
        interaction.
      </p>
    </div>
  </>
)

export default Level1Test
