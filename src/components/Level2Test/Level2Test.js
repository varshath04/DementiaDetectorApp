import Header from '../Header'
import './index.css'

const Level2Test = () => (
  <>
    <Header />
    <div className="test-container">
      <h1 className="test-heading">🧠 Level 2 Cognitive Screening</h1>
      <p className="test-description">
        This test includes Clock Drawing, Trail Making, Verbal Fluency, and
        Speech Analysis. Designed for deeper cognitive assessment.
      </p>
      {/* Add your test logic or UI here */}
    </div>
  </>
)

export default Level2Test
