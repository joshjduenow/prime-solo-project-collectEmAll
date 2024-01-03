import React from 'react';
import "./MyCards.css"

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

export default function MyCards() {
  return (
    <div className="container">
      <h2>My Cards</h2>
    </div>
  );
}

