function PatientHome({ onChangeRole }) {
  return (
    <div style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Patient Home</h1>
      <p>Games and Reminders sections go here.</p>

      {/* Dev-only for now — remove once role is locked in for real users */}
      <button onClick={onChangeRole} style={{ marginTop: '24px' }}>
        ← Back to role selection
      </button>
    </div>
  )
}

export default PatientHome