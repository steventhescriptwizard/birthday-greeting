import React, { useState, useRef, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Heart, Gift, MapPin, PlayCircle, Plus, Share, LockOpen, CheckCircle, 
  RefreshCcw, Lightbulb, Home as HomeIcon, Ticket, Grid3x3, Image as ImageIcon, 
  Camera, Upload, X, Mail, Sparkles, PartyPopper 
} from 'lucide-react';
import { IMAGES, COUPONS, MEMORIES, CROSSWORD_DATA } from './constants';
import { Coupon, Memory } from './types';

// --- COMPONENTS ---

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Letter', path: '/letter' },
    { name: 'Coupons', path: '/coupons' },
    { name: 'Gift', path: '/gift' },
    { name: 'Memories', path: '/memories' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <span className="font-display font-bold text-2xl tracking-wider text-gray-800 group-hover:text-primary transition-colors">Birthday Gift </span>
            <Heart size={12} className="ml-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity animate-heartbeat" fill="currentColor"/>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors border-b-2 ${
                  location.pathname === link.path
                    ? 'text-primary border-primary'
                    : 'text-gray-600 border-transparent hover:text-primary hover:border-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const BottomNav = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Letter', path: '/letter', icon: Mail },
    { name: 'Coupons', path: '/coupons', icon: Ticket },
    { name: 'Gift', path: '/gift', icon: Gift },
    { name: 'Memories', path: '/memories', icon: ImageIcon },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className={isActive ? 'fill-primary/10 animate-pulse' : ''} />
              <span className={`text-[10px] font-medium ${isActive ? 'font-bold' : ''}`}>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-rose-50 pt-16 pb-24 md:pb-16 border-t border-rose-100 mt-auto">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <div className="mb-6 flex justify-center">
        <div className="w-12 h-1 bg-primary/20 rounded-full"></div>
      </div>
      <h3 className="font-display text-2xl md:text-3xl text-gray-800 mb-4 italic">
        "I love you more than words can wield the matter, Dearer than eyesight, space and liberty."
      </h3>
      <div className="flex items-center justify-center gap-2 text-rose-400 mb-8">
        <Heart size={16} fill="currentColor" className="animate-heartbeat" />
        <span className="text-xs font-bold uppercase tracking-[0.2em]">Forever & Always</span>
        <Heart size={16} fill="currentColor" className="animate-heartbeat" />
      </div>
      <div className="text-[10px] text-gray-400 font-sans tracking-widest uppercase">
        © {new Date().getFullYear()} Keepsake • Made with ❤️ for You
      </div>
    </div>
  </footer>
);

// --- PAGES ---

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] animate-page-enter">
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left z-10 order-2 lg:order-1">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-4 font-semibold">Hi Sayang,</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
                HAPPY <br />
                BIRTHDAY! <span className="text-primary">&lt;3</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0 font-body">
                Even though we are miles apart, my heart is right there with you. Here are a few little surprises to make your day special.
              </p>
            </div>
            <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-200 rounded-full blur-3xl -z-10 opacity-60"></div>
              <div className="relative w-full max-w-md aspect-square animate-float">
                <img
                  src={IMAGES.HEART_ROSE}
                  alt="Heart shaped arrangement"
                  className="object-cover w-full h-full drop-shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
               { title: 'LETTER', desc: 'Read what my heart has to say.', img: IMAGES.ICON_LETTER, link: '/letter' },
               { title: 'COUPONS', desc: 'Redeemable anytime for love.', img: IMAGES.ICON_COUPON, link: '/coupons' },
               { title: 'GIFT', desc: 'A little something for you.', img: IMAGES.ICON_GIFT, link: '/gift' },
               { title: 'CROSSWORD', desc: 'How well do you know us?', textIcon: '?', link: '/crossword' }
            ].map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center">
                <Link to={item.link} className="w-full">
                  <div className="w-full aspect-[4/5] bg-secondary rounded-lg overflow-hidden mb-6 relative shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                     {item.img ? (
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                     ) : (
                        <div className="w-full h-full flex items-center justify-center text-9xl font-display font-bold text-gray-200">?</div>
                     )}
                  </div>
                </Link>
                <h3 className="font-display text-xl font-bold mb-2 tracking-wide">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4 h-10 font-body">{item.desc}</p>
                <Link to={item.link} className="px-6 py-2 bg-stone-100 text-xs font-bold tracking-widest uppercase hover:bg-stone-200 transition-colors rounded">
                  OPEN
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const LetterPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
      return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center bg-[#f8f5f2] p-4 animate-page-enter">
            <div 
                onClick={() => setIsOpen(true)}
                className="cursor-pointer group relative w-full max-w-[340px] aspect-[1.4] bg-rose-100 shadow-xl transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl flex items-center justify-center"
            >
                {/* Envelope Flap Effect (Simple CSS) */}
                <div className="absolute inset-0 bg-white shadow-inner opacity-40"></div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-rose-200/50 clip-path-triangle origin-top z-0"></div>
                
                {/* Wax Seal */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                     <div className="w-20 h-20 bg-red-700 rounded-full shadow-lg flex items-center justify-center border-4 border-red-800/50 group-hover:scale-110 transition-transform duration-300">
                        <Heart size={32} className="text-red-900/40 fill-current animate-heartbeat" />
                     </div>
                     <span className="font-handwriting text-2xl text-gray-600 mt-2 group-hover:text-primary transition-colors">To My Love</span>
                </div>
            </div>
            <p className="mt-8 text-xs font-bold tracking-[0.3em] text-gray-400 uppercase animate-pulse">Tap to open</p>
        </div>
      )
  }

  return (
    <div className="min-h-screen bg-[#f8f5f2] relative overflow-hidden py-12 px-4 flex justify-center items-center animate-in zoom-in-95 duration-700">
        {/* Animated Petals */}
        <div className="absolute top-10 left-10 text-rose-300 animate-float opacity-60"><Heart size={24} fill="currentColor"/></div>
        <div className="absolute bottom-20 right-20 text-rose-400 animate-float opacity-50" style={{animationDelay: '1s'}}><Heart size={32} fill="currentColor"/></div>
        <div className="absolute top-1/3 right-10 text-red-300 animate-float opacity-40" style={{animationDelay: '2s'}}><Heart size={16} fill="currentColor"/></div>
        <div className="absolute bottom-1/3 left-16 text-rose-300 animate-float opacity-50" style={{animationDelay: '1.5s'}}><Heart size={28} fill="currentColor"/></div>

        {/* Parchment Container */}
        <div className="relative max-w-2xl w-full bg-[#fffcf5] p-8 md:p-16 shadow-2xl rotate-1 transform transition hover:rotate-0 duration-500">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
            
            {/* Content */}
            <div className="relative z-10 font-handwriting text-gray-800">
                <div className="flex justify-between items-end mb-8 border-b border-[#e8e1d5] pb-4">
                    <span className="text-lg md:text-xl text-[#89616f]">For You</span>
                    <span className="text-lg md:text-xl text-[#89616f]">September 24th</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl mb-8">My Dearest Love,</h1>
                
                <div className="space-y-6 text-2xl md:text-3xl leading-relaxed opacity-90">
                    <p>As I sit here to write this, I find myself smiling just thinking about your face.</p>
                    <p>Happy Birthday, my love.</p>
                    <p>Distance may separate us today, but it can never dull the brightness you bring into my world. You are my calm in the chaos, my laughter on quiet days, and the home my heart always returns to.</p>
                    <p>I hope this day treats you with the same kindness and joy you give to everyone around you. I am counting down the seconds until I can hold you again.</p>
                    <p>Forever yours,</p>
                </div>

                <div className="mt-12 flex justify-end items-center gap-4">
                    <div className="text-right">
                        <span className="text-3xl block">With all my love,</span>
                        <span className="text-5xl text-primary block mt-2">Jamie</span>
                    </div>
                    {/* Wax Seal */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 bg-red-700 rounded-full opacity-90 shadow-inner border-4 border-red-800/50 transform rotate-12"></div>
                        <div className="absolute inset-2 border-2 border-red-900/30 rounded-full"></div>
                        <Heart size={40} className="relative text-red-900/40 fill-current transform -rotate-12 animate-heartbeat" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const CouponsPage = () => {
  const [selectedCoupon, setSelectedCoupon] = useState<Coupon | null>(null);
  const [redeemed, setRedeemed] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCouponClick = (coupon: Coupon) => {
    setSelectedCoupon(coupon);
    setShowConfetti(false);
  };

  const handleRedeem = () => {
    if (selectedCoupon) {
        if (!redeemed.includes(selectedCoupon.id)) {
            setRedeemed([...redeemed, selectedCoupon.id]);
            setShowConfetti(true);
        }
    }
  };

  const closeModal = () => {
    setSelectedCoupon(null);
    setShowConfetti(false);
  };

  return (
    <div className="min-h-screen bg-rose-50/30 pb-20 animate-page-enter">
      <div className="container mx-auto px-4 py-12 md:px-12 lg:px-24">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Love Coupons <span className="text-primary">&lt;3</span>
          </h1>
          <p className="text-gray-600 font-body max-w-lg mx-auto">
             Click on a ticket to reveal its magic. Redeem them whenever you need a little extra love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {COUPONS.map((coupon, index) => {
             const isRedeemed = redeemed.includes(coupon.id);
             return (
              <button 
                key={coupon.id} 
                onClick={() => handleCouponClick(coupon)}
                className="group w-full text-left focus:outline-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-40 flex overflow-hidden border border-rose-100 ${isRedeemed ? 'opacity-60 grayscale-[0.5]' : ''}`}>
                   {/* Left Decoration */}
                   <div className={`w-3 h-full bg-gradient-to-b ${coupon.color}`}></div>
                   
                   {/* Content */}
                   <div className="flex-1 p-6 flex flex-col justify-center relative">
                      <div className="flex items-center justify-between mb-2">
                         <div className="flex items-center gap-2 text-rose-400">
                            <Heart size={14} className="fill-current" />
                            <span className="text-[10px] font-bold tracking-widest uppercase">Love Coupon</span>
                         </div>
                         {isRedeemed && (
                             <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded-full uppercase">Redeemed</span>
                         )}
                      </div>
                      <h3 className="text-xl font-display font-bold text-gray-800 group-hover:text-primary transition-colors">{coupon.title}</h3>
                      <p className="text-xs text-gray-500 mt-2 font-body line-clamp-1">{coupon.desc}</p>
                   </div>

                   {/* Right Perforated Stub */}
                   <div className="relative w-24 border-l-2 border-dashed border-gray-100 bg-gray-50 flex flex-col items-center justify-center">
                       {/* Semi-circles for perforation effect */}
                       <div className="absolute -top-3 -left-[7px] w-4 h-4 bg-rose-50 rounded-full"></div>
                       <div className="absolute -bottom-3 -left-[7px] w-4 h-4 bg-rose-50 rounded-full"></div>
                       
                       <div className="transform -rotate-90">
                           <span className="font-mono font-bold text-2xl text-gray-300">#{coupon.id}</span>
                       </div>
                   </div>
                </div>
              </button>
             );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
             <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300">
                 {/* Decorative Header */}
                 <div className={`h-32 bg-gradient-to-br ${selectedCoupon.color} relative overflow-hidden flex items-center justify-center`}>
                     <div className="absolute inset-0 bg-black/10"></div>
                     <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                     <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                     <Heart size={64} className="text-white/30 fill-white/30 animate-heartbeat" />
                     <button 
                        onClick={closeModal}
                        className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition backdrop-blur-md"
                     >
                        <X size={20} />
                     </button>
                 </div>

                 <div className="p-8 text-center">
                     {redeemed.includes(selectedCoupon.id) ? (
                         <div className="animate-in slide-in-from-bottom-4 fade-in duration-500">
                             <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                 <CheckCircle size={32} />
                             </div>
                             <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">Redeemed!</h3>
                             <p className="text-gray-600 mb-6">Get ready for something special.</p>
                             {showConfetti && (
                                <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden">
                                    {[...Array(20)].map((_, i) => (
                                        <div 
                                            key={i}
                                            className="absolute w-2 h-2 bg-primary rounded-full animate-float"
                                            style={{
                                                left: `${Math.random() * 100}%`,
                                                top: '-10px',
                                                animationDuration: `${1 + Math.random() * 2}s`,
                                                backgroundColor: ['#ee2b6c', '#fb7185', '#fcd34d', '#34d399'][Math.floor(Math.random() * 4)]
                                            }}
                                        ></div>
                                    ))}
                                </div>
                             )}
                             <button onClick={closeModal} className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition">Close</button>
                         </div>
                     ) : (
                         <div>
                             <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">{selectedCoupon.title}</h2>
                             <p className="text-gray-500 mb-8 leading-relaxed">{selectedCoupon.desc}</p>
                             
                             <div className="flex flex-col gap-3">
                                 <button 
                                    onClick={handleRedeem}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                                 >
                                     <PartyPopper size={20} className="group-hover:animate-spin" />
                                     Redeem Coupon
                                 </button>
                                 <button 
                                    onClick={closeModal}
                                    className="w-full py-3 text-gray-400 font-medium hover:text-gray-600 transition"
                                 >
                                     Save for later
                                 </button>
                             </div>
                             <p className="mt-6 text-[10px] text-gray-400 uppercase tracking-widest font-bold">Expires: Never • Unlimited Use</p>
                         </div>
                     )}
                 </div>
             </div>
        </div>
      )}
    </div>
  );
};

const CrosswordPage = () => {
    const { solution, width, height, clues } = CROSSWORD_DATA;
    
    // Load state from local storage or initialize empty grid
    const [gridState, setGridState] = useState(() => {
        const saved = localStorage.getItem('crossword_grid');
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                // Simple validation to ensure grid dimensions match
                if (Array.isArray(parsed) && parsed.length === height && Array.isArray(parsed[0]) && parsed[0].length === width) {
                    return parsed;
                }
            } catch (e) {
                console.warn("Failed to load saved crossword state:", e);
            }
        }
        return Array(height).fill(null).map(() => Array(width).fill(""));
    });
    
    const [selectedCell, setSelectedCell] = useState<{r: number, c: number} | null>({ r: 0, c: 0 });
    const [direction, setDirection] = useState<'across' | 'down'>('across');
    const [isChecked, setIsChecked] = useState(false);
    
    // Load solved state
    const [isSolved, setIsSolved] = useState(() => {
        return localStorage.getItem('crossword_solved') === 'true';
    });
    
    // Persist state changes
    useEffect(() => {
        localStorage.setItem('crossword_grid', JSON.stringify(gridState));
    }, [gridState]);

    useEffect(() => {
        localStorage.setItem('crossword_solved', String(isSolved));
    }, [isSolved]);
    
    const inputRefs = useRef<(HTMLInputElement | null)[][]>([]);
    // Ref to store clue elements for scrolling
    const clueRefs = useRef<{[key: string]: HTMLDivElement | null}>({});
    
    if (inputRefs.current.length !== height) {
        inputRefs.current = Array(height).fill(null).map(() => Array(width).fill(null));
    }

    const isBlock = (r: number, c: number) => {
        if (r < 0 || r >= height || c < 0 || c >= width) return true;
        return solution[r][c] === '.';
    };

    // Scroll active clue into view when selection changes
    useEffect(() => {
        if (!selectedCell) return;
        
        let startR = selectedCell.r;
        let startC = selectedCell.c;
        
        // Trace back to finding the starting cell of the word
        if (direction === 'across') {
            while (startC > 0 && !isBlock(startR, startC - 1)) startC--;
        } else {
            while (startR > 0 && !isBlock(startR - 1, startC)) startR--;
        }
        
        // Find clue with this start position
        const relevantClue = clues[direction].find(c => c.row === startR && c.col === startC);
        
        if (relevantClue) {
             const el = clueRefs.current[`${direction}-${relevantClue.number}`];
             el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [selectedCell, direction]);

    const checkSolution = (currentGrid: string[][]) => {
        for (let r = 0; r < height; r++) {
            for (let c = 0; c < width; c++) {
                const solChar = solution[r][c];
                const userChar = currentGrid[r][c];
                if (solChar !== '.' && userChar !== solChar) {
                    return false;
                }
            }
        }
        return true;
    };

    const handleCellClick = (r: number, c: number) => {
        if (isBlock(r, c)) return;

        // If clicking the same cell, toggle direction
        if (selectedCell?.r === r && selectedCell?.c === c) {
            setDirection(prev => prev === 'across' ? 'down' : 'across');
            setTimeout(() => {
                inputRefs.current[r][c]?.focus();
            }, 0);
            return;
        }

        // Intelligent direction selection
        let newDirection = direction;
        
        const hasWordAcross = () => {
             let len = 1;
             if (c > 0 && !isBlock(r, c-1)) len++;
             if (c < width - 1 && !isBlock(r, c+1)) len++;
             return len > 1;
        };
        const hasWordDown = () => {
             let len = 1;
             if (r > 0 && !isBlock(r-1, c)) len++;
             if (r < height - 1 && !isBlock(r+1, c)) len++;
             return len > 1;
        };

        const isAcross = hasWordAcross();
        const isDown = hasWordDown();

        // If current direction is invalid (length 1) but other is valid, switch
        if (direction === 'across' && !isAcross && isDown) {
            newDirection = 'down';
        } else if (direction === 'down' && !isDown && isAcross) {
            newDirection = 'across';
        }

        setDirection(newDirection);
        setSelectedCell({ r, c });
        
        setTimeout(() => {
            inputRefs.current[r][c]?.focus();
        }, 0);
    };

    const handleClueClick = (r: number, c: number, d: 'across' | 'down') => {
        setDirection(d);
        setSelectedCell({ r, c });
        setTimeout(() => {
            inputRefs.current[r][c]?.focus();
        }, 0);
    };

    const handleKeyDown = (e: React.KeyboardEvent, r: number, c: number) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigate(r, c + 1);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigate(r, c - 1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigate(r + 1, c);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigate(r - 1, c);
        } else if (e.key === 'Backspace') {
            e.preventDefault();
            const newGrid = gridState.map(row => [...row]);
            newGrid[r][c] = "";
            setGridState(newGrid);
            setIsChecked(false);
            if (direction === 'across') navigate(r, c - 1);
            else navigate(r - 1, c);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, r: number, c: number) => {
        const val = e.target.value.toUpperCase();
        if (val.length > 0) {
            const char = val.slice(-1);
            const newGrid = gridState.map(row => [...row]);
            newGrid[r][c] = char;
            setGridState(newGrid);
            setIsChecked(false); 

            if (checkSolution(newGrid)) {
                setIsSolved(true);
            }

            if (direction === 'across') navigate(r, c + 1);
            else navigate(r + 1, c);
        }
    };

    const navigate = (r: number, c: number) => {
        if (r >= 0 && r < height && c >= 0 && c < width && !isBlock(r, c)) {
            setSelectedCell({ r, c });
            inputRefs.current[r][c]?.focus();
        }
    };

    const checkAnswers = () => {
        setIsChecked(true);
        if (checkSolution(gridState)) {
            setIsSolved(true);
        }
    };

    const reset = () => {
        setGridState(Array(height).fill(null).map(() => Array(width).fill("")));
        setIsChecked(false);
        setIsSolved(false);
        setSelectedCell({ r: 0, c: 0 });
        localStorage.removeItem('crossword_grid');
        localStorage.removeItem('crossword_solved');
    };

    const revealLetter = () => {
        if (!selectedCell) return;
        const { r, c } = selectedCell;
        if (isBlock(r, c)) return;
        
        const correctChar = solution[r][c];
        const newGrid = gridState.map(row => [...row]);
        newGrid[r][c] = correctChar;
        setGridState(newGrid);
        
        if (checkSolution(newGrid)) {
            setIsSolved(true);
        }
    };

    const getCellNumber = (r: number, c: number) => {
        let num = null;
        [...clues.across, ...clues.down].forEach(clue => {
            if (clue.row === r && clue.col === c) num = clue.number;
        });
        return num;
    };
    
    const getActiveWordCells = () => {
        if (!selectedCell) return [];
        const { r, c } = selectedCell;
        const cells = [];
        
        if (direction === 'across') {
             let startC = c;
             while(startC > 0 && !isBlock(r, startC - 1)) startC--;
             let endC = c;
             while(endC < width - 1 && !isBlock(r, endC + 1)) endC++;
             
             for(let i=startC; i<=endC; i++) cells.push(`${r}-${i}`);
        } else {
             let startR = r;
             while(startR > 0 && !isBlock(startR - 1, c)) startR--;
             let endR = r;
             while(endR < height - 1 && !isBlock(endR + 1, c)) endR++;
             
             for(let i=startR; i<=endR; i++) cells.push(`${i}-${c}`);
        }
        return cells;
    };

    const activeCells = getActiveWordCells();

    return (
        <div className="flex flex-col items-center pt-8 pb-12 px-4 lg:px-20 bg-secondary min-h-screen relative overflow-hidden animate-page-enter">
             {/* Keyframes for falling confetti */}
             <style>{`
                @keyframes fall-sway {
                    0% { transform: translateY(-10vh) translateX(-10px) rotate(0deg); opacity: 1; }
                    25% { transform: translateY(20vh) translateX(15px) rotate(45deg); }
                    50% { transform: translateY(50vh) translateX(-10px) rotate(180deg); }
                    75% { transform: translateY(80vh) translateX(15px) rotate(225deg); }
                    100% { transform: translateY(110vh) translateX(-5px) rotate(360deg); opacity: 0; }
                }
                .animate-fall-sway {
                    animation: fall-sway linear forwards;
                }
             `}</style>

            {isSolved && (
                <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
                    {/* Falling Hearts */}
                    {[...Array(50)].map((_, i) => (
                        <Heart 
                            key={i}
                            className="absolute animate-fall-sway text-primary/80" 
                            style={{
                                left: `${Math.random() * 100}vw`,
                                top: `-50px`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                                animationDelay: `${Math.random() * 3}s`,
                                width: `${16 + Math.random() * 24}px`,
                                height: `${16 + Math.random() * 24}px`,
                                color: ['#ee2b6c', '#f43f5e', '#e11d48', '#fda4af'][Math.floor(Math.random() * 4)],
                                fill: 'currentColor'
                            }}
                        />
                    ))}
                    {/* Success Modal */}
                    <div className="pointer-events-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl text-center border-4 border-primary/20 animate-in zoom-in duration-500 max-w-sm w-full mx-4">
                        <div className="mb-4 flex justify-center">
                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center animate-bounce">
                                <CheckCircle size={32} />
                            </div>
                        </div>
                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Perfect!</h2>
                        <p className="text-gray-600 mb-6 font-body">You know us so well. My heart is yours, always. &lt;3</p>
                        <button onClick={() => setIsSolved(false)} className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/30">Close</button>
                    </div>
                </div>
            )}

            <div className="max-w-[1080px] w-full flex flex-col gap-8 z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl lg:text-4xl font-black text-gray-900 font-display">Birthday Crossword</h1>
                            <button onClick={reset} className="p-1 rounded-full hover:bg-gray-100 transition hover:rotate-180 duration-500" title="Reset">
                                <RefreshCcw size={20} className="text-primary" />
                            </button>
                        </div>
                        <p className="text-gray-500">Solve the clues to unlock your special birthday message! ❤️</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="hidden sm:block p-4 bg-white rounded-2xl shadow-sm border border-gray-100 min-w-[140px] transform hover:scale-105 transition duration-300">
                            <p className="text-xs font-bold uppercase text-gray-400">Status</p>
                            <p className={`text-xl font-bold ${isChecked ? (isSolved ? 'text-green-500' : 'text-primary') : 'text-gray-800'}`}>
                                {isSolved ? "Solved!" : (isChecked ? "Checked" : "Playing")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 mt-4">
                    <div className="lg:col-span-7">
                        <div className="bg-gray-900 p-4 rounded-xl shadow-lg relative overflow-hidden">
                             <div 
                                className="grid gap-1 bg-gray-900 border-4 border-gray-900"
                                style={{ gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))` }}
                             >
                                {solution.map((rowStr, rIdx) => (
                                    rowStr.split('').map((cellChar, cIdx) => {
                                        const block = cellChar === '.';
                                        const cellNum = getCellNumber(rIdx, cIdx);
                                        const isSelected = selectedCell?.r === rIdx && selectedCell?.c === cIdx;
                                        const isActiveWord = activeCells.includes(`${rIdx}-${cIdx}`);
                                        
                                        let cellStatusClass = 'bg-white text-gray-900';
                                        if (block) {
                                            cellStatusClass = 'bg-gray-900';
                                        } else if (isChecked) {
                                            if (gridState[rIdx][cIdx] === cellChar) {
                                                cellStatusClass = 'bg-green-100 text-green-700';
                                            } else if (gridState[rIdx][cIdx] !== "") {
                                                cellStatusClass = 'bg-red-100 text-red-600';
                                            }
                                        } else if (isSelected) {
                                            cellStatusClass = 'bg-yellow-200 ring-2 ring-primary ring-inset';
                                        } else if (isActiveWord) {
                                            cellStatusClass = 'bg-rose-200';
                                        }

                                        return (
                                            <div 
                                                key={`${rIdx}-${cIdx}`} 
                                                className={`aspect-square w-full relative ${block ? 'bg-gray-900' : ''}`}
                                                onClick={() => handleCellClick(rIdx, cIdx)}
                                            >
                                                {!block && (
                                                    <>
                                                        {cellNum && (
                                                            <span className="absolute top-0.5 left-0.5 text-[8px] sm:text-[10px] font-bold text-gray-500 z-10 select-none pointer-events-none">
                                                                {cellNum}
                                                            </span>
                                                        )}
                                                        <input
                                                            ref={el => { inputRefs.current[rIdx][cIdx] = el; }}
                                                            type="text"
                                                            maxLength={1}
                                                            value={gridState[rIdx][cIdx]}
                                                            onChange={(e) => handleChange(e, rIdx, cIdx)}
                                                            onKeyDown={(e) => handleKeyDown(e, rIdx, cIdx)}
                                                            className={`w-full h-full text-center font-bold text-lg sm:text-2xl uppercase focus:outline-none focus:z-20 rounded-sm cursor-pointer caret-transparent ${cellStatusClass}`}
                                                        />
                                                    </>
                                                )}
                                            </div>
                                        )
                                    })
                                ))}
                             </div>
                        </div>
                        <div className="flex gap-4 mt-6">
                           <button onClick={revealLetter} className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 rounded-xl font-bold text-sm shadow-sm transition hover:scale-105 active:scale-95"><Lightbulb size={16}/> Reveal Letter</button>
                           <button onClick={checkAnswers} className="flex items-center gap-2 px-6 py-3 bg-primary text-white hover:bg-primary/90 rounded-xl font-bold text-sm shadow-lg shadow-primary/30 transition ml-auto hover:scale-105 active:scale-95"><CheckCircle size={16}/> Check Answers</button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 bg-white rounded-3xl border border-gray-100 p-6 h-fit">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><span className="text-primary">●</span> Clues</h3>
                        <div className="space-y-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            <div>
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 transition-colors ${direction === 'across' ? 'text-primary' : 'text-gray-400'}`}>Across</h4>
                                <div className="space-y-3">
                                    {clues.across.map((clue) => {
                                        const isFocused = direction === 'across' && activeCells.includes(`${clue.row}-${clue.col}`);
                                        return (
                                            <div 
                                                key={`across-${clue.number}`}
                                                ref={el => { if (clueRefs.current) clueRefs.current[`across-${clue.number}`] = el }}
                                                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${isFocused ? 'bg-rose-100 border-l-4 border-primary pl-4' : 'hover:bg-gray-50 border-l-4 border-transparent hover:pl-4'}`}
                                                onClick={() => handleClueClick(clue.row, clue.col, 'across')}
                                            >
                                                <span className={`font-bold mr-2 ${isFocused ? 'text-primary' : 'text-gray-400'}`}>{clue.number}</span>
                                                <span className="font-medium text-sm">{clue.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div>
                                <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 transition-colors ${direction === 'down' ? 'text-primary' : 'text-gray-400'}`}>Down</h4>
                                <div className="space-y-3">
                                    {clues.down.map((clue) => {
                                        const isFocused = direction === 'down' && activeCells.includes(`${clue.row}-${clue.col}`);
                                        return (
                                            <div 
                                                key={`down-${clue.number}`}
                                                ref={el => { if (clueRefs.current) clueRefs.current[`down-${clue.number}`] = el }}
                                                className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${isFocused ? 'bg-rose-100 border-l-4 border-primary pl-4' : 'hover:bg-gray-50 border-l-4 border-transparent hover:pl-4'}`}
                                                onClick={() => handleClueClick(clue.row, clue.col, 'down')}
                                            >
                                                <span className={`font-bold mr-2 ${isFocused ? 'text-primary' : 'text-gray-400'}`}>{clue.number}</span>
                                                <span className="font-medium text-sm">{clue.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const GiftPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 p-4 animate-page-enter">
            <div className="text-center mb-12">
                <h1 className="font-display text-4xl font-bold text-gray-900 mb-2">A Little Gift</h1>
                <p className="text-gray-500 font-body">For the most special person.</p>
            </div>

            <div 
                className="relative w-72 h-72 cursor-pointer group" 
                onClick={() => setIsOpen(true)}
            >
                {!isOpen ? (
                    <div className="relative w-full h-full flex items-center justify-center animate-float">
                        <img 
                            src={IMAGES.GIFT_BOX} 
                            alt="Gift Box" 
                            className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-105" 
                        />
                        <div className="absolute -bottom-8 left-0 right-0 text-center">
                            <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest text-gray-500 shadow-sm animate-pulse">
                                Tap to open
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                            <Sparkles className="text-yellow-500" size={32} />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-gray-800 mb-4">Happy Birthday!</h3>
                        <p className="text-gray-600 font-body leading-relaxed mb-6">
                            My presence is the present! <br/> Just kidding. <br/>
                            Check your real mailbox soon! 🎁
                        </p>
                        <button 
                            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                            className="text-xs text-gray-400 hover:text-gray-600 underline"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

const MemoriesPage = () => {
    const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

    return (
        <div className="min-h-screen bg-[#f5f5f4] py-12 px-4 animate-page-enter">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Gallery</h1>
                    <p className="text-gray-500 font-body max-w-lg mx-auto">Moments I cherish forever.</p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-2">
                    {MEMORIES.map((memory) => (
                        <div 
                            key={memory.id}
                            onClick={() => setSelectedMemory(memory)}
                            className={`break-inside-avoid bg-white p-3 pb-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:z-20 cursor-pointer ${memory.rotation}`}
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-3 relative group">
                                <img 
                                    src={memory.imageUrl} 
                                    alt={memory.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                            <div className="text-center font-handwriting">
                                <h3 className="text-xl text-gray-800 font-bold mb-1">{memory.title}</h3>
                                <p className="text-gray-400 text-xs font-sans uppercase tracking-wider">{memory.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedMemory && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedMemory(null)}
                >
                    <button className="absolute top-6 right-6 text-white/50 hover:text-white transition p-2 bg-white/10 rounded-full">
                        <X size={24} />
                    </button>
                    
                    <div 
                        className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center relative"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <div className="relative bg-white p-2 sm:p-4 shadow-2xl rounded-sm animate-in zoom-in-95 duration-300">
                             <img 
                                src={selectedMemory.imageUrl} 
                                alt={selectedMemory.title} 
                                className="max-w-full max-h-[75vh] object-contain"
                            />
                            <div className="mt-4 text-center">
                                <h2 className="text-2xl font-handwriting font-bold text-gray-800">{selectedMemory.title}</h2>
                                <p className="text-gray-400 text-sm font-sans uppercase tracking-widest mt-1">{selectedMemory.date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-secondary font-sans text-gray-900 pb-20 md:pb-0">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letter" element={<LetterPage />} />
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="/crossword" element={<CrosswordPage />} />
          <Route path="/gift" element={<GiftPage />} />
          <Route path="/memories" element={<MemoriesPage />} />
        </Routes>
        <BottomNav />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;