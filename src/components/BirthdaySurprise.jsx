import React, { useState, useEffect } from "react";
import image from "../assets/WhatsApp Video 2026-06-07 at 09.01.36.mp4";
export default function BirthdaySurprise() {
  const [stage, setStage] = useState(0);
  const [isSlashed, setIsSlashed] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  const birthdayEmojis = ["🎂", "🎉", "🎈", "✨", "🎁", "🥳", "👑", "💖"];

  useEffect(() => {
    if (stage === 0) return;

    const interval = setInterval(() => {
      const id = Date.now() + Math.random();
      const isEmoji = Math.random() > 0.4;

      const newElement = {
        id,
        type: isEmoji ? "emoji" : "bubble",
        content: isEmoji
          ? birthdayEmojis[Math.floor(Math.random() * birthdayEmojis.length)]
          : "",
        left: `${Math.random() * 95}vw`,
        duration: `${Math.random() * 3 + 4}s`,
        size: isEmoji
          ? `${Math.random() * 1.5 + 1.5}rem`
          : `${Math.random() * 25 + 15}px`,
      };

      setFloatingElements((prev) => [...prev, newElement]);

      setTimeout(() => {
        setFloatingElements((prev) => prev.filter((el) => el.id !== id));
      }, 7000);
    }, 350);

    return () => clearInterval(interval);
  }, [stage]);

  const handleCakeSlice = () => {
    setIsSlashed(true);
  };

  return (
    <div
      className={`relative min-h-screen w-full flex justify-center items-center overflow-hidden font-sans transition-colors duration-1000 ${stage > 0 ? "bg-gradient-to-b from-[#f9a8d4] to-[#f472b6] celebrate-overlay" : "bg-[#0f172a]"}`}
    >
      {/* Dynamic Floating Emojis & Bubbles */}
      {floatingElements.map((el) => (
        <div
          key={el.id}
          className={`absolute bottom-[-100px] pointer-events-none z-10 select-none ${el.type === "emoji" ? "animate-floatUp" : "animate-bubbleUp bg-white/35 border border-white/50 rounded-full shadow-[inset_0_5px_15px_rgba(255,255,255,0.5)]"}`}
          style={{
            left: el.left,
            animationDuration: el.duration,
            fontSize: el.type === "emoji" ? el.size : undefined,
            width: el.type === "bubble" ? el.size : undefined,
            height: el.type === "bubble" ? el.size : undefined,
          }}
        >
          {el.content}
        </div>
      ))}

      {/* STAGE 0: Launch Button */}
      {stage === 0 && (
        <button
          onClick={() => setStage(1)}
          className="z-20 px-9 py-4 text-2xl font-bold text-white bg-gradient-to-r from-[#db2777] to-[#f472b6] border-4 border-white rounded-full shadow-[0_10px_25px_rgba(219,39,119,0.4)] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(219,39,119,0.6)] transition-all duration-300 flex items-center gap-3 cursor-pointer"
        >
          <span>🎁</span> Open Birthday Surprise! <span>🎁</span>
        </button>
      )}

      {/* STAGE 1: Video Presentation */}
      {stage === 1 && (
        <div className="z-20 flex flex-col items-center text-center max-w-[550px] w-full p-4 animate-popIn">
          <h1 className="text-5xl font-black text-white drop-shadow-[3px_3px_0px_#db2777] mb-6">
            Happy Birthday! 🎉
          </h1>
          <div className="w-full aspect-video rounded-[25px] overflow-hidden shadow-2xl border-8 border-white bg-black">
            <iframe
              className="w-full h-full border-none"
              src={image}
              allowFullScreen
              title="Birthday Video"
            />
          </div>
          <button onClick={() => setStage(2)} className="gold-magic-btn">
            Next: Read Message ✉️
          </button>
        </div>
      )}

      {/* STAGE 2: Wishing Room */}
      {stage === 2 && (
        <div className="z-20 flex flex-col items-center text-center max-w-[550px] w-full p-4 animate-popIn">
          <h1 className="text-5xl font-black text-white drop-shadow-[3px_3px_0px_#db2777] mb-6">
            Special Wish For You ✨
          </h1>
          <div className="bg-white/95 px-6 py-5 rounded-[24px] border-3 border-[#db2777] shadow-[0_12px_30px_rgba(219,39,119,0.2)] text-[#334155] text-2xl leading-relaxed">
            <span className="block text-4xl font-extrabold mb-2 bg-gradient-to-r from-[#db2777] to-[#f472b6] bg-clip-text text-transparent drop-shadow-sm">
              👑 Jamila 👑
            </span>
            <p className="text-xl">
              💝 Happy Birthday to the most amazing girl! May your special day
              be filled with endless joy, laughter, and beautiful moments.
              Wishing you a year ahead full of success, good health, and all the
              happiness your heart desires! Keep shining! 🎂🎈
            </p>
          </div>
          <button onClick={() => setStage(3)} className="gold-magic-btn">
            Next: Cut the Cake! 🎂
          </button>
        </div>
      )}

      {/* STAGE 3: Cake Cutting Room */}
      {stage === 3 && (
        <div className="z-20 flex flex-col items-center text-center max-w-[550px] w-full p-4 animate-popIn">
          <h1 className="text-4xl font-black text-white drop-shadow-[3px_3px_0px_#be185d] mb-1">
            Time to Cut Jamila's Cake! 🔪🍰
          </h1>
          <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-2">
            Celebrate Jamila!
          </p>

          <div
            onClick={handleCakeSlice}
            className="relative w-[260px] h-[280px] mt-4 cursor-pointer group select-none"
          >
            {/* 🔪 MINDIDA SILFAR-TA AH: Dhex galka keega */}
            <div
              className={`absolute text-7xl z-30 pointer-events-none transition-all duration-300 ease-in-out filter drop-shadow-md
                ${
                  isSlashed
                    ? "top-[35%] left-[32%] rotate-[35deg] scale-110"
                    : "top-[-25%] right-[-20%] -rotate-45 group-hover:scale-105"
                }`}
            >
              🔪
            </div>

            {/* 🎂 QURXINTA KEEGA LABADA DABAQ AH */}
            <div className="absolute w-full bottom-2 flex flex-col items-center">
              {/* Shamaaca */}
              <div className="w-2.5 h-9 bg-gradient-to-b from-[#fef08a] to-[#facc15] border border-white rounded mb-[-2px] relative z-20 shadow-sm">
                <div className="w-3.5 h-5 bg-[#fb923c] rounded-[50%_50%_20%_20%] absolute -top-5 -left-0.5 animate-flicker shadow-[0_0_10px_#fb923c]" />
              </div>

              {/* DABAQ-A SARE (Top Tier) */}
              <div className="w-[120px] h-[65px] bg-[#fbcfe8] border-[3.5px] border-white rounded-t-2xl relative z-10 shadow-[inset_0_-12px_0_rgba(0,0,0,0.05),0_4px_10px_rgba(0,0,0,0.1)] flex justify-between items-end px-2 pb-1">
                {/* Luulka Cadcad ee qurxinta */}
                <div className="w-2 h-2 bg-white rounded-full opacity-80 animate-pulse" />
                <div className="w-2 h-2 bg-white rounded-full opacity-80 animate-pulse delay-75" />
                <div className="w-2 h-2 bg-white rounded-full opacity-80 animate-pulse delay-150" />

                {/* Toos u jeexidda mindida */}
                {isSlashed && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-full bg-[#db2777]/40 z-20 animate-popIn shadow-[0_0_8px_#db2777]" />
                )}
              </div>

              {/* DABAQ-A HOOSE (Bottom Tier) */}
              <div className="w-[190px] h-[85px] bg-[#f472b6] border-[4px] border-white rounded-t-2xl mt-[-4px] relative z-0 shadow-[inset_0_-15px_0_rgba(0,0,0,0.06),0_6px_15px_rgba(0,0,0,0.15)] flex justify-around items-end px-4 pb-2">
                {/* Ubaxyada yaryar ee naqshadda */}
                <div className="text-xs opacity-90 animate-floatSlices">🌸</div>
                <div className="text-xs opacity-90 animate-floatSlices delay-100">
                  🌸
                </div>
                <div className="text-xs opacity-90 animate-floatSlices delay-200">
                  🌸
                </div>

                {/* Toos u jeexidda mindida */}
                {isSlashed && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-full bg-[#be185d]/50 z-20 animate-popIn shadow-[0_0_8px_#be185d]" />
                )}
              </div>

              {/* SAXAARADDA DAHABIGA AH (Gold Platter) */}
              <div className="w-[220px] h-[14px] bg-gradient-to-r from-[#eab308] via-[#fef08a] to-[#ca8a04] border border-[#facc15] rounded-full mt-[-2px] shadow-lg relative z-10" />
            </div>
          </div>

          {isSlashed && (
            <button
              onClick={() => setStage(4)}
              className="gold-magic-btn animate-bounce mt-4"
            >
              Open the Next Surprise! 🎈✨
            </button>
          )}
        </div>
      )}

      {/* STAGE 4: Balloon Letters Room */}
      {stage === 4 && (
        <div className="z-20 flex flex-col items-center text-center max-w-[90vw] w-full p-4 animate-popIn">
          <h1 className="text-5xl font-black text-white drop-shadow-[3px_3px_0px_#db2777] mb-10">
            ✨ Enjoy the Magic! ✨
          </h1>

          <div className="flex flex-wrap justify-center gap-5 perspective-[1000px]">
            {[
              { L: "H", C: "#ff477e", d: "0s" },
              { L: "A", C: "#ffb6c1", d: "0.2s" },
              { L: "P", C: "#ffed4a", d: "0.4s" },
              { L: "P", C: "#60a5fa", d: "0.6s" },
              { L: "Y", C: "#34d399", d: "0.8s" },
              { space: true },
              { L: "B", C: "#f43f5e", d: "1s" },
              { L: "I", C: "#fb923c", d: "1.2s" },
              { L: "R", C: "#facc15", d: "1.4s" },
              { L: "T", C: "#4ade80", d: "1.6s" },
              { L: "H", C: "#22d3ee", d: "1.8s" },
              { L: "D", C: "#818cf8", d: "2s" },
              { L: "A", C: "#c084fc", d: "2.2s" },
              { L: "Y", C: "#f472b6", d: "2.4s" },
            ].map((item, index) =>
              item.space ? (
                <div key={index} className="w-8" />
              ) : (
                <div
                  key={index}
                  className="flex flex-col items-center animate-fallAndFade opacity-0"
                  style={{ animationDelay: item.d }}
                >
                  <div className="text-7xl leading-none filter drop-shadow-lg z-10">
                    🎈
                  </div>
                  <div
                    className="text-6xl font-black -mt-4 z-20 select-none drop-shadow-[2px_2px_0px_rgba(255,255,255,1)]"
                    style={{ color: item.C }}
                  >
                    {item.L}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}
