function GamesPage({ onBack }) {
  return (
    <div style={{ padding: '24px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Games</h1>
      <p style={{ color: '#666', marginTop: '8px' }}>Games page coming soon...</p>
      <button
        onClick={onBack}
        style={{
          marginTop: '32px',
          padding: '10px 24px',
          border: '2px solid #b83a24',
          borderRadius: '12px',
          background: 'transparent',
          color: '#b83a24',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Back
      </button>
    </div>
  )
}

export default GamesPage