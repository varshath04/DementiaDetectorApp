// src/components/Reports/index.js
import Header from '../Header'
import './index.css'

const Reports = () => (
  <>
    <Header />
    <div className="reports-container">
      <h1 className="reports-heading">
        Reports of the previously appeared Tests
      </h1>
      <p className="reports-description">
        Here you will find the score of the test you previously appeared, with
        score of the test.
      </p>

      <p className="reports-note">
        This section is under development. Soon, users will be able to download
        personalized reports and share them with healthcare providers.
      </p>
    </div>
  </>
)

export default Reports
