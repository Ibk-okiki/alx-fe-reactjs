// src/components/MainContent.jsx
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#e6f7ff' }}>
      <UserProfile name="John Doe" age={28} bio="Loves traveling and exploring new cities." />
      <UserProfile name="Jane Smith" age={32} bio="Enjoys food, culture, and architecture." />
    </main>
  );
}

export default MainContent;
