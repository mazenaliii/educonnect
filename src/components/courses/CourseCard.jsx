import React from 'react';

const CourseCard = ({ course, title, description, imgSrc, onClick }) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow-2xl w-72 h-auto">
      <div className="h-48">
        <img src={`${imgSrc}`} alt="course" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col bg-[#164863] p-4 text-white flex-grow">
        <h1 className="text-2xl font-bold">{course?.title || title}</h1>
        <p className="ml-2 mt-3">{course?.description.slice(0, 35) || description}...</p>
        <button className="p-2 bg-[#1D7A8585] w-full rounded-lg border border-white mt-6 self-end" onClick={() => onClick()}>
          View Content
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
