function CaregiverHome({ onChangeRole }) {
  return (
    <div style={{ padding: '24px', textAlign: 'center' }}>
      <h1>Caregiver Dashboard</h1>
      <p>Login + dashboard go here.</p>

      {/* Dev-only for now — remove once role is locked in for real users */}
      <button onClick={onChangeRole} style={{ marginTop: '24px' }}>
        ← Back to role selection
      </button>
    </div>
  )
}

export default CaregiverHome