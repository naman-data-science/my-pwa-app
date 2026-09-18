import headerImg from '../assets/role-select-header.png'
import patientBtn from '../assets/role-patient-btn.png'
import caregiverBtn from '../assets/role-caregiver-btn.png'
import sceneryImg from '../assets/role-scenery-full.png'
import './RoleSelect.css'

function RoleSelect({ onSelect }) {
  return (
    <div className="role-select-viewport">
      <div className="role-select-card">
        {/* Top: AI Avatar with Assamese speech bubble */}
        <header className="role-avatar-section">
          <img
            src={headerImg}
            alt="আপুনি কোন হিচাপে ব্যৱহাৰ কৰিব? (Which role will you use as?)"
            className="role-avatar-img"
          />
        </header>

        {/* Center: Interactive Role Selection Cards */}
        <main className="role-cards-grid" role="group" aria-label="Role selection options">
          <button
            type="button"
            className="role-card-btn"
            onClick={() => onSelect('patient')}
            aria-label="পেচেণ্ট হিচাপে প্ৰৱেশ কৰক (Continue as Patient)"
          >
            <img
              src={patientBtn}
              alt="পেচেণ্ট (Patient)"
              className="role-card-img"
            />
          </button>

          <button
            type="button"
            className="role-card-btn"
            onClick={() => onSelect('caregiver')}
            aria-label="কেয়াৰগিভাৰ হিচাপে প্ৰৱেশ কৰক (Continue as Caregiver)"
          >
            <img
              src={caregiverBtn}
              alt="কেয়াৰগিভাৰ (Caregiver)"
              className="role-card-img"
            />
          </button>
        </main>

        {/* Bottom: River Scenery with traditional Gamusa embroidery border */}
        <footer className="role-scenery-section">
          <img
            src={sceneryImg}
            alt="Assam scenery with river, boat, and Gamusa border"
            aria-hidden="true"
            className="role-scenery-img"
          />
        </footer>
      </div>
    </div>
  )
}

export default RoleSelect