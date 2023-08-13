import React from 'react';
import './card.css';

const cardsData = [
  {
    title: 'Card 1',
    content:
      'This is a short piece of content.This is a very long piece of content that will need the smallest text size.This is a very long piece of content that will need the smallest text size.',
    color: '#e74c3c', // Blue colore74c3c
  },
  {
    title: 'Card 2',
    content:
      'This is a longer piece of content that will require smaller text size.This is a longer piece of content that will require smaller text size.This is a very long piece of content that will need the smallest text size.This is a very long piece of content that will need the smallest text size.',
    color: '#3498db', // Red color
  },
  {
    title: 'Card 3',
    content:
      'This is a very long piece of content that will need the smallest text size.This is a very long piece of content that will need the smallest text size.This is a very long piece of content that will need the smallest text size.This is a very long piece of content that will need the smallest text size.This is a very long piece of content that will need the smallest text size.This is a very long piece of content that will need the smallest text size.',
    color: '#2ecc71', // Green color
  },
];

const Card = ({ title, content, color }) => {
  let textSize;

  if (content.length < 50) {
    textSize = 'h2';
  } else if (content.length < 300) {
    textSize = 'h3';
  } else if (content.length < 500) {
    textSize = 'h4';
  } else {
    textSize = 'p';
  }

  return (
    <div className="card-container">
      <div className="card" style={{ borderColor: color }}>
        <div className={`content-text ${textSize}`}>{content}</div>
      </div>
      <div className="box">
        <div className="box-icon" style={{ color: color }}></div>
        <div className="box-text">{title}</div>
      </div>
    </div>
  );
};

const CardsComponent = () => {
  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsComponent;
