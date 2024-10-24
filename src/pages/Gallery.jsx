import React, { useState } from 'react';
import ImageCarousel from '../Components/ImageCarousel';
import { sports1, sports2, sports3, sports4, sports5 } from '../assets/sports';
import { sanskrit1, sanskrit2, sanskrit3, sanskrit4, sanskrit5 } from '../assets/Sanskrit';

const Gallery = () => {
  // State to track which event's photos are expanded (for smaller screens)
  const [expandedEventIndex, setExpandedEventIndex] = useState(null);

  const galleryData = [
    {
      eventTitle: 'संस्कृत महोत्सव',
      images: [
        { id: 1, src: sanskrit1, alt: 'Sanskrit Mohatsav 1', caption: 'संस्कृत समूह नृत्य' },
        { id: 2, src: sanskrit2, alt: 'Sanskrit Mohatsav 2', caption: 'संस्कृत वाद-विवाद' },
        { id: 3, src: sanskrit3, alt: 'Sanskrit Mohatsav 3', caption: 'संस्कृत नृत्य' },
        { id: 4, src: sanskrit4, alt: 'Sanskrit Mohatsav 4', caption: 'संस्कृत नाटक' },
        { id: 5, src: sanskrit5, alt: 'Sanskrit Mohatsav 5', caption: 'पुरस्कार और प्रमाणपत्र वितरण' },
      ],
    },
    {
      eventTitle: 'खेल महाकुंभ 2024-25',
      images: [
        { id: 6, src: sports1, alt: 'Sports Day 1', caption: 'न्याय पंचायत बैगनियाँ' },
        { id: 7, src: sports2, alt: 'Sports Day 2', caption: 'कबड्डी' },
        { id: 8, src: sports3, alt: 'Sports Day 3', caption: 'लंबी कूद' },
        { id: 9, src: sports4, alt: 'Sports Day 4', caption: 'वॉलीबॉल ' },
        { id: 10, src: sports5, alt: 'Sports Day 5', caption: 'ट्रैक और फील्ड' },
      ],
    },
  ];

  const toggleEvent = (index) => {
    setExpandedEventIndex(expandedEventIndex === index ? null : index);
  };

  return (
    <>
      <div className=" my-4 bg-gray-100">
        <h2 className="text-3xl text-center font-bold text-[#003366] mb-6 pt-4">School Gallery</h2>
        <div className="container mx-auto px-4 space-y-10">
          {galleryData.map((event, eventIndex) => (
            <div key={eventIndex}>
              <h3 className="text-2xl font-semibold text-center text-[#003366] mb-4">{event.eventTitle}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {/* For larger screens (md and above), show all images */}
                {expandedEventIndex === eventIndex || window.innerWidth >= 768 ? (
                  event.images.map((image) => (
                    <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
                      />
                      <div className="p-2 bg-white">
                        <p className="text-center text-gray-700 font-medium">{image.caption}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  // Show only the first image if not expanded and on small screens
                  <div
                    className="overflow-hidden rounded-lg shadow-lg"
                    onClick={() => toggleEvent(eventIndex)}
                  >
                    <img
                      src={event.images[0].src}
                      alt={event.images[0].alt}
                      className="w-full h-64 object-cover cursor-pointer transform hover:scale-105 transition duration-500 ease-in-out"
                    />
                    <div className="p-2 bg-white">
                      <p className="text-center text-gray-700 font-medium">{event.images[0].caption}</p>
                      <p className="text-center text-blue-500 cursor-pointer">Show more...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <ImageCarousel/> */}
    </>
  );
};

export default Gallery;
