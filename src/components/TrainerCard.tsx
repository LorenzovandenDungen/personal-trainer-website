import React from 'react';

interface TrainerCardProps {
  name: string;
  specialty: string;
  image: string;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ name, specialty, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {specialty}
        </p>
      </div>
    </div>
  );
};

export default TrainerCard;
