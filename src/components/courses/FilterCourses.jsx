import React, { useState } from 'react';
import CourseCard from './CourseCard'; // Adjust the import path as necessary
import DetailsModal from './detailsModal'; // Adjust the import path as necessary

const FilterCourses = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    setSelectedCourse(null); // Reset selected course when level changes
  };

  const handleSemesterClick = (semester) => {
    setSelectedSemester(semester);
    setSelectedCourse(null); // Reset selected course when semester changes
  };

  const onClick = (course) => {
    setSelectedCourse(course);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  }

  // هنا كل المواد اللي عاوزة تنضاف بالاسم والوصف ولينك صورة والماتريالز
  const subjects = {
    first: {
      first: [
        {
          title: 'Subject 13',
          description: 'Description for Subject 13',
          imgSrc: 'path/to/image13.jpg',
          materials: [
            { name: 'Material 25', url: 'http://example.com/material25' },
            { name: 'Material 26', url: 'http://example.com/material26' }
          ]
        }, {
          title: 'Subject 13',
          description: 'Description for Subject 13',
          imgSrc: 'path/to/image13.jpg',
          materials: [
            { name: 'Material 25', url: 'http://example.com/material25' },
            { name: 'Material 26', url: 'http://example.com/material26' }
          ]
        }, {
          title: 'Subject 13',
          description: 'Description for Subject 13',
          imgSrc: 'path/to/image13.jpg',
          materials: [
            { name: 'Material 25', url: 'http://example.com/material25' },
            { name: 'Material 26', url: 'http://example.com/material26' }
          ]
        }, {
          title: 'Subject 13',
          description: 'Description for Subject 13',
          imgSrc: 'path/to/image13.jpg',
          materials: [
            { name: 'Material 25', url: 'http://example.com/material25' },
            { name: 'Material 26', url: 'http://example.com/material26' }
          ]
        }, {
          title: 'Subject 13',
          description: 'Description for Subject 13',
          imgSrc: 'path/to/image13.jpg',
          materials: [
            { name: 'Material 25', url: 'http://example.com/material25' },
            { name: 'Material 26', url: 'http://example.com/material26' }
          ]
        },
        {
          title: 'Subject 14',
          description: 'Description for Subject 14',
          imgSrc: 'path/to/image14.jpg',
          materials: [
            { name: 'Material 27', url: 'http://example.com/material27' },
            { name: 'Material 28', url: 'http://example.com/material28' }
          ]
        },
        {
          title: 'Subject 15',
          description: 'Description for Subject 15',
          imgSrc: 'path/to/image15.jpg',
          materials: [
            { name: 'Material 29', url: 'http://example.com/material29' },
            { name: 'Material 30', url: 'http://example.com/material30' }
          ]
        },
      ],
      second: [
        {
          title: 'Subject 16',
          description: 'Description for Subject 16',
          imgSrc: 'path/to/image16.jpg',
          materials: [
            { name: 'Material 31', url: 'http://example.com/material31' },
            { name: 'Material 32', url: 'http://example.com/material32' }
          ]
        },
        {
          title: 'Subject 17',
          description: 'Description for Subject 17',
          imgSrc: 'path/to/image17.jpg',
          materials: [
            { name: 'Material 33', url: 'http://example.com/material33' },
            { name: 'Material 34', url: 'http://example.com/material34' }
          ]
        },
        {
          title: 'Subject 18',
          description: 'Description for Subject 18',
          imgSrc: 'path/to/image18.jpg',
          materials: [
            { name: 'Material 35', url: 'http://example.com/material35' },
            { name: 'Material 36', url: 'http://example.com/material36' }
          ]
        },
      ],
    },
    second: {
      first: [
        {
          title: 'Subject 7',
          description: 'Description for Subject 7',
          imgSrc: 'path/to/image7.jpg',
          materials: [
            { name: 'Material 13', url: 'http://example.com/material13' },
            { name: 'Material 14', url: 'http://example.com/material14' }
          ]
        },
        {
          title: 'Subject 8',
          description: 'Description for Subject 8',
          imgSrc: 'path/to/image8.jpg',
          materials: [
            { name: 'Material 15', url: 'http://example.com/material15' },
            { name: 'Material 16', url: 'http://example.com/material16' }
          ]
        },
        {
          title: 'Subject 9',
          description: 'Description for Subject 9',
          imgSrc: 'path/to/image9.jpg',
          materials: [
            { name: 'Material 17', url: 'http://example.com/material17' },
            { name: 'Material 18', url: 'http://example.com/material18' }
          ]
        },
      ],
      second: [
        {
          title: 'Subject 10',
          description: 'Description for Subject 10',
          imgSrc: 'path/to/image10.jpg',
          materials: [
            { name: 'Material 19', url: 'http://example.com/material19' },
            { name: 'Material 20', url: 'http://example.com/material20' }
          ]
        },
        {
          title: 'Subject 11',
          description: 'Description for Subject 11',
          imgSrc: 'path/to/image11.jpg',
          materials: [
            { name: 'Material 21', url: 'http://example.com/material21' },
            { name: 'Material 22', url: 'http://example.com/material22' }
          ]
        },
        {
          title: 'Subject 12',
          description: 'Description for Subject 12',
          imgSrc: 'path/to/image12.jpg',
          materials: [
            { name: 'Material 23', url: 'http://example.com/material23' },
            { name: 'Material 24', url: 'http://example.com/material24' }
          ]
        },
      ],
    },
    third: {
      first: [
        {
          title: 'Subject 13',
          description: 'Description for Subject 13',
          imgSrc: 'path/to/image13.jpg',
          materials: [
            { name: 'Material 25', url: 'http://example.com/material25' },
            { name: 'Material 26', url: 'http://example.com/material26' }
          ]
        },
        {
          title: 'Subject 14',
          description: 'Description for Subject 14',
          imgSrc: 'path/to/image14.jpg',
          materials: [
            { name: 'Material 27', url: 'http://example.com/material27' },
            { name: 'Material 28', url: 'http://example.com/material28' }
          ]
        },
        {
          title: 'Subject 15',
          description: 'Description for Subject 15',
          imgSrc: 'path/to/image15.jpg',
          materials: [
            { name: 'Material 29', url: 'http://example.com/material29' },
            { name: 'Material 30', url: 'http://example.com/material30' }
          ]
        },
      ],
      second: [
        {
          title: 'Subject 16',
          description: 'Description for Subject 16',
          imgSrc: 'path/to/image16.jpg',
          materials: [
            { name: 'Material 31', url: 'http://example.com/material31' },
            { name: 'Material 32', url: 'http://example.com/material32' }
          ]
        },
        {
          title: 'Subject 17',
          description: 'Description for Subject 17',
          imgSrc: 'path/to/image17.jpg',
          materials: [
            { name: 'Material 33', url: 'http://example.com/material33' },
            { name: 'Material 34', url: 'http://example.com/material34' }
          ]
        },
        {
          title: 'Subject 18',
          description: 'Description for Subject 18',
          imgSrc: 'path/to/image18.jpg',
          materials: [
            { name: 'Material 35', url: 'http://example.com/material35' },
            { name: 'Material 36', url: 'http://example.com/material36' }
          ]
        },
      ],
    },
    fourth: {
      first: [
        {
          title: 'Big Data',
          description: 'Description for Big Data',
          imgSrc: 'https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/694991_cDO5wuA0NdevLb45zHRvog.jpeg',
          materials: [
            { name: 'All PDF Materials', url: 'https://drive.google.com/drive/folders/1azWoy2bGNJA5407ss29e7xbPWb2fT36b' },
          ]
        },
        {
          title: 'Business Analytics',
          description: 'Description for Business Analytics',
          imgSrc: 'https://www.cio.com/wp-content/uploads/2023/05/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-orig-7.jpg?quality=50&strip=all&w=1024',
          materials: [
            { name: 'Part 1', url: 'https://drive.google.com/file/d/1xJnngA75UaMEgOe9-cujqLBrxMtC3FDP/view?usp=drive_link' },
            { name: 'Part 2', url: 'https://drive.google.com/file/d/1Uj7ELbC65H-wMvHCSa9d71C2hT0Tp4-7/view?usp=drive_link' },
            { name: 'Part 3', url: 'https://drive.google.com/file/d/14hvVDiwBGMdq9YIDkl0sfi7RO70kzfUi/view?usp=drive_link' },
            { name: 'Part 4', url: 'https://drive.google.com/file/d/10of4BsI8xE7zXCB8KxPZGb0HnE7A0IG_/view?usp=drive_link' },
            { name: 'Part 5', url: 'https://drive.google.com/file/d/1tK8HTQJD9ciMOWg7J_F75V_-g8889CMC/view?usp=drive_link' }
          ]
        },
        {
          title: 'Data Mining',
          description: 'Description for Data Mining',
          imgSrc: 'https://assets.datamation.com/uploads/2023/10/dm_20231023-open-source-data-mining-tools.png',
          materials: [
            { name: 'All PDF Materials', url: 'https://drive.google.com/drive/folders/1BGEErmw7jrszVPzI7QJyIo_BuN7MjTfc' },
          ]
        }, 
        {
          title: 'SW',
          description: 'Description for SW',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_Nr5ULY_VVSbvoUAEn2ELmyQjbEjC9zOQQ&s',
          materials: [
            { name: 'All PDF Materials', url: 'https://drive.google.com/drive/folders/1LAM71lHtYZalWybxXWxjYQs89YIXVjZ2' },
          ]
        },
        {
          title: 'Networks',
          description: 'Description for Networks',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPmrek8nAVz3qwabsVXqMz36OGofIeW5SnA&s',
          materials: [
            { name: 'Labs', url: 'https://drive.google.com/drive/folders/1nkTlCkJODcqHWPLd4DdVM4iNdpK6g22n?usp=drive_link' },
            { name: 'Network', url: 'https://drive.google.com/drive/folders/1ogDwaqrxcGdIsHqVH6pmctFsYFo6layB?usp=drive_link' },
            { name: 'All Materials', url: 'https://drive.google.com/drive/folders/1BJ0HBnDOI6Yu2GMNp5moeFAhLJDmM1ek' },
          ]
        },
        {
          title: 'IR',
          description: 'Description for IR',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScCdt_VAbF1C-OtqtmDpnB8e601D3h6sdqw&s',
          materials: [
            { name: 'All Materials', url: 'https://drive.google.com/drive/folders/1LTEEOnZSSsPAqLzaG2cRUqftj3WB9gQS' },
          ]
        },
      ],
      second: [
        {
          title: 'Common',
          description: 'Description for Common',
          imgSrc: 'https://storage-prtl-co.imgix.net/endor/articles/434/images/1663928047_shutterstock_2083362643.jpg?w=660&h=440&auto=format,compress&q=40',
          materials: [
            { name: 'Database Administraion', url: 'https://drive.google.com/drive/folders/1KFWkuSbhzvRoigVZPgIf-JPijge69s-t?usp=drive_link' },
            { name: 'Mobile Computing', url: 'https://drive.google.com/drive/folders/1HSGwhFwO7MrKldw0KWV0DZTUhaEXnl6_?usp=drive_link' },
            { name: 'Software Quality Assurance & Testing', url: 'https://drive.google.com/drive/folders/1LLTwQXnd7ppX5gw1yNTRr6O4164y3vOd?usp=drive_link' }
          ]
        },
        {
          title: 'CS',
          description: 'Description for CS',
          imgSrc: 'https://www.mtholyoke.edu/sites/default/files/styles/1170x780/public/news-images/COM_PopularMajors_Graphics_ComputerScience_010821.jpg?h=c74750f6&itok=tMas2dHw',
          materials: [
            { name: 'Advanced Knowledge Representation and Reasoning', url: 'https://drive.google.com/drive/folders/1y-tErAiehkgMALBilM9x62I4oOmdmTeO?usp=drive_link' },
            { name: 'Internet of Things', url: 'https://drive.google.com/drive/folders/1Cc5GZY3yEIiTRVzWTqzP8I-3vGjzGVm4?usp=drive_link' },
            { name: 'Parallel Computation', url: 'https://drive.google.com/drive/folders/1Nztzionyg7PmaBMo4u8rmW_jx6GN5Pv7?usp=drive_link' }
          ]
        },
        {
          title: 'IS',
          description: 'Description for IS',
          imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQeEbwcppaGfTd6zwdh1nYXldEHzBx7FN2eA&s',
          materials: [
            { name: 'E-commerce', url: 'https://drive.google.com/drive/folders/1obPp4TLtwKtb9WZBCVmSuu4l2pMKwLB2?usp=drive_link' },
            { name: 'Social Networking', url: 'https://drive.google.com/drive/folders/1_QqMN-dPslvly6jIay1WP9NKVCfVV4XN?usp=drive_link' }
          ]
        },
      ],
    },
  };

  const renderCourseCards = () => {
    if (selectedLevel && selectedSemester) {
      const courseList = subjects[selectedLevel.toLowerCase()][selectedSemester.toLowerCase()];
      return (
          <div className="card-container lg:w-[1000px] ">
            {courseList.map((course, index) => (
              <CourseCard
                key={index}
                course={course}
                title={course.title}
                description={course.description}
                imgSrc={course.imgSrc}
                onClick={() => onClick(course)}
              />
            ))}
          </div>
      )}
      return null;
    };

    return (
      <div className="">
        <DetailsModal
          isOpen={isOpen}
          onClose={closeModal}
          title={selectedCourse?.title}
          description={selectedCourse?.description}
          materials={selectedCourse?.materials}
        />
        <div className="flex md:flex-row flex-col gap-9">
          <div className="flex flex-col gap-9">
            <div className="border-2 border-[#1D7A85] rounded-xl pt-2">
              <div className="border-b border-[#1D7A85]">
                <h2 className="font-bold text-2xl text-[#1D7A85] pl-4 pb-2">Level</h2>
              </div>
              {['First', 'Second', 'Third', 'Fourth'].map((level) => (
                <div
                  key={level}
                  className={`border-b border-[#1D7A85] ${selectedLevel === level.toLowerCase() ? 'bg-[#E0F7F8]' : ''}`}
                  onClick={() => handleLevelClick(level.toLowerCase())}
                >
                  <div className="flex justify-between items-center px-4 cursor-pointer">
                    <h2 className="text-lg text-[#1D7A85] pl-4 py-2">{level}</h2>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-2 border-[#1D7A85] rounded-xl pt-2">
              <div className="border-b border-[#1D7A85]">
                <h2 className="font-bold text-1xl text-[#1D7A85] pl-4 pb-2">Semester</h2>
              </div>
              {['First', 'Second'].map((semester) => (
                <div
                  key={semester}
                  className={`border-b border-[#1D7A85] ${selectedSemester === semester.toLowerCase() ? 'bg-[#E0F7F8]' : ''}`}
                  onClick={() => handleSemesterClick(semester.toLowerCase())}
                >
                  <div className="flex justify-between items-center px-4 cursor-pointer">
                    <h2 className="text-lg text-[#1D7A85] pl-4 py-2">{semester}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div >
            {renderCourseCards()}
          </div>
        </div>
      </div>
    );
  };

  export default FilterCourses;
