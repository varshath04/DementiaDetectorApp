// Write your JS code here
import Header from '../Header'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <div className="about-container">
        <h1 className="about-heading">About DementiaDetector</h1>
        <p className="about-description">
          DementiaDetector is a web-based cognitive screening platform designed
          to identify early signs of dementia using AI-powered analytics. Built
          for accessibility, scalability, and clinical relevance, our solution
          empowers individuals and healthcare providers to take timely action
          toward cognitive wellness.
        </p>

        <h2 className="about-subheading">What We Offer</h2>
        <ul className="about-list">
          <li>
            <strong>Two-Level Cognitive Screening:</strong> Quick tests for
            memory, attention, and advanced clinical tasks like Clock Drawing
            and Verbal Fluency.
          </li>
          <li>
            <strong>AI-Driven Risk Scoring:</strong> ML models analyze response
            patterns, timing, and speech to generate age-adjusted dementia risk
            scores.
          </li>
          <li>
            <strong>Multi-Language Support:</strong> Available in major Indian
            languages to ensure inclusivity across regions.
          </li>
          <li>
            <strong>Personalized Guidance:</strong> Tailored brain-health tips
            or clinical referral recommendations based on test results.
          </li>
          <li>
            <strong>Secure & Scalable Deployment:</strong> Hosted on AWS with
            JWT authentication and Docker-based containerization.
          </li>
        </ul>

        <h2 className="about-subheading">Our Mission</h2>
        <p className="about-description">
          To democratize early dementia detection in India by combining clinical
          insight, user-centered design, and cutting-edge AI—making cognitive
          care accessible to all.
        </p>
      </div>
      <div className="prototype-card">
        <h3 className="prototype-title">🚧 Prototype Notice</h3>
        <p className="prototype-text">
          This application is currently a prototype developed for the Smart
          India Hackathon. It is undergoing active refinement and will be
          further enhanced to ensure maximum usability, accessibility, and
          comfort for elderly users across India.
        </p>
      </div>
    </div>
  </>
)

export default Cart
