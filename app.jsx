```react
import React, { useState } from 'react';
import { 
  User, Lock, Eye, EyeOff, Menu, Headphones, 
  ChevronDown, Check, X, LogOut, Shield, Zap, 
  UserPlus, UserMinus, Clock, Send, Smartphone,
  Link2, ArrowLeft, MessageSquare, Video, Info
} from 'lucide-react';

// Custom CSS untuk tema Dark Neon Purple, Font Orbitron, dan Animasi Premium
const CustomStyles = () => (
  <style dangerouslySetInnerHTML={{__html: `
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&display=swap');
    
    :root {
      --neon-purple: #b14bf4;
      --neon-pink: #ff2a85;
      --neon-blue: #00f3ff;
      --dark-bg: #05010a;
      --glass-bg: rgba(20, 10, 40, 0.45);
    }

    body {
      background-color: var(--dark-bg);
      color: white;
      font-family: 'Orbitron', sans-serif;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    .font-orbitron { font-family: 'Orbitron', sans-serif; }
    
    .bg-app {
      background: radial-gradient(circle at top center, #1b053a 0%, var(--dark-bg) 100%);
    }

    .neon-text {
      text-shadow: 0 0 5px var(--neon-purple), 0 0 15px var(--neon-purple);
    }
    
    .neon-text-pink {
      text-shadow: 0 0 5px var(--neon-pink), 0 0 15px var(--neon-pink);
    }

    .neon-text-blue {
      text-shadow: 0 0 5px var(--neon-blue), 0 0 15px var(--neon-blue);
    }

    .neon-box {
      box-shadow: 0 0 15px rgba(177, 75, 244, 0.35), inset 0 0 10px rgba(177, 75, 244, 0.15);
      border: 1px solid rgba(177, 75, 244, 0.5);
    }
    
    .neon-box-pink {
      box-shadow: 0 0 15px rgba(255, 42, 133, 0.35), inset 0 0 10px rgba(255, 42, 133, 0.15);
      border: 1px solid rgba(255, 42, 133, 0.5);
    }

    .neon-box-blue {
      box-shadow: 0 0 15px rgba(0, 243, 255, 0.35), inset 0 0 10px rgba(0, 243, 255, 0.15);
      border: 1px solid rgba(0, 243, 255, 0.5);
    }

    .glass {
      background: var(--glass-bg);
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.07);
    }

    .input-neon:focus {
      outline: none;
      box-shadow: 0 0 15px rgba(177, 75, 244, 0.6);
      border-color: var(--neon-purple);
    }

    .input-neon-pink:focus {
      outline: none;
      box-shadow: 0 0 15px rgba(255, 42, 133, 0.6);
      border-color: var(--neon-pink);
    }

    /* Animasi Halus */
    @keyframes slideUp {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-slide-up { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
    .animate-scale-in { animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
    
    @keyframes slideRight {
      from { transform: translateX(20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    .animate-slide-right { animation: slideRight 0.4s ease-out forwards; }

    @keyframes slideLeft {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    .animate-slide-left { animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

    /* Hide Scrollbar */
    ::-webkit-scrollbar { width: 0px; background: transparent; }
  `}} />
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [loggedUser, setLoggedUser] = useState('');
  
  // Login State (Sudah otomatis terisi 'vinzz' dan '00')
  const [username, setUsername] = useState('vinzz');
  const [password, setPassword] = useState('00');
  const [showPassword, setShowPassword] = useState(false);
  
  // Dashboard State
  const [activeTab, setActiveTab] = useState('BUG NOMOR'); // 'BUG NOMOR' atau 'BUG GROUP'
  const [targetNumber, setTargetNumber] = useState('');
  const [targetGroup, setTargetGroup] = useState('');
  const [selectedBug, setSelectedBug] = useState('PILIH BUG ATTACK');
  const [isBugDropdownOpen, setIsBugDropdownOpen] = useState(false);
  
  // Sidebar Menu State
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Admin State
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [newRole, setNewRole] = useState('MEMBER');
  
  // Admin Form States (Bebas dari bug kehilangan fokus keyboard)
  const [deleteTarget, setDeleteTarget] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newDuration, setNewDuration] = useState('');
  const [extendTarget, setExtendTarget] = useState('');
  const [extendDays, setExtendDays] = useState('');

  // Global Popup State
  const [popup, setPopup] = useState({ show: false, type: '', message: '' });

  // Gambar Anime Cewek Cyberpunk yang Keren dan Estetik dengan pencahayaan neon ungu/pink
  const animeAvatar = "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=300&auto=format&fit=crop"; 
  const animeBanner = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop";
  const animeVersionGirl = "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop";

  const bugList = [
    'CRASH WHATSAPP', 'FREEZE', 'BLANK', 'FORCE CLOSE', 
    'RESET NO', 'CRASH', 'UI CRASH ANDRO', 'CRASH IP'
  ];
  
  const roleList = ['OWNER', 'MEMBER', 'ADMIN', 'HOST', 'DEV'];

  const showPopupMessage = (type, message) => {
    setPopup({ show: true, type, message });
  };

  const handleLogin = () => {
    if (username === 'vinzz' && password === '00') {
      setLoggedUser(username);
      setCurrentPage('dashboard');
    } else {
      showPopupMessage('error', 'Login Gagal! Username atau Password salah.');
    }
  };

  const handleSendBug = () => {
    if (activeTab === 'BUG NOMOR') {
      if (!targetNumber) {
        showPopupMessage('error', 'Masukkan nomor target terlebih dahulu!');
        return;
      }
      if (selectedBug === 'PILIH BUG ATTACK') {
        showPopupMessage('error', 'Pilih jenis bug terlebih dahulu!');
        return;
      }
      showPopupMessage('success', `SUKSES SEND BUG TO ${targetNumber}`);
    } else {
      if (!targetGroup) {
        showPopupMessage('error', 'Masukkan Link atau ID Group target!');
        return;
      }
      if (selectedBug === 'PILIH BUG ATTACK') {
        showPopupMessage('error', 'Pilih jenis bug terlebih dahulu!');
        return;
      }
      showPopupMessage('success', `SUKSES SEND BUG TO GROUP ${targetGroup}`);
    }
  };

  const handleAdminAction = (msg) => {
    showPopupMessage('success', msg);
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center overflow-hidden font-orbitron">
      <CustomStyles />
      <div className="w-full max-w-md h-full relative bg-app shadow-2xl overflow-hidden">
        
        {/* ==================================== */}
        {/* HALAMAN 1: LOGIN                     */}
        {/* ==================================== */}
        {currentPage === 'login' && (
          <div className="flex flex-col items-center justify-center min-h-screen px-6 animate-fade-in relative z-10">
            {/* Glow Orbs Background */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-600/25 rounded-full blur-[90px] -z-10 animate-pulse"></div>
            
            <div className="mb-10 flex flex-col items-center animate-slide-up">
              {/* Neon Avatar Glow dengan foto anime cewek keren */}
              <div className="w-28 h-28 rounded-full neon-box p-1 mb-6 relative group">
                <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-spin" style={{ animationDuration: '6s' }}></div>
                <img 
                  src={animeAvatar} 
                  alt="" 
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-purple-600 rounded-full border-2 border-black flex items-center justify-center">
                  <Shield size={12} className="text-white" />
                </div>
              </div>
              <h1 className="text-2xl font-black text-white neon-text tracking-widest mb-2">WELCOME BACK</h1>
              <p className="text-purple-300/70 text-xs tracking-widest font-medium">SIGN IN TO CONTINUE</p>
            </div>

            <div className="w-full max-w-sm animate-slide-up" style={{ animationDelay: '0.1s' }}>
              
              {/* Input Username */}
              <div className="relative w-full mb-4 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-purple-400/70 group-focus-within:text-purple-400 transition-colors" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-purple-500/30 text-white rounded-xl py-3.5 pl-12 pr-4 placeholder-gray-500 transition-all duration-300 backdrop-blur-sm input-neon"
                />
              </div>

              {/* Input Password */}
              <div className="relative w-full mb-4 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="text-purple-400/70 group-focus-within:text-purple-400 transition-colors" size={20} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-purple-500/30 text-white rounded-xl py-3.5 pl-12 pr-12 placeholder-gray-500 transition-all duration-300 backdrop-blur-sm input-neon"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-purple-400/70 hover:text-purple-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              
              <button 
                onClick={handleLogin}
                className="w-full mt-6 bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(177,75,244,0.6)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 tracking-widest text-lg border border-purple-400/50"
              >
                <Zap size={20} className="fill-current" />
                SIGN IN
              </button>
            </div>
          </div>
        )}

        {/* ==================================== */}
        {/* HALAMAN 2: DASHBOARD                 */}
        {/* ==================================== */}
        {currentPage === 'dashboard' && (
          <div className="flex flex-col min-h-screen bg-app animate-fade-in relative z-10 pb-10">
            {/* Header */}
            <header className="flex items-center justify-between p-5 glass sticky top-0 z-20 border-b border-purple-500/20">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="text-purple-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 active:scale-95 transition-transform"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-base font-bold neon-text tracking-widest">HAI, {loggedUser.toUpperCase()}</h2>
              <div className="flex items-center gap-4">
                <button className="text-purple-400 hover:text-white transition-colors relative">
                  <Headphones size={22} />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full shadow-[0_0_5px_#ff2a85]"></span>
                </button>
                <button onClick={() => setCurrentPage('admin')} className="w-9 h-9 rounded-full neon-box overflow-hidden border-2 border-purple-400">
                   <img src={animeAvatar} alt="" className="w-full h-full object-cover"/>
                </button>
              </div>
            </header>

            <div className="p-5 flex-1 overflow-y-auto animate-slide-right">
              
              {/* Profile Card Capsule */}
              <div className="glass rounded-[30px] p-2 flex items-center gap-4 mb-6 neon-box relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/25 rounded-full blur-[40px]"></div>
                <div className="w-16 h-16 rounded-full bg-purple-900/50 p-0.5 border-2 border-purple-400 shrink-0 ml-1 overflow-hidden">
                  <img src={animeAvatar} alt="" className="w-full h-full rounded-full object-cover"/>
                </div>
                <div className="flex-1 pr-4 z-10">
                  <h3 className="font-bold text-base text-white mb-0.5">{loggedUser.toUpperCase()}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={12} className="text-pink-400" />
                    <span className="text-[10px] text-pink-400 font-bold tracking-wider">ROLE: OWNER</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-purple-300" />
                    <span className="text-[9px] text-purple-300/80 font-mono">EXP: 9999-999-999</span>
                  </div>
                </div>
              </div>

              {/* Anime Banner (High-Quality Cyberpunk Girl Theme) */}
              <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 neon-box relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10"></div>
                <img 
                  src={animeBanner} 
                  alt="" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h4 className="text-lg font-black neon-text text-white">SYSTEM ONLINE</h4>
                  <p className="text-[10px] font-mono text-purple-200/90 tracking-widest uppercase">Payload injection ready</p>
                </div>
              </div>

              {/* Menu Tabs */}
              <div className="flex gap-4 mb-6">
                <button 
                  type="button"
                  onClick={() => setActiveTab('BUG NOMOR')}
                  className={`flex-1 py-3.5 rounded-xl font-bold text-xs tracking-widest transition-all duration-300 ${
                    activeTab === 'BUG NOMOR' 
                      ? 'bg-purple-600 border border-purple-400 text-white shadow-[0_0_15px_rgba(177,75,244,0.5)]' 
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  BUG NOMOR
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveTab('BUG GROUP')}
                  className={`flex-1 py-3.5 rounded-xl font-bold text-xs tracking-widest transition-all duration-300 ${
                    activeTab === 'BUG GROUP' 
                      ? 'bg-purple-600 border border-purple-400 text-white shadow-[0_0_15px_rgba(177,75,244,0.5)]' 
                      : 'bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  BUG GROUP
                </button>
              </div>

              {/* Action Area */}
              <div className="glass p-5 rounded-2xl mb-6 border border-purple-500/20 shadow-xl">
                {activeTab === 'BUG NOMOR' ? (
                  <>
                    <label className="block text-[10px] font-bold text-purple-300 mb-2.5 tracking-widest">NOMOR TARGET</label>
                    <div className="relative mb-5 group">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/70" size={20} />
                      <input 
                        type="text" 
                        placeholder="+62xxxx" 
                        value={targetNumber}
                        onChange={(e) => setTargetNumber(e.target.value)}
                        className="w-full bg-black/40 border border-purple-500/30 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(177,75,244,0.3)] transition-all font-mono text-sm"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <label className="block text-[10px] font-bold text-purple-300 mb-2.5 tracking-widest">LINK / ID GROUP TARGET</label>
                    <div className="relative mb-5 group">
                      <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400/70" size={20} />
                      <input 
                        type="text" 
                        placeholder="https://chat.whatsapp.com/..." 
                        value={targetGroup}
                        onChange={(e) => setTargetGroup(e.target.value)}
                        className="w-full bg-black/40 border border-purple-500/30 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_10px_rgba(177,75,244,0.3)] transition-all font-mono text-sm"
                      />
                    </div>
                  </>
                )}

                <label className="block text-[10px] font-bold text-purple-300 mb-2.5 tracking-widest">PILIH BUG</label>
                <button 
                  type="button"
                  onClick={() => setIsBugDropdownOpen(true)}
                  className="w-full bg-black/40 border border-purple-500/30 rounded-xl py-3.5 px-4 text-white flex items-center justify-between hover:border-purple-500 transition-colors mb-6"
                >
                  <span className={`font-mono text-xs ${selectedBug === 'PILIH BUG ATTACK' ? 'text-gray-500' : 'text-purple-300 font-bold'}`}>
                    {selectedBug}
                  </span>
                  <ChevronDown size={18} className="text-purple-400" />
                </button>

                <button 
                  type="button"
                  onClick={handleSendBug}
                  className="w-full bg-gradient-to-r from-purple-700 to-pink-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(255,42,133,0.4)] transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 tracking-widest text-sm"
                >
                  <Send size={18} className="animate-pulse" />
                  SEND BUG ATTACK
                </button>
              </div>
            </div>

            {/* Bottom Sheet Dropdown untuk Pilih Bug */}
            {isBugDropdownOpen && (
              <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-md animate-fade-in" onClick={() => setIsBugDropdownOpen(false)}>
                <div 
                  className="w-f