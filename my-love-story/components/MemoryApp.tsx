"use client";

import React, { useState, useEffect,  useMemo, } from 'react';
import { Heart, Camera, Music, Calendar, Map, Target, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import LocationMap from './LocationMap';





const MemoryApp = () => {
  const [activeSection, setActiveSection] = useState('timeline');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLoveNote, setShowLoveNote] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');
  const [hearts, setHearts] = useState([]);
  const [audio] = useState(new Audio('/song/us_song.mp3'));

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying, audio]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * 100,
          animationDuration: 3 + Math.random() * 3
        };
        return [...prevHearts, newHeart].slice(-20);
      });
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);
  

  const timelineEvents = useMemo(() => ([
    {
      date: '2024-12-31',
      title: 'პირველი შეხვედრა',
      description: 'როცა პირველად შევხვდით ...',
      image: '/images/first.jpg',
      location: { lat: 41.7151, lng: 44.8271 },
      category: 'firsts',
      specialMemory: 'პირველი დანახვისთანავე რაღაც ვიგრძენი...'
    },
    {
      date: '2025-01-02',
      title: 'პირველი სეირნობა',
      description: 'მესტიის პარკში გასეირნება',
      image: '/images/IMG_8703.PNG',
      location: { lat: 41.7151, lng: 44.8271 },
      category: 'firsts',
      specialMemory: 'ძაღლს ვეფერებოდით პარკში და ორივე ძალიან ვმორცხვობდით'
    },
    {
      date: '2025-01-03',
      title: 'პირველი საჩუქარი',
      description: 'სვანური კოშკის სუვენირი',
      image: '/images/iMG_6995.jpg',
      location: { lat: 41.7151, lng: 44.8271 },
      category: 'firsts',
      specialMemory: 'ძალიან გამიხარდა ასეთი ყურადღება შენგან, წარწერის აღმოჩენის შემდეგ კი ორმაგად ძვირფასი გახდა ჩემთვის.'
    },
    {
      date: '2025-01-06',
      title: 'პირველი კინო ერთად',
      description: 'საყვარელი ანიმაციური ფილმის ერთად ყურება',
      image: '/images/IMG_7045.jpg',
      location: { lat: 41.7151, lng: 44.8271 },
      category: 'firsts',
      specialMemory: 'ფილმზე მეტად ერთმანეთს ვუყურებდით'
    },
    {
      date: '2025-01-12',
      title: 'პირველი ყვავილები',
      description: 'ვარდისფერი ვარდები',
      image: '/images/IMG_7235.jpg',
      location: { lat: 41.7151, lng: 44.8271 },
      category: 'firsts',
      specialMemory: 'უსაზღვროდ ბედნიერი ვიყავი, იმის გამო რომ უსიტყვოდ მიხვდი რა მახარებს '
    },
    {
      date: '2025-01-18',
      title: 'პირველი ფუმფულა სათამაშო',
      description: 'უსაყვარლესი ვარდისფერი დათუნია',
      image: '/images/IMG_7362.jpg',
      location: { lat: 41.7151, lng: 44.8271 },
      category: 'firsts',
      specialMemory: 'კიდევ ერთხელ დავრწმუნდი როგორი ბედნიერია ჩემი შინაგანი ბავშვი შენთან.'
    }
  ]), []);

  const galleryPhotos = [
    {
      title: 'IMG_01',
      date: '2024-01-20',
      image: '/images/IMG_01.JPG',
      description: ''
    },
    {
      title: 'IMG_02',
      date: '2024-01-25',
      image: '/images/IMG_02.JPG',
      description: ''
    },
    {
      title: 'IMG_5904',
      date: '2024-02-01',
      image: '/images/IMG_5904.jpg',
      description: ''
    },
    {
      title: 'IMG_5905',
      date: '2024-02-05',
      image: '/images/IMG_5905.jpg',
      description: ''
    },
    {
      title: 'IMG_5913',
      date: '2024-02-08',
      image: '/images/IMG_5913.jpg',
      description: ''
    },
    {
      title: 'IMG_5924',
      date: '2024-02-12',
      image: '/images/IMG_5924.jpg',
      description: ''
    },
    {
      title: 'IMG_6004',
      date: '2024-02-15',
      image: '/images/IMG_6004.jpg',
      description: ''
    },
    {
      title: 'IMG_6008',
      date: '2024-02-18',
      image: '/images/IMG_6008.jpg',
      description: ''
    },
    {
      title: 'IMG_6036',
      date: '2024-02-21',
      image: '/images/IMG_6036.jpg',
      description: ''
    },
    {
      title: 'IMG_6995',
      date: '2024-02-24',
      image: '/images/IMG_6995.jpg',
      description: ''
    },
    {
      title: 'IMG_7045',
      date: '2024-02-27',
      image: '/images/IMG_7045.jpg',
      description: ''
    },
    {
      title: 'IMG_7060',
      date: '2024-03-01',
      image: '/images/IMG_7060.jpg',
      description: ''
    },
    {
      title: 'IMG_7203',
      date: '2024-03-04',
      image: '/images/IMG_7203.jpg',
      description: ''
    },
    {
      title: 'IMG_7210',
      date: '2024-03-07',
      image: '/images/IMG_7210.jpg',
      description: ''
    },
    {
      title: 'IMG_7212',
      date: '2024-03-10',
      image: '/images/IMG_7212.jpg',
      description: ''
    },
    {
      title: 'IMG_7219',
      date: '2024-03-13',
      image: '/images/IMG_7219.jpg',
      description: ''
    },
    {
      title: 'IMG_7221',
      date: '2024-03-16',
      image: '/images/IMG_7221.jpg',
      description: ''
    },
    {
      title: 'IMG_7224',
      date: '2024-03-19',
      image: '/images/IMG_7224.jpg',
      description: ''
    },
    {
      title: 'IMG_7235',
      date: '2024-03-22',
      image: '/images/IMG_7235.jpg',
      description: ''
    },
    {
      title: 'IMG_7327',
      date: '2024-03-25',
      image: '/images/IMG_7327.jpg',
      description: ''
    },
    {
      title: 'IMG_7362',
      date: '2024-03-28',
      image: '/images/IMG_7362.jpg',
      description: ''
    },
    {
      title: 'IMG_7376',
      date: '2024-03-31',
      image: '/images/IMG_7376.jpg',
      description: ''
    },
    {
      title: 'IMG_7403',
      date: '2024-04-03',
      image: '/images/IMG_7403.jpg',
      description: ''
    },
    {
      title: 'IMG_8622',
      date: '2024-04-09',
      image: '/images/IMG_8622.jpg',
      description: ''
    },
    {
      title: 'IMG_8703',
      date: '2024-04-12',
      image: '/images/IMG_8703.PNG',
      description: ''
    },
    {
      title: 'IMG_8704',
      date: '2024-04-12',
      image: '/images/IMG_8704.PNG',
      description: ''
    }
  ];
  
  const loveReasons = [
    "იმიტომ რომ ჯადოსნური ზღაპარი მაჩუქე",
    "იმიტომ რომ როცა შენთან ვარ სიმშვიდეს ვგრძნობ",
    "იმიტომ რომ შენთან ერთად მომავალი უფრო ლამაზია",
    "იმიტომ რომ ჩემი უსიტყვოდ გესმის",
    "იმიტომ რომ შენს გვერდით ჩემი თავის საუკეთესო ვერსია ვარ",
    "იმიტომ რომ ჩემთან ერთად ხეტიალი აირჩიე ამ სამყაროში",
    "იმიტომ რომ შენი თვალები ყველაფერს ამბობს",
    "იმიტომ რომ შენი გულწრფელობა განსაკუთრებულს გხდის",
    "იმიტომ რომ როცა შენთან ვარ ჩემი შინაგანი ბავშვი, ბედნიერი და თავისუფალია",
    "იმიტომ რომ ყოველ ჯერზე გამოგდის ჩემი გაღიმება",
    "იმიტომ რომ შენს გვერდით თავს დაცულად ვგრძნობ",
    "იმიტომ რომ შენთან ყველაფერი მარტივია",
    "იმიტომ რომ საუკეთესო მეგობარი ხარ",
    "იმიტომ რომ შენი ღიმილი მათბობს",
    "იმიტომ რომ შენთან ერთად ყველაფერი შესაძლებელია",
    "იმიტომ რომ ჩემი ცხოვრების ყველაზე ლამაზი ნაწილი ხარ",
    "იმიტომ რომ შენთან ერთად დრო სხვანაირად გადის",
    "იმიტომ რომ გჯერა ჩემი შესაძლებლობების",
    "იმიტომ რომ მიყვარხარ და სულ მეყვარები"
  ];

  const handleShowLoveNote = () => {
    if (!showLoveNote) {
      const randomReason = loveReasons[Math.floor(Math.random() * loveReasons.length)];
      setSelectedReason(randomReason);
      setShowLoveNote(true);
    }
  };

  const LoveNoteModal = () => {
    const closeModal = () => {
      setShowLoveNote(false);
      setTimeout(() => {
        setSelectedReason('');
      }, 300);
    };

    return (
      <div 
        className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${
          showLoveNote 
            ? 'opacity-100 pointer-events-auto bg-black/50' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <motion.div
          initial={false}
          animate={{
            scale: showLoveNote ? 1 : 0.8,
            opacity: showLoveNote ? 1 : 0
          }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0.2
          }}
          className="bg-white rounded-2xl p-8 max-w-md relative"
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <h3 className="text-2xl font-bold text-pink-600 mb-4">
            მიზეზი რატომ მიყვარხარ
          </h3>
          <p className="text-gray-700 leading-relaxed text-center text-xl">
            {selectedReason}
          </p>
          <div className="mt-6 flex justify-center">
            <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
          </div>
        </motion.div>
      </div>
    );
  };

  const LoveReasons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {loveReasons.map((reason, index) => (
        <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-pink-50">
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-center relative overflow-hidden">
            <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
              <Heart className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              {reason}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const PhotoGallery = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {galleryPhotos.map((photo, index) => (
        <div
          key={index}
          className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );

  const Timeline = () => (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300"></div>
      {timelineEvents.map((event, index) => (
        <div
          key={index}
          className={`mb-12 flex ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
        >
          <div className="w-1/2 px-8">
            <Card className="hover:shadow-xl transition-shadow transform hover:scale-102 duration-300">
              <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50">
                <CardTitle>{event.title}</CardTitle>
                <p className="text-sm text-gray-500">{event.date}</p>
              </CardHeader>
              <CardContent>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-700">{event.description}</p>
                {event.specialMemory && (
                  <div className="mt-4 p-3 bg-pink-50 rounded-lg italic text-gray-600">
                    "{event.specialMemory}"
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          <div className="absolute left-1/2 w-6 h-6 -ml-3 rounded-full bg-pink-500 shadow-lg border-4 border-white" />
        </div>
      ))}
    </div>
  );
    
  const VisionBoard = () => (
    <div className="flex flex-col items-center space-y-8 p-6">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
      შენთან ერთად ყველა წარმოსახვის რეალობად ქცევა მინდა...
      </h2>
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <img
          src="/images/vision-board.png"
          alt="ჩვენი მომავლის vision board"
          className="w-full h-auto object-contain"
        />
      </div>
      <p className="text-center text-gray-600 max-w-2xl">
        ჩემს მომავალს შენ გიკავშირებ
      </p>
    </div>
  );

  const FloatingHearts = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map(heart => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', x: `${heart.left}vw`, opacity: 0.8 }}
          animate={{ y: '-20vh', opacity: 0 }}
          transition={{ duration: heart.animationDuration, ease: 'linear' }}
          className="absolute"
        >
          <Heart className="w-4 h-4 text-pink-400 fill-current" />
        </motion.div>
      ))}
    </div>
  );

  const NavButton = ({ icon, label, active, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
        active 
          ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg scale-105' 
          : 'bg-white text-gray-600 hover:bg-pink-50'
      }`}
    >
      {React.cloneElement(icon, { className: 'w-5 h-5' })}
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <FloatingHearts />
      <LoveNoteModal />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-4">
            ჩვენი სიყვარულის ისტორია
          </h1>
          <p className="text-gray-600 mb-6">თითოეული მომენტი შენთან ერთად განსაკუთრებულია</p>
          
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Music className="w-5 h-5 text-pink-500" />
              <span>{isPlaying ? "მუსიკის გამორთვა" : "ჩვენი სიმღერა"}</span>
            </button>
            
            <button 
              onClick={handleShowLoveNote}
              className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Heart className="w-5 h-5" />
              <span>დღევანდელი მიზეზი</span>
            </button>
          </div>
        </header>

        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: <Calendar />, label: "დროის ხაზი", section: 'timeline' },
            { icon: <Camera />, label: "გალერეა", section: 'gallery' },
            { icon: <Heart />, label: "რატომ მიყვარხარ", section: 'letters' },
            { icon: <Map />, label: "ჩვენი ადგილები", section: 'map' },
            { icon: <Target />, label: "ჩვენი მომავალი", section: 'goals' }
          ].map(item => (
            <NavButton
              key={item.section}
              icon={item.icon}
              label={item.label}
              active={activeSection === item.section}
              onClick={() => setActiveSection(item.section)}
            />
          ))}
        </nav>

        <main className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          {activeSection === 'timeline' && <Timeline />}
          {activeSection === 'gallery' && <PhotoGallery />}
          {activeSection === 'letters' && <LoveReasons />}
          {activeSection === 'map' && <LocationMap />}
          {activeSection === 'goals' && <VisionBoard />}
        </main>
      </div>
    </div>
  );
};

export default MemoryApp;