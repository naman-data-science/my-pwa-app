import { useState } from 'react'
import topStripImg  from '../assets/role-gamusa-strip.png'
import rightBrooch  from '../assets/upper-right-gamosa.png'
import grandmaImg   from '../assets/namaskar-grandma.png'
import remMedImg    from '../assets/rem-med.png'
import remFoodImg   from '../assets/rem-food.png'
import remDocImg    from '../assets/rem-doc.png'
import remWalkImg   from '../assets/rem-walk.png'
import sceneryImg   from '../assets/role-bottom-scenery.png'
import './ReminderPage.css'

const INITIAL_REMINDERS = [
  { id: 'med',  labelAs: 'ঔষধ',       labelEn: 'Medicine', time: '08:00', img: remMedImg,  color: 'green'  },
  { id: 'food', labelAs: 'খাদ্য', labelEn: 'Food',     time: '10:00', img: remFoodImg, color: 'red'    },
  { id: 'doc',  labelAs: 'ডাক্তৰ', labelEn: 'Doctor',  time: '12:00', img: remDocImg,  color: 'orange' },
  { id: 'walk', labelAs: 'হাঁটিব', labelEn: 'Walk',    time: '18:00', img: remWalkImg, color: 'green'  },
]

function fmt(t) {
  const [h, m] = t.split(':')
  const hour = parseInt(h, 10)
  const display = hour % 12 || 12
  return display + ':' + m
}

function ReminderPage({ onBack }) {
  const [reminders, setReminders] = useState(INITIAL_REMINDERS)
  const [editId, setEditId]       = useState(null)
  const [draft,  setDraft]        = useState('')

  const openEdit = (rem) => { setEditId(rem.id); setDraft(rem.time) }
  const saveEdit = () => {
    setReminders(prev => prev.map(r => r.id === editId ? { ...r, time: draft } : r))
    setEditId(null)
  }

  const editing = reminders.find(r => r.id === editId)

  return (
    <div className="rem-viewport">
      <div className="rem-card">
        {/* Top Gamusa strip */}
        <div className="rem-top-border" aria-hidden="true">
          <img src={topStripImg} alt="" className="rem-top-strip" />
        </div>

        {/* Right brooch â€” behind centre content */}
        <img src={rightBrooch} alt="" aria-hidden="true" className="rem-right-brooch" />

        {/* Home button */}
        <button className="rem-home-btn" onClick={onBack} aria-label="Back to home">
          <span aria-hidden="true">⌂</span>
        </button>

        {/* Scrollable centre */}
        <div className="rem-center">
          <h1 className="rem-title">মোৰ মনত পেলোৱা</h1>

          {/* Enlarged Avatar without redundant dialogue box */}
          <div className="rem-avatar-wrap">
            <img src={grandmaImg} alt="Grandma" className="rem-avatar" />
          </div>

          {/* Reminder cards */}
          <ul className="rem-list" role="list">
            {reminders.map(rem => (
              <li key={rem.id} className="rem-list-item">
                <button
                  className={'rem-card-btn rem-card-btn--' + rem.color}
                  onClick={() => openEdit(rem)}
                  aria-label={rem.labelEn + ' reminder at ' + fmt(rem.time) + ', tap to edit'}
                >
                  <div className={'rem-icon-wrap rem-icon-wrap--' + rem.color}>
                    <img src={rem.img} alt={rem.labelEn} className="rem-icon-img" />
                  </div>
                  <div className="rem-card-text">
                    <span className="rem-card-label">{rem.labelAs}</span>
                    <span className={'rem-card-time rem-card-time--' + rem.color}>
                      <svg className="rem-clock-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                      {fmt(rem.time)}
                    </span>
                  </div>
                  <span className="rem-chevron" aria-hidden="true">›</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom scenery */}
        <footer className="rem-scenery" aria-hidden="true">
          <img src={sceneryImg} alt="" className="rem-scenery-img" />
        </footer>
      </div>

      {/* Time-edit modal */}
      {editId && (
        <div
          className="rem-overlay"
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && setEditId(null)}
        >
          <div className="rem-modal">
            <p className="rem-modal-name">{editing?.labelAs}</p>
            <p className="rem-modal-sub">{editing?.labelEn}</p>
            <input
              type="time"
              className="rem-time-input"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              autoFocus
            />
            <div className="rem-modal-actions">
              <button className="rem-modal-cancel" onClick={() => setEditId(null)}>বাতিল</button>
              <button className="rem-modal-save"   onClick={saveEdit}>ৰাখক</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReminderPage