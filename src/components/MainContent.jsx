import React from 'react';
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef', minHeight: '300px' }}>
      <h2 style={{ textAlign: 'center' }}>Welcome to My Favorite Cities Page</h2>
      <p style={{ textAlign: 'justify' }}>
        Here are some people who love to explore new cities:
      </p>

      <UserProfile name="Erick" age={14} bio="Loves exploring new cities and cultures." />
      <UserProfile name="Amina" age={13} bio="Enjoys taking photos of city skylines." />
      <UserProfile name="Brian" age={15} bio="Dreams of visiting Tokyo someday." />
    </main>
  );
}

export default MainContent;

