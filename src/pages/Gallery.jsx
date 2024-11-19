import React, { useEffect, useState } from 'react';
import { sports1, sports2, sports3, sports4, sports5 } from '../assets/sports';
import { sanskrit1, sanskrit2, sanskrit3, sanskrit4, sanskrit5 } from '../assets/Sanskrit';
import { ETJ01, ETJ02, ETJ03, ETJ04, ETJ05, ETS01, ETS02, ETS03, ETS04, ETS05 } from '../assets/EducationTour';

const galleryData = [
  {
    eventTitle: 'संस्कृत महोत्सव',
    images: [
      { id: 1, src: sanskrit1, alt: 'Sanskrit Mohatsav 1', caption: 'संस्कृत समूह नृत्य', date :"15-Oct-2024" },
      { id: 2, src: sanskrit2, alt: 'Sanskrit Mohatsav 2', caption: 'संस्कृत वाद-विवाद' },
      { id: 3, src: sanskrit3, alt: 'Sanskrit Mohatsav 3', caption: 'संस्कृत नृत्य' },
      { id: 4, src: sanskrit4, alt: 'Sanskrit Mohatsav 4', caption: 'संस्कृत नाटक' },
      { id: 5, src: sanskrit5, alt: 'Sanskrit Mohatsav 5', caption: 'पुरस्कार और प्रमाणपत्र वितरण' },
    ],
  },
  {
    eventTitle: 'खेल महाकुंभ 2024-25',
    images: [
      { id: 6, src: sports1, alt: 'Sports Day 1', caption: 'न्याय पंचायत बैगनियाँ',date :"10-Oct-2024" },
      { id: 7, src: sports2, alt: 'Sports Day 2', caption: 'कबड्डी' },
      { id: 8, src: sports3, alt: 'Sports Day 3', caption: 'लंबी कूद' },
      { id: 9, src: sports4, alt: 'Sports Day 4', caption: 'वॉलीबॉल ' },
      { id: 10, src: sports5, alt: 'Sports Day 5', caption: 'ट्रैक और फील्ड' },
    ],
  },
  {
    eventTitle: 'शैक्षिक भ्रमण (9th, 10th) 2024-25',
    images: [
      { id: 11, src: ETJ01, alt: 'सूर्य मंदिर कटारमल', caption: 'सूर्य मंदिर कटारमल', date :"12-Nov-2024"},
      { id: 12, src: ETJ02, alt: 'शपथ ग्रहण', caption: 'शपथ ग्रहण' },
      { id: 13, src: ETJ03, alt: ' पाइन ओकिया (सूर्यकुंज)', caption: 'पाइन ओकिया (सूर्यकुंज)' },
      { id: 14, src: ETJ04, alt: ' जैव विविधता संरक्षण एवं प्रबंधन केंद्र', caption: 'जैव विविधता संरक्षण एवं प्रबंधन केंद्र' },
      { id: 15, src: ETJ05, alt: ' गोविंद बल्लभ पंत राष्ट्रीय हिमालयी पर्यावरण संस्थान', caption: 'गोविंद बल्लभ पंत राष्ट्रीय हिमालयी पर्यावरण संस्थान' },
    ],
  },
  {
    eventTitle: 'शैक्षिक भ्रमण (11th, 12th) 2024-25',
    images: [
      { id: 16, src: ETS01, alt: 'बैजनाथ मंदिर, बागेश्वर', caption: 'बैजनाथ मंदिर, बागेश्वर',date :"15-Nov-2024" },
      { id: 17, src: ETS02, alt: 'कोट भ्रामरी मंदिर', caption: 'कोट भ्रामरी मंदिर' },
      { id: 18, src: ETS03, alt: 'छात्रों द्वारा नौकायन', caption: 'छात्रों द्वारा नौकायन' },
      { id: 19, src: ETS04, alt: 'कौसानी', caption: 'कौसानी' },
      { id: 20, src: ETS05, alt: 'चाय बागान, कौसानी', caption: 'चाय बागान, कौसानी' },
    ],
  },
];
const Gallery = () => {
  // State to track which event's photos are expanded
  const [expandedEventIndex, setExpandedEventIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Update screen size on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle event expansion for mobile view
  const toggleEvent = (index) => {
    setExpandedEventIndex(expandedEventIndex === index ? null : index);
  };

  return (
    <div className="my-4 bg-gray-100">
  <h2 className="text-3xl text-center font-bold text-[#003366] mb-6 pt-4">School Gallery</h2>
  <div className="container mx-auto px-4 space-y-10">
    {galleryData.map((event, eventIndex) => (
      <div key={eventIndex}>
        <h3 className="text-2xl font-semibold text-center text-[#003366] mb-4">{event.eventTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {expandedEventIndex === eventIndex || !isMobile ? (
            event.images.map((image) => (
              <div key={image.id} className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-64 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
      />
      {/* Date Badge */}
      {image.date && (
        <div className="absolute top-2 left-2 bg-green-900 bg-opacity-75 text-white text-xs px-3 py-1 rounded-md">
          {image.date}
        </div>
      )}
      <div className="p-2 bg-white">
        <p className="text-center text-gray-700 font-medium">{image.caption}</p>
      </div>
    </div>
            ))
          ) : (
            <div
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer bg-white"
              onClick={() => toggleEvent(eventIndex)}
            >
              {/* Date Badge */}
              <div className="absolute top-2 left-2 bg-green-900 bg-opacity-75 z-50 z text-white text-xs px-3 py-1 rounded-md">
              {event.images[0].date}
              </div>
              {/* Main Image */}
              <img
                src={event.images[0].src}
                alt={event.images[0].alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition duration-500 ease-in-out"
              />
              {/* Card Details */}
              <div className="p-4 bg-white text-center">
                <p className="text-gray-700 font-medium">{event.images[0].caption}</p>
                <p className="text-blue-500 mt-4 font-semibold hover:underline">Show more...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Gallery;
