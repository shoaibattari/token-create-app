"use client";
import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { Search, Download, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { studentsData } from '../database/studentData';
import Image from 'next/image';

export default function DownloadAdmitCard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<typeof studentsData>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Separate refs for the hidden download version
  const downloadRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchTerm.replace(/[-\s.]/g, "");
    if (!cleanQuery) return;

    const filtered = studentsData.filter((s) =>
      s.cnic.replace(/[-\s.]/g, "") === cleanQuery ||
      s.phone.replace(/[-\s.]/g, "") === cleanQuery
    );
    setResults(filtered);
    setHasSearched(true);
  };

  const downloadAsPng = async (rollNo: string) => {
    const element = downloadRefs.current[rollNo];
    if (!element) return;

    setDownloadingId(rollNo);
    try {
      // Small delay to ensure the hidden element is ready
      await new Promise(r => setTimeout(r, 200));

      const dataUrl = await toPng(element, {
        cacheBust: true,
        pixelRatio: 3, // High quality
        backgroundColor: '#ffffff',
      });

      const link = document.createElement('a');
      link.download = `OMJ-AdmitCard-${rollNo}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 overflow-x-hidden">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-green-700 font-semibold mb-6 hover:underline">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>

        {/* Search Header */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 mb-8 text-center">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase">Find Admit Card</h1>
          <form onSubmit={handleSearch} className="relative max-w-md mx-auto mt-6">
            <input
              type="text"
              placeholder="CNIC or Phone Number"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-100 focus:border-green-500 outline-none transition-all text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <button type="submit" className="absolute right-2 top-2 bottom-2 bg-green-700 text-white px-5 rounded-xl font-bold">
              Search
            </button>
          </form>
        </div>

        {/* Results Container */}
        <div className="space-y-8">
          {
            results.length > 0 ? (
              results.map((student) => {
                const isDownloading = downloadingId === student.rollNo;
                return (
                  <div key={student.rollNo} className="flex flex-col items-center">

                    {/* 1. RESPONSIVE PREVIEW (What the user sees on mobile) */}
                    <div className="w-full max-w-sm md:max-w-xl bg-white border-4 border-green-800 p-4 md:p-6 rounded-xl shadow-lg relative overflow-hidden">
                      <div className="flex justify-between items-center mb-4 border-b pb-2">
                        <div className="flex flex-col md:flex-row items-center gap-2">
                          <Image src="/omj-logo.png" alt="logo" width={50} height={50} />
                          <div className='flex flex-col'
                          >
                            <h2 className="text-xs font-bold text-green-800 text-nowrap">OKHAI MEMON JAMAT</h2>
                            <p className="text-xs uppercase font-bold text-start tracking-widest text-slate-500">Social Welfare Committee</p>
                          </div>
                        </div>
                        <p className="text-sm font-mono font-bold text-nowrap">{student.rollNo}</p>
                      </div>
                      <div className="text-xs space-y-2">
                        <strong><p>Roll Number: {student.rollNo}</p></strong>
                        <p><strong>Name: </strong> {student.name}</p>
                        <p><strong>Father: </strong> {student.fatherName}</p>
                        <p><strong>School: </strong> {student.school}</p>
                        <p><strong>Class: </strong> {student.class}</p>
                        <p><strong>Group: </strong> {student.class} ({student.group})</p>
                        <p><strong>Gender: </strong> {student.gender}</p>
                        <p><strong>Venue: </strong> {student.venue}</p>
                        <p><strong>Exam Date: </strong>March 29, 2026</p>
                        <p><strong>Reporting Time:</strong> 10:30 AM</p>

                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mt-2">
                        <p className="text-[10px] font-bold text-slate-700 uppercase mb-2">Exam Rules:</p>
                        <ul className="text-[10px] text-slate-500 grid grid-cols-2 gap-1 list-disc pl-4 uppercase font-medium">
                          <li>Be on time</li>
                          <li>Bring Admit Card</li>
                          <li>No Mobile Phones</li>
                        </ul>
                      </div>
                      <p className="text-[9px] text-gray-400 mt-4 italic text-center">Preview may look different on mobile. Use the download button for full card.</p>
                    </div>

                    {/* 2. HIDDEN FIXED-SIZE VERSION (For Downloading Only) */}
                    <div className="absolute left-[-9999px] top-0">
                      <div
                        ref={(el) => { downloadRefs.current[student.rollNo] = el; }}
                        className="w-[794px] bg-white border-[12px] border-green-800 p-10 text-slate-900"
                      >
                        <div className="flex justify-between items-center mb-8 border-b-4 border-green-800 pb-4">
                          <div className="flex items-center gap-4">
                            <Image src="/omj-logo.png" alt="logo" width={70} height={70} />
                            <div>
                              <h2 className="text-xl font-black text-green-800 leading-none">OKHAI MEMON JAMAT</h2>
                              <p className="text-xs uppercase font-bold text-start tracking-widest text-slate-500">Social Welfare Committee</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="bg-green-800 text-white text-[10px] px-2 py-1 rounded font-bold text-center uppercase">SSC Contest 2026</div>
                            <p className="text-xl text-nowrap font-black text-green-900 mt-1">{student.rollNo}</p>
                          </div>
                        </div>

                        <h3 className="text-center text-3xl font-black mb-10 underline decoration-green-800 decoration-8 underline-offset-8 uppercase">Entry Admit Card</h3>

                        <div className="grid grid-cols-2 gap-y-8 gap-x-10 mb-10 text-lg">
                          <div className="border-b-2 border-slate-100 pb-2">
                            <p className="text-xs text-slate-400 uppercase font-bold">Student Name</p>
                            <p className="font-black text-slate-900 uppercase truncate">{student.name}</p>
                          </div>
                          <div className="border-b-2 border-slate-100 pb-2">
                            <p className="text-xs text-slate-400 uppercase font-bold">Father Name</p>
                            <p className="font-black text-slate-900 uppercase truncate">{student.fatherName}</p>
                          </div>
                          <div className="border-b-2 border-slate-100 pb-2">
                            <p className="text-xs text-slate-400 uppercase font-bold">Class & Group</p>
                            <p className="font-black text-slate-900 uppercase">{student.class} ({student.group})</p>
                          </div>
                          <div className="border-b-2 border-slate-100 pb-2">
                            <p className="text-xs text-slate-400 uppercase font-bold">Gender</p>
                            <p className="font-black text-slate-900 uppercase">{student.gender}</p>
                          </div>
                          <div className="col-span-2 border-b-2 border-slate-100 pb-2">
                            <p className="text-xs text-slate-400 uppercase font-bold">School Name</p>
                            <p className="font-black text-slate-900 uppercase">{student.school}</p>
                          </div>
                          <div className="col-span-2 bg-slate-50 p-4 border-l-8 border-green-800">
                            <p className="text-xs text-slate-400 uppercase font-bold mb-1">Exam Center</p>
                            <p className="font-bold text-base leading-tight text-green-900 uppercase">{student.venue}</p>
                          </div>
                        </div>

                        <div className="bg-green-50 p-6 rounded-2xl flex justify-between items-center border-2 border-green-200 shadow-inner">
                          <div>
                            <p className="text-xs font-bold text-green-600 uppercase">Exam Date</p>
                            <p className="font-black text-slate-900 text-2xl uppercase">March 29, 2026</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-green-600 uppercase">Reporting Time</p>
                            <p className="font-black text-slate-900 text-2xl uppercase">10:30 AM</p>
                          </div>
                        </div>
                        <div className="border-2 border-slate-200 rounded-2xl p-6 bg-white">
                          <h4 className="text-sm font-black text-slate-900 uppercase mb-4 flex items-center gap-2">
                            <span className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center text-[10px]">!</span>
                            Exam Rules and Regulations
                          </h4>
                          <div className="grid grid-cols-2 gap-y-2 gap-x-6">
                            {[
                              "Be on time",
                              "Bring Admit Card",
                              "No cheating or copying",
                              "No mobile phones allowed",
                              "Follow invigilator's instructions",
                              "Bring your stationary items"
                            ].map((rule, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-[11px] font-bold text-slate-600 uppercase tracking-tight">
                                <span className="text-green-700 mt-0.5">•</span>
                                {rule}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="text-xs text-slate-700 text-center italic leading-relaxed border-t pt-6">
                          This is a verified computer-generated entry slip for OMJ SSC Board Exam Preparation Contest.<br />
                        </div>
                      </div>
                    </div>

                    {/* Button Section */}
                    <button
                      onClick={() => downloadAsPng(student.rollNo)}
                      disabled={isDownloading}
                      className={`mt-6 w-full max-w-sm flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all ${isDownloading ? 'bg-slate-400' : 'bg-green-700 text-white hover:bg-green-800 shadow-lg'
                        }`}
                    >
                      {isDownloading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
                      {isDownloading ? "Capturing HD Image..." : "Download Admit Card (PNG)"}
                    </button>
                  </div>
                );
              }))

              : hasSearched ? (
                /* --- NO RECORD FOUND STATE --- */
                <div className="text-center p-12 bg-red-50 rounded-3xl border-2 border-dashed border-red-200">
                  <p className="text-red-600 font-bold text-xl mb-2 tracking-tight uppercase">No Record Found!</p>
                  <p className="text-red-400 font-medium">Please verify your details or WhatsApp support at:<br />
                    <span className="font-black text-lg">0331-1324205</span>
                  </p>
                </div>
              ) : (
                /* --- EMPTY / INITIAL STATE --- */
                <div className="text-center p-12 opacity-30">
                  <p className="italic text-slate-500 font-medium text-lg">Enter details above to preview your card</p>
                </div>
              )
          }
        </div>
      </div>
    </div >
  );
}