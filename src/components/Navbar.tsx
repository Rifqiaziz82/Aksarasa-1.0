import { useState } from 'react';
import { Home, User, Library, Store } from 'lucide-react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Beranda' },
    { id: 'E-commerce', icon: Store, label: 'Kantin' },
    { id: 'Library', icon: Library, label: 'Perpus' },
    { id: 'profile', icon: User, label: 'Akun' },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="bg-white rounded-4xl shadow-lg border border-gray-100 px-2 py-3 max-w-md mx-auto roun">
        <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'text-red-600 bg-red-50 transform scale-110 shadow-md' 
                  : 'text-gray-500 hover:text-red-500 hover:bg-red-50/50'
              }`}
            >
              <Icon 
                size={22} 
                className={`mb-1 ${isActive ? 'stroke-2' : 'stroke-1.5'}`} 
              />
              <span 
                className={`text-xs font-medium ${
                  isActive ? 'text-red-600' : 'text-gray-500'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
</div>
  );
}
export default Navbar;