import React from 'react';
import TrainerCard from './TrainerCard';

const trainers = [
  { name: 'John Doe', specialty: 'Krachttraining', image: '/path/to/image1.jpg' },
  { name: 'Jane Smith', specialty: 'Yoga', image: '/path/to/image2.jpg' },
  // Voeg meer trainers toe indien nodig
];

const TrainerList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Onze Trainers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trainers.map((trainer, index) => (
          <TrainerCard key={index} name={trainer.name} specialty={trainer.specialty} image={trainer.image} />
        ))}
      </div>
    </div>
  );
};

export default TrainerList;
