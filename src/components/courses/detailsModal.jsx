import React from 'react';

const DetailsModal = ({ isOpen, onClose, title, description, materials }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-1/2 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose} className="text-black text-2xl">&times;</button>
        </div>
        <p>{description}</p>
        {materials && materials.length > 0 && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Subject Materials:</h3>
            <ul className="list-disc list-inside mt-[30px] mb-[20px]">
              {materials.map((material, index) => (
                <li key={index}>
                  <a href={material.url} target="_blank" rel="noopener noreferrer">
                    {material.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsModal;
