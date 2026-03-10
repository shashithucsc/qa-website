"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube, ListVideo, MonitorPlay } from "lucide-react";

// Categorized data structure. 
// I have populated the first few exact videos. You just need to paste the remaining 11-character YouTube IDs.
const videoCategories = [
  {
    id: "selenium",
    title: "Selenium Automation",
    subtitle: "Sinhala Tutorial Series",
    description: "Complete 19-part guide from basics to advanced Selenium with Java.",
    glowColor: "#3b82f6",
    playlistUrl: "https://www.youtube.com/playlist?list=PLgbf4L0WvebciyGW9bKfMLr-TGUp_u6K5",
    videos: [
      { id: "xhVs-h1ik00", title: "PART 1 - Introduction to Selenium & Test Automation", duration: "28:59" },
      { id: "YICA2A3g_y8", title: "PART 2 - Launch Chrome Browsers & WebDriver Setup", duration: "30:20" },
      { id: "zlM9LPM3_Yk", title: "PART 7 - Working with Drop Downs & Auto Suggestions", duration: "49:05" },
      { id: "IZ1VFUchNRA", title: "PART 9 - Types of Alerts & Popup Handling", duration: "12:35" },
      // Paste the rest of your 19 videos here:
      { id: "YOUR_ID_5", title: "PART 3 - Locators in Selenium (ID, Name, Class)", duration: "15:00" },
      { id: "YOUR_ID_6", title: "PART 4 - Advanced XPath & CSS Selectors", duration: "20:00" },
      { id: "YOUR_ID_7", title: "PART 5 - WebDriver Basic Methods", duration: "18:30" },
      { id: "YOUR_ID_8", title: "PART 6 - Synchronization (Implicit & Explicit Waits)", duration: "25:10" },
      { id: "YOUR_ID_9", title: "PART 8 - Handling Multiple Windows & Tabs", duration: "22:15" },
      { id: "YOUR_ID_10", title: "PART 10 - Handling Iframes efficiently", duration: "14:45" },
      { id: "YOUR_ID_11", title: "PART 11 - Actions Class (Mouse Hover, Drag & Drop)", duration: "28:00" },
      { id: "YOUR_ID_12", title: "PART 12 - JavaScript Executor tricks", duration: "19:20" },
      { id: "YOUR_ID_13", title: "PART 13 - Taking Screenshots in Selenium", duration: "11:05" },
      { id: "YOUR_ID_14", title: "PART 14 - Reading Data from Excel (Apache POI)", duration: "35:40" },
      { id: "YOUR_ID_15", title: "PART 15 - TestNG Framework Introduction", duration: "40:15" },
      { id: "YOUR_ID_16", title: "PART 16 - TestNG Annotations & Assertions", duration: "26:50" },
      { id: "YOUR_ID_17", title: "PART 17 - Page Object Model (POM) Design", duration: "38:20" },
      { id: "YOUR_ID_18", title: "PART 18 - Extent Reports Integration", duration: "29:10" },
      { id: "YOUR_ID_19", title: "PART 19 - Maven Build Management & CI/CD basics", duration: "45:00" },
    ]
  },
  // Future categories can be added here easily:
  /*
  {
    id: "api-testing",
    title: "API Testing with Postman",
    ...
  }
  */
];

type Video = { id: string; title: string; duration: string };
type ActiveVideos = Record<string, Video>;

export default function VideoSection() {
  // State to track which video is currently playing for EACH category
  // Initializes with the first video of each category
  const [activeVideos, setActiveVideos] = useState<ActiveVideos>(() => {
    const initialState: ActiveVideos = {};
    videoCategories.forEach(cat => {
      initialState[cat.id] = cat.videos[0];
    });
    return initialState;
  });

  const handleVideoSelect = (categoryId: string, video: Video) => {
    setActiveVideos(prev => ({ ...prev, [categoryId]: video }));
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#030712] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      {/* Cinematic Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 md:w-240 h-120 bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-cyan-400 text-xs font-bold tracking-[0.25em] uppercase mb-4">
            The Lecture Hall
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Video Archives
          </h2>
          <div className="w-16 h-px bg-linear-to-r from-transparent via-cyan-500/50 to-transparent mx-auto mb-5" />
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Select a module below to access comprehensive, expert-led training sessions.
          </p>
        </motion.div>

        {/* Categories Loop */}
        {videoCategories.map((category) => {
          const currentVideo = activeVideos[category.id];

          return (
            <div key={category.id} className="mb-24 last:mb-0">
              
              {/* Category Subheading */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-white/10"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0 bg-blue-500/10 border border-blue-500/30">
                      <ListVideo className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base mt-3 max-w-2xl">
                    <span className="text-slate-300 font-medium mr-2">{category.subtitle} &mdash;</span>
                    {category.description}
                  </p>
                </div>
                
                <a 
                  href={category.playlistUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all shrink-0 w-full md:w-auto"
                >
                  <Youtube className="w-5 h-5 text-red-500" />
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    Open in YouTube
                  </span>
                </a>
              </motion.div>

              {/* Course Player Layout (Grid: 2/3 Player, 1/3 Playlist Queue) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Main Video Player (Left Side) */}
                <div className="lg:col-span-2 flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl">
                  {/* Iframe */}
                  <div className="relative aspect-video bg-black w-full">
                    <iframe
                      src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`}
                      title={currentVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-none"
                    />
                  </div>
                  {/* Current Video Info */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-3">
                      <MonitorPlay className="w-4 h-4" /> Now Playing
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-white leading-snug">
                      {currentVideo.title}
                    </h4>
                  </div>
                </div>

                {/* Playlist Queue (Right Side) */}
                <div className="lg:col-span-1 flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-md overflow-hidden h-100 lg:h-auto lg:max-h-150">
                  <div className="p-5 border-b border-white/10 bg-white/5">
                    <h4 className="font-bold text-white flex items-center justify-between">
                      Course Content
                      <span className="text-xs font-medium text-slate-400 bg-white/10 px-2 py-1 rounded-md">
                        {category.videos.length} Videos
                      </span>
                    </h4>
                  </div>
                  
                  {/* Custom Scrollable List */}
                  <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                    <div className="p-2 flex flex-col gap-1">
                      {category.videos.map((video, index) => {
                        const isActive = currentVideo.id === video.id;
                        return (
                          <button
                            key={video.id}
                            onClick={() => handleVideoSelect(category.id, video)}
                            className={`flex items-start gap-4 p-3 rounded-xl transition-all text-left w-full
                              ${isActive 
                                ? "bg-blue-500/20 border border-blue-500/30" 
                                : "hover:bg-white/5 border border-transparent"
                              }
                            `}
                          >
                            {/* Video Thumbnail Facade */}
                            <div className="relative w-24 aspect-video rounded-md overflow-hidden shrink-0 bg-slate-800">
                              <img 
                                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                                alt={video.title}
                                className={`w-full h-full object-cover transition-opacity ${isActive ? "opacity-100" : "opacity-70"}`}
                              />
                              {isActive && (
                                <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center backdrop-blur-[1px]">
                                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                                    <Play className="w-3 h-3 text-white fill-current ml-0.5" />
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0 py-1">
                              <p className={`text-sm font-semibold line-clamp-2 leading-snug mb-1 
                                ${isActive ? "text-cyan-400" : "text-slate-300"}
                              `}>
                                {index + 1}. {video.title.replace(/^PART \d+ - /, '')}
                              </p>
                              <p className="text-xs text-slate-500">{video.duration}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}