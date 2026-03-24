import Link from 'next/link';
import { Calendar, MapPin, Clock, Award, BookOpen, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function MarketingLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-green-100">

      {/* --- HERO SECTION --- */}
      <header className="relative bg-gradient-to-br from-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className='rounded-full mx-auto w-fit mt-12'>
          <Image src="/omj-logo.png" alt="logo" width={150} height={450} sizes='100' />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="bg-yellow-400 text-green-900 font-bold px-4 py-1 rounded-full text-sm mb-6 uppercase tracking-widest">
              Golden Opportunity for Class IX & X
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              SSC BOARD EXAM <br />
              <span className="text-yellow-400 italic">PREPARATION CONTEST 2026</span>
            </h1>
            <p className="text-lg md:text-xl text-green-50 max-w-2xl mb-10">
              Test your knowledge in English, Chemistry, Physics, and Mathematics.
              Open for all students of Karachi (Science Group).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://forms.gle/2eXvApEVXRsuyTfU7" target='_blank' className="bg-white text-green-800 hover:bg-yellow-400 hover:text-green-900 transition-all font-bold px-8 py-4 rounded-xl text-lg shadow-xl">
                Register Now for Rs: 100/-
              </Link>
              <Link href="https://chat.whatsapp.com/HXrNHY3L5iB99A9Aszx2cn" target='_blank' className="bg-yellow-400 border-2 border-white/50 hover:bg-white text-green-800 font-bold px-8 py-4 rounded-xl text-lg">
                Join Whataap Community
              </Link>
              <Link href="/download-admit-card" className="bg-green-600/30 border-2 border-white/50 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-lg">
                Download Admit Card
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* --- PRIZE POOL SECTION --- */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-yellow-500">
              <div className="text-3xl font-bold text-gray-800">Rs. 10,000</div>
              <p className="text-gray-500 font-medium uppercase tracking-tighter">1st Prize Cash</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-gray-400">
              <div className="text-3xl font-bold text-gray-800">Rs. 5,000</div>
              <p className="text-gray-500 font-medium uppercase tracking-tighter">2nd Prize Cash</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border-t-4 border-orange-400">
              <div className="text-3xl font-bold text-gray-800">Rs. 2,500</div>
              <p className="text-gray-500 font-medium uppercase tracking-tighter">3rd Prize Cash</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EVENT DETAILS --- */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BookOpen className="text-green-700" /> Contest Information
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-green-100 p-3 rounded-lg h-fit text-green-700"><Calendar /></div>
              <div>
                <h4 className="font-bold text-gray-800">Date & Registration</h4>
                <p className="text-gray-600">Exam Date: Sunday, March 29, 2026</p>
                <p className="text-red-500 font-semibold">Closing Date: 27th March, 2026</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 p-3 rounded-lg h-fit text-green-700"><MapPin /></div>
              <div>
                <h4 className="font-bold text-gray-800">Location</h4>
                <p className="text-gray-600">Husein Ebrahim Sports Complex & Community Centre, Huseinabad, Block 3, FB Area, Karachi</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-green-100 p-3 rounded-lg h-fit text-green-700"><Clock /></div>
              <div>
                <h4 className="font-bold text-gray-800">Timings</h4>
                <p className="text-gray-600">11:00 AM to 04:00 PM (MCQ Based)</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- FREE SESSION PROMO --- */}
        <div className="bg-blue-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <span className="bg-blue-500 text-xs font-bold px-3 py-1 rounded-full uppercase">Bonus Learning</span>
            <h3 className="text-3xl font-black mt-4 mb-2 italic">FREE ONLINE SESSION</h3>
            <p className="text-blue-100 mb-6">Physics & Chemistry Important Numericals with Sir A. Samad Qasim.</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm"><GraduationCap size={18} /> Step-by-Step Concepts</li>
              <li className="flex items-center gap-2 text-sm"><GraduationCap size={18} /> Common Mistakes & Solutions</li>
              <li className="flex items-center gap-2 text-sm"><GraduationCap size={18} /> Live on Facebook (March 28th)</li>
            </ul>

            <a href="https://chat.whatsapp.com/HXrNHY3L5iB99A9Aszx2cn" target='_blank' className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-100 transition shadow-lg">
              Join Group For Live Session
            </a>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-800 rounded-full"></div>
        </div>
      </section>

      {/* --- FOOTER / SUPPORT --- */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="mb-4">Presented by: <span className="text-white font-bold uppercase tracking-widest">The Okhai Memon Jamat (OMJ)</span></p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">For queries, WhatsApp only (No calls):</p>
            <a href="https://wa.me/923311324205" target='_blank' className="text-green-400 font-mono text-xl font-bold">0331-1324205</a>
          </div>
        </div>
      </footer>
    </div>
  );
}