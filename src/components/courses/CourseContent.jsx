const CourseContent = ({ title, description, imgSrc, materialsURL, ytURL }) => {
  return (
    <div className="text-[#164863] mt-[100px]">
      <div className="p-6 border border-[#164863] rounded-lg">
        <h2 className="text-3xl font-bold">{title}</h2>
        <a href={ytURL} target="_blank" rel="noopener noreferrer">
          <img
            src={imgSrc}
            alt="course-details"
            className="w-full mt-4 h-[300px] object-cover rounded"
          />
        </a>
        <p className="text-xl mt-4">
          {description}
        </p>
      </div>

      <div className="px-4">
        <div className="mt-8 border rounded p-6 border border-[#164863]">
          <a href={materialsURL} className="text-3xl underline font-bold my-4" target="_blank" rel="noopener noreferrer">Course Materials</a>
        </div>
        <div className="mt-8 border rounded p-6 border border-[#164863]">
          <a href={ytURL} className="text-3xl underline font-bold my-4" target="_blank" rel="noopener noreferrer">Course Syllabus</a>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
