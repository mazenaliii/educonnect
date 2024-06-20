const CourseContent = () => {
  return (
    <div className="text-[#164863]">
      <div className="p-6 border border-[#164863] rounded-lg">
        <h2 className="text-3xl font-bold">Programming 1</h2>

        <img
          src="/images/course-details.png"
          alt="course-details"
          className="w-full mt-4"
        />
        <p className="text-xl">
          the course introduces students to the fundamentals of computer
          programming.
        </p>
      </div>

      <div className="px-4">
        <div className="mt-8">
          <h2 className="text-3xl font-bold my-4">Course Syllabus</h2>
          <h2>
            <button
              type="button"
              class="flex items-center justify-between w-full p-3 font-medium text-[#1D7A85] border border-[#1D7A85] rounded-xl"
            >
              <span>Lecture 1 : introduction to Programming</span>
              <svg
                dataAccordionIcon
                class="w-3 h-3 rotate-180 shrink-0"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold my-4">Course Materials</h2>
          <h2>
            <button
              type="button"
              class="flex items-center justify-between w-full p-3 font-medium text-[#1D7A85] border border-[#1D7A85] rounded-xl"
            >
              <span>Video 1 : Programming Concepts</span>
              <svg
                dataAccordionIcon
                class="w-3 h-3 rotate-180 shrink-0"
                ariaHidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold">Comments</h2>

          <textarea className="border border-[#164863] p-4 bg-[#1D7A850D] w-full mt-4 rounded-xl h-44"></textarea>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
