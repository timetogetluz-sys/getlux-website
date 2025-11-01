import React from 'react';

export default function App(){
  return (
    <div className=\"min-h-screen font-sans bg-white text-gray-900\">
      {/* HERO */}
      <header className=\"bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 shadow-md\">
        <div className=\"max-w-6xl mx-auto px-6 py-12 flex items-center justify-between\">
          <div>
            <h1 className=\"text-4xl md:text-6xl font-extrabold tracking-tight\">GETLUZ</h1>
            <p className=\"mt-2 text-lg md:text-xl\">Caribbean‑inspired dance & fitness — Island energy for every body.</p>
            <div className=\"mt-6 flex gap-3\">
              <a href=\"#classes\" className=\"px-5 py-3 bg-white rounded-2xl shadow font-medium\">See Classes</a>
              <a href=\"#book\" className=\"px-5 py-3 border border-white rounded-2xl font-medium\">Book a Private</a>
            </div>
          </div>
          <div className=\"w-40 h-40 md:w-56 md:h-56 bg-white rounded-full flex items-center justify-center shadow\">
            {/* Logo placeholder */}
            <span className=\"text-sm md:text-base\">Your Logo</span>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id=\"about\" className=\"max-w-6xl mx-auto px-6 py-12\">
        <h2 className=\"text-2xl font-bold\">About GETLUZ</h2>
        <p className=\"mt-3 text-lg leading-relaxed\">GETLUZ blends Caribbean bashment, dancehall, afrobeats, amapiano and NYC flavor into beginner-friendly fitness classes, freestyle sessions, and curated showcases. We teach movement, confidence, and community — whether you’re new to dance or a freestyler looking to sharpen your craft.</p>
      </section>

      {/* CLASSES */}
      <section id=\"classes\" className=\"bg-gray-50 py-12\">
        <div className=\"max-w-6xl mx-auto px-6\">
          <h2 className=\"text-2xl font-bold\">Classes & Schedule</h2>
          <div className=\"mt-6 grid grid-cols-1 md:grid-cols-3 gap-6\">
            <div className=\"p-5 bg-white rounded-lg shadow\">
              <h3 className=\"font-semibold\">Island Ignition (Beginner)</h3>
              <p className=\"mt-2\">High-energy Caribbean fitness class. Soca + Dancehall + Amapiano. Great for beginners.</p>
              <p className=\"mt-3 font-medium\">Sat • 10:00 AM</p>
            </div>
            <div className=\"p-5 bg-white rounded-lg shadow\">
              <h3 className=\"font-semibold\">Shake It to the Max (Freestyle)</h3>
              <p className=\"mt-2\">Freestyle party session with live DJ, creative prompts, and video capture for promos.</p>
              <p className=\"mt-3 font-medium\">Monthly • Dates TBA</p>
            </div>
            <div className=\"p-5 bg-white rounded-lg shadow\">
              <h3 className=\"font-semibold\">Private Sessions</h3>
              <p className=\"mt-2\">1:1 coaching for choreography, casting prep, and fitness goals.</p>
              <p className=\"mt-3 font-medium\">DM @timetogetluz to book</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY / IG FEED */}
      <section id=\"gallery\" className=\"max-w-6xl mx-auto px-6 py-12\">
        <h2 className=\"text-2xl font-bold\">Gallery</h2>
        <p className=\"mt-3\">Live feed from Instagram (connect your account to show photos/videos here).</p>
        <div className=\"mt-6 grid grid-cols-2 md:grid-cols-4 gap-4\">
          <div className=\"h-40 bg-gray-200 rounded\" />
          <div className=\"h-40 bg-gray-200 rounded\" />
          <div className=\"h-40 bg-gray-200 rounded\" />
          <div className=\"h-40 bg-gray-200 rounded\" />
        </div>
      </section>

      {/* MERCH */}
      <section id=\"merch\" className=\"bg-gradient-to-t from-yellow-50 to-white py-12\">
        <div className=\"max-w-6xl mx-auto px-6\">
          <h2 className=\"text-2xl font-bold\">Merch & Goodies</h2>
          <p className=\"mt-3\">Branded shorts, sweat towels, bandanas — perfect for classes and giveaways. Link to shop or add simple buy buttons here.</p>
        </div>
      </section>

      {/* BOOK / CONTACT */}
      <section id=\"book\" className=\"max-w-6xl mx-auto px-6 py-12\">
        <h2 className=\"text-2xl font-bold\">Book / Contact</h2>
        <p className=\"mt-3\">For class signups, private sessions, collabs, and bookings: DM <a href=\"https://instagram.com/timetogetluz\" className=\"text-pink-600 font-medium\">@timetogetluz</a> or email <a href=\"mailto:hello@timetogetluz.com\" className=\"text-pink-600 font-medium\">hello@timetogetluz.com</a>.</p>
        <div className=\"mt-6 grid grid-cols-1 md:grid-cols-2 gap-6\">
          <div className=\"p-6 bg-white rounded-lg shadow\">
            <h3 className=\"font-semibold\">Quick Booking</h3>
            <p className=\"mt-2\">Name, Service, Preferred Dates/Times, Phone/Email</p>
            <a href=\"mailto:hello@timetogetluz.com\" className=\"mt-4 inline-block px-4 py-2 border rounded\">Email to Book</a>
          </div>
          <div className=\"p-6 bg-white rounded-lg shadow\">
            <h3 className=\"font-semibold\">Group & Event Inquiries</h3>
            <p className=\"mt-2\">Looking to book GETLUZ for an event, studio takeover, or pop-up? Tell us the date, location, and expected headcount.</p>
          </div>
        </div>
      </section>

      <footer className=\"bg-gray-900 text-white py-8\">
        <div className=\"max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center\">
          <div>
            <p className=\"font-bold\">GETLUZ</p>
            <p className=\"text-sm\">Caribbean fusion dance • Orlando, FL</p>
          </div>
          <div className=\"mt-4 md:mt-0\">
            <a href=\"https://instagram.com/timetogetluz\" className=\"mr-4\">Instagram</a>
            <a href=\"#\">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
