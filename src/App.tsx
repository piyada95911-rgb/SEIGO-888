import React, { useState, useEffect } from 'react';
import { 
  ShoppingCart, 
  User, 
  ChevronUp, 
  Home, 
  ClipboardList, 
  Wallet, 
  Settings,
  CreditCard,
  ShoppingBag,
  Search,
  Users,
  Star,
  Newspaper,
  BookOpen,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SEIGO_LOGO = "https://picsum.photos/seed/seigo/100/100"; // Placeholder for logo

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({
    days: 0,
    hours: 21,
    minutes: 29,
    seconds: 24
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 overflow-hidden rounded-lg bg-[#1A4D4D] p-1">
            <img src={SEIGO_LOGO} alt="SEIGO" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
          </div>
          <span className="text-2xl font-bold italic tracking-tighter text-[#E61E25]">888</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
            </div>
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E61E25] text-[10px] font-bold text-white">
              0
            </span>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <User className="h-5 w-5 text-gray-600" />
          </div>
        </div>
      </header>

      {/* Hero Countdown Section */}
      <section className="relative overflow-hidden bg-[#E61E25] px-4 pt-8 pb-20 text-center text-white rounded-b-[40px]">
        <h1 className="mb-2 text-2xl font-bold">สลากรอบใหม่จะพร้อมให้บริการใน</h1>
        <p className="mb-8 text-sm opacity-90">16 เมษายน 2567 • 12 : 00 : 00 น.</p>
        
        <div className="flex justify-center gap-3">
          <CountdownBox value={timeLeft.days} label="วัน" />
          <div className="mt-4 text-2xl font-bold">:</div>
          <CountdownBox value={timeLeft.hours} label="ชม." />
          <div className="mt-4 text-2xl font-bold">:</div>
          <CountdownBox value={timeLeft.minutes} label="นาที" />
          <div className="mt-4 text-2xl font-bold">:</div>
          <CountdownBox value={timeLeft.seconds} label="วินาที" />
        </div>
      </section>

      {/* Lottery Results Card */}
      <div className="mx-4 -mt-12 overflow-hidden rounded-3xl bg-white shadow-xl">
        <div className="bg-[#E61E25] py-2 text-center text-sm font-bold text-white">
          รางวัลที่ 1
        </div>
        <div className="py-8 text-center">
          <span className="text-6xl font-black tracking-widest text-[#E61E25]">820866</span>
        </div>
        
        <div className="grid grid-cols-2 gap-px bg-gray-100">
          <ResultBox label="เลขหน้า 3 ตัว" values={["479", "054"]} />
          <ResultBox label="เลขท้าย 2 ตัว" values={["06"]} highlight />
        </div>
        <div className="border-t border-gray-100">
          <ResultBox label="เลขท้าย 3 ตัว" values={["068", "837"]} fullWidth />
        </div>
      </div>

      {/* Services Section */}
      <section className="mt-12 px-4">
        <h2 className="mb-6 text-center text-xs font-bold tracking-[0.2em] text-[#E61E25] uppercase">
          SEIGO888 SERVICES
        </h2>
        <div className="grid grid-cols-4 gap-y-8">
          <ServiceItem icon={<CreditCard className="h-6 w-6 text-[#1A4D4D]" />} label="เติมเครดิต" />
          <ServiceItem icon={<ShoppingBag className="h-6 w-6 text-[#F59E0B]" />} label="ช้อปปิ้ง" />
          <ServiceItem icon={<Search className="h-6 w-6 text-[#10B981]" />} label="ตรวจสลาก" />
          <ServiceItem icon={<Users className="h-6 w-6 text-[#6366F1]" />} label="แนะนำเพื่อน" />
          <ServiceItem icon={<Star className="h-6 w-6 text-[#EC4899]" />} label="แต้มสะสม" />
          <ServiceItem icon={<Newspaper className="h-6 w-6 text-[#3B82F6]" />} label="ข่าวสาร" />
          <ServiceItem icon={<BookOpen className="h-6 w-6 text-[#8B5CF6]" />} label="วิธีการใช้" />
          <ServiceItem icon={<HelpCircle className="h-6 w-6 text-[#6B7280]" />} label="ช่วยเหลือ" />
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="mt-12 px-4">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="relative h-48 overflow-hidden rounded-3xl bg-gradient-to-br from-[#FDE68A] to-[#FEF3C7] shadow-lg"
        >
          <img 
            src="https://picsum.photos/seed/promo/800/400" 
            alt="Promotion" 
            className="h-full w-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
            <div className="mb-2 inline-block w-fit rounded-full bg-[#E61E25] px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
              HOT PROMOTION
            </div>
            <h3 className="text-lg font-bold">สลากชุดใหญ่มั่นใจ ปลอดภัย 100% กับ SEIGO888</h3>
          </div>
        </motion.div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed right-6 bottom-24 flex h-12 w-12 items-center justify-center rounded-full bg-[#E61E25] text-white shadow-lg transition-transform hover:scale-110 active:scale-95">
        <ChevronUp className="h-6 w-6" />
      </button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 flex items-center justify-around border-t border-gray-100 bg-white px-2 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <NavItem icon={<Home className="h-6 w-6" />} label="หน้าหลัก" active />
        <NavItem icon={<ClipboardList className="h-6 w-6" />} label="คำสั่งซื้อ" />
        <NavItem icon={<Wallet className="h-6 w-6" />} label="กระเป๋า" />
        <NavItem icon={<Settings className="h-6 w-6" />} label="ตั้งค่า" />
      </nav>
    </div>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-[#E61E25] shadow-inner">
        {value.toString().padStart(2, '0')}
      </div>
      <span className="mt-2 text-xs font-medium">{label}</span>
    </div>
  );
}

function ResultBox({ label, values, highlight, fullWidth }: { label: string; values: string[]; highlight?: boolean; fullWidth?: boolean }) {
  return (
    <div className={`bg-white p-4 text-center ${fullWidth ? 'w-full' : ''}`}>
      <div className={`mb-3 inline-block rounded-full px-4 py-1 text-[10px] font-bold text-white ${highlight ? 'bg-[#E61E25]' : 'bg-gray-100 text-gray-400'}`}>
        {label}
      </div>
      <div className="flex items-center justify-center gap-6">
        {values.map((v, i) => (
          <span key={i} className={`text-2xl font-bold ${highlight ? 'text-[#E61E25]' : 'text-gray-800'}`}>
            {v}
          </span>
        ))}
      </div>
    </div>
  );
}

function ServiceItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div 
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
        {icon}
      </div>
      <span className="text-[11px] font-medium text-gray-600">{label}</span>
    </motion.div>
  );
}

function NavItem({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 ${active ? 'text-[#E61E25]' : 'text-gray-400'}`}>
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </div>
  );
}

