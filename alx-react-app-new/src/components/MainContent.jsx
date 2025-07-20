import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ backgroundColor: '#e6f7ff', padding: '20px' }}>
      <p style={{ fontSize: '18px', marginBottom: '20px' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      <UserProfile name="John Doe" age={28} bio="Loves traveling and exploring new cities." />
    </main>
  );
}
