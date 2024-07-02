// Import necessary modules
'use client';
import Image from 'next/image';
import React, { useState } from 'react';



// Define the component
export default function Home() {
  // State to track the visibility of navigation items
  const [navItemsVisibility, setNavItemsVisibility] = useState({
    home: true,
    about: true,
    services: true,
    contact: true,
  });

  const [isElement1Hovered, setElement1Hovered] = useState(false);
  const [isElement2Hovered, setElement2Hovered] = useState(false);
  const [isElement3Hovered, setElement3Hovered] = useState(false);
  const [isElement4Hovered, setElement4Hovered] = useState(false);
  const [isElement5Hovered, setElement5Hovered] = useState(false);
  const [isElement6Hovered, setElement6Hovered] = useState(false);
  const [isElement7Hovered, setElement7Hovered] = useState(false);
  const [isElement8Hovered, setElement8Hovered] = useState(false);
  const [isElement9Hovered, setElement9Hovered] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const handleElement1Hover = () => {
    setElement1Hovered(true);
    setElement2Hovered(false);
    setSelectedElement('element1');
  };

  // Function to handle hover events for Element 2
  const handleElement2Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element2');
  };

  const handleElement3Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element3');
  };

  const handleElement4Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element4');
  };

  const handleElement5Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element5');
  };

  const handleElement6Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element6');
  };

  const handleElement7Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element7');
  };
  const handleElement8Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element8');
  };

  const handleElement9Hover = () => {
    setElement1Hovered(false);
    setElement2Hovered(true);
    setSelectedElement('element9');
  };




  // JSX structure for the component
  return (
    <main className={`flex min-h-screen flex-col w-full h-screen 
    ${selectedElement === 'element1' ? 'bg-gradient-to-r from-white via-gray-400 to-black' : ''} 
    ${selectedElement === 'element2' ? 'bg-gradient-to-r from-yellow-200 via-red-500 to-blue-300' : ''}
    ${selectedElement === 'element3' ? 'bg-gradient-to-r from-red-400 via-orange-700 to-amber-950' : ''}
    ${selectedElement === 'element4' ? 'bg-gradient-to-r from-black via-green-700 to-black' : ''}
    ${selectedElement === 'element5' ? 'bg-gradient-to-r from-black via-white to-black' : ''}
    ${selectedElement === 'element6' ? 'bg-gradient-to-r from-black via-blue-600 to-rose-700' : ''}
    ${selectedElement === 'element7' ? 'bg-gradient-to-r from-black via-red-800 to-black' : ''}
    ${selectedElement === 'element8' ? 'bg-gradient-to-r from-yellow-100 via-orange-500 to-red-900' : ''}
    ${selectedElement === 'element9' ? 'bg-gradient-to-r from-gray-300 via-blue-700 to-black' : ''}
    `} >

      


      {/* Navigation Bar */}
      <div className="bg-black p-3">
        <div className="container mx-auto flex items-center justify-between">
          <Image src="/XO.jpg" width={50} height={50} alt="Logo" className='hover:bg-red-500' />

          {/* Navigation Links */}
          <div className="space-x-4">
            {navItemsVisibility && (
              <a href="https://en.wikipedia.org/wiki/The_Weeknd" className="text-white" id="Weeknd">
                About Weeknd
              </a>
            )}
            {navItemsVisibility && (
              <a href="https://www.theweeknd.com/tour/" className="text-white">
                Tours
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mt-10">

        <div className="text-5xl font-black text-black mb-5 mt-0 font-Helvetica, Sans-Serif">Weeknds Albums & Most Popular Tracks</div>

        {/* Example: Centered images next to each other */}
        <div className="flex">
          {/* Element 1 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement1Hover}
            onMouseLeave={() => setElement1Hovered(false)}>
            <img src="/HOB.jpg" alt="Image 1" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">House Of Baloons</p>
            </div>
          </a>

          {/* Element 2 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement2Hover}
            onMouseLeave={() => setElement2Hovered(false)}>
            <img src="/Thurs.png" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Thursday</p>
            </div>
          </a>


          {/* Element 3 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement3Hover}
            onMouseLeave={() => setElement3Hovered(false)}>
            <img src="/Echoes.png" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Echoes of Silence</p>
            </div>
          </a>


          {/* Element 4 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement4Hover}
            onMouseLeave={() => setElement4Hovered(false)}>
            <img src="/KissLand.jpg" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Kiss Land</p>
            </div>
          </a>


          {/* Element 5 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement5Hover}
            onMouseLeave={() => setElement5Hovered(false)}>
            <img src="/BBM.png" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Beuty Behind the Madness</p>
            </div>
          </a>
        </div>

        <div className="flex mt-4">
          {/* Element 6 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement6Hover}
            onMouseLeave={() => setElement6Hovered(false)}>
            <img src="/SB.png" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">StarBoy</p>
            </div>
          </a>

          {/* Element 7 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement7Hover}
            onMouseLeave={() => setElement7Hovered(false)}>
            <img src="/MDM.jpg" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">My Dear Melancholy</p>
            </div>
          </a>

          {/* Element 8 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement8Hover}
            onMouseLeave={() => setElement8Hovered(false)}>
            <img src="/AH.jpg" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">After Hours</p>
            </div>
          </a>

          {/* Element 9 */}
          <a
            className="group mx-2 relative overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-110"
            onMouseEnter={handleElement9Hover}
            onMouseLeave={() => setElement9Hovered(false)}>
            <img src="/DF.jpg" alt="Image 2" className="w-[300px] h-[300px] object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">Dawn FM</p>
            </div>
          </a>



        </div>
      </div>
      <br />
      <br />
      <div className='flex items-center justify-center flex-col '>
        {selectedElement === 'element1' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/00aqkszH1FdUiJJWvX6iEl?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element2' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/53qYItjefG5SUf62428dIw?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element3' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/0WdJTI3UVvUMbLwPk5ObKI?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element4' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/5idmfDT06TjCQ1SPDsa5qh?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element5' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/7fBv7CLKzipRk6EC6TWHOB?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element6' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element7' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/09mEdoA6zrmBPgTEN5qXmN?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element8' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}

        {selectedElement === 'element9' && (
          <div className="mt-0" id="spotifyContainer">
            <br /><br />
            {/* Embed Spotify track without lazy loading */}
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/track/0mL82sxCRjrs3br407IdJh?utm_source=generator"
              width="850"
              height="200"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        )}


      </div>


    </main>

  );
}




