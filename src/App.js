import React, { useState, createContext, useContext } from 'react';
import { 
  Users, Calendar, Trophy, Settings, Search, Crown, 
  MapPin, User, Star, MessageCircle,
  Shield, Edit, LogOut, X, ChevronRight,
  Bell, Home
} from 'lucide-react';

// Auth Context
const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock Database (replace with Supabase later)
const mockDB = {
  users: [
    { 
      id: '1', 
      email: 'admin@picklematch.com', 
      name: 'System Admin', 
      role: 'admin',
      skillLevel: "Bring it on!",
      bio: 'System administrator',
      verified: true,
      status: 'active'
    }
  ],
  facilities: [
    {
      id: '1',
      name: 'Rogers Adult Wellness Center',
      address: '2001 W Persimmon St, Rogers AR 72756',
      description: '3 indoor wood courts - reservations & membership required',
      phone: '479-631-3333',
      email: '',
      latitude: 36.3293,
      longitude: -94.1561,
      amenities: ['Indoor Courts', 'Restrooms', 'Water', 'Lights'],
      rating: 4.2,
      verified: true,
      courts: 3,
      type: 'indoor'
    },
    {
      id: '2',
      name: 'Bentonville Community Center',
      address: '1101 SW Citizens Cir, Bentonville AR 72713',
      description: '11 indoor/outdoor courts; day pass or membership',
      phone: '479-696-0200',
      email: 'bcc@bentonvillear.com',
      latitude: 36.3523,
      longitude: -94.2142,
      amenities: ['Indoor Courts', 'Outdoor Courts', 'Lights', 'Restrooms', 'Water'],
      rating: 4.8,
      verified: true,
      courts: 11,
      type: 'mixed'
    },
    {
      id: '3',
      name: 'Osage Park',
      address: '700 SW 16th St, Bentonville AR 72712',
      description: 'Urban park with lighted outdoor courts, food-truck plaza & dog park',
      phone: '',
      email: '',
      latitude: 36.3632,
      longitude: -94.2191,
      amenities: ['Outdoor Courts', 'Lights', 'Food Trucks', 'Dog Park'],
      rating: 4.5,
      verified: true,
      courts: 4,
      type: 'outdoor'
    }
  ],
  players: [
    {
      id: '2',
      name: 'Sarah Chen',
      skillLevel: "I think I've got the hang of this",
      bio: 'Love playing doubles and meeting new players!',
      age: 32,
      location: 'Bentonville, AR',
      rating: 4.2,
      verified: true,
      wins: 15,
      losses: 8,
      distance: 2.3
    },
    {
      id: '3',
      name: 'Mike Rodriguez',
      skillLevel: "Bring it on!",
      bio: 'Competitive player looking for challenging matches',
      age: 28,
      location: 'Rogers, AR',
      rating: 4.7,
      verified: true,
      wins: 22,
      losses: 5,
      distance: 5.1
    },
    {
      id: '4',
      name: 'Emily Davis',
      skillLevel: "I'm new, where's the kitchen?",
      bio: 'Just started playing and loving it! Looking for patient partners',
      age: 25,
      location: 'Fayetteville, AR',
      rating: 3.1,
      verified: true,
      wins: 3,
      losses: 7,
      distance: 12.8
    }
  ],
  groups: [
    {
      id: '1',
      name: 'Bentonville Beginners',
      description: 'Welcoming group for new players to learn and have fun',
      members: 15,
      type: 'public',
      skillLevel: 'Beginner',
      nextGame: '2025-06-02 10:00 AM'
    },
    {
      id: '2',
      name: 'NWA Competitive League',
      description: 'Serious players competing in weekly tournaments',
      members: 28,
      type: 'public',
      skillLevel: 'Advanced',
      nextGame: '2025-06-01 6:00 PM'
    }
  ],
  matches: [
    {
      id: '1',
      player1: 'Sarah Chen',
      player2: 'Mike Rodriguez',
      date: '2025-06-01',
      time: '10:00 AM',
      facility: 'Bentonville Community Center',
      status: 'scheduled'
    },
    {
      id: '2',
      player1: 'You',
      player2: 'Emily Davis',
      date: '2025-06-02',
      time: '2:00 PM',
      facility: 'Rogers Adult Wellness Center',
      status: 'scheduled'
    }
  ]
};

// Main App Component
const PickleMatch = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isGuest, setIsGuest] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  // Mock authentication functions
  const signIn = async (email, password) => {
    const user = mockDB.users.find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      setIsGuest(false);
      setShowAuth(false);
      return { success: true };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signUp = async (userData) => {
    const newUser = {
      id: Date.now().toString(),
      ...userData,
      role: 'player',
      verified: false,
      status: 'active'
    };
    mockDB.users.push(newUser);
    setCurrentUser(newUser);
    setIsGuest(false);
    setShowAuth(false);
    return { success: true };
  };

  const signOut = () => {
    setCurrentUser(null);
    setIsGuest(true);
    setCurrentView('home');
  };

  const authValue = {
    currentUser,
    isGuest,
    signIn,
    signUp,
    signOut
  };

  return (
    <AuthContext.Provider value={authValue}>
      <div className="min-h-screen bg-gray-50">
        <Header 
          currentView={currentView}
          setCurrentView={setCurrentView}
          setShowAuth={setShowAuth}
          setAuthMode={setAuthMode}
        />
        
        <main className="pb-20 md:pb-0">
          {currentView === 'home' && <HomeView setCurrentView={setCurrentView} />}
          {currentView === 'facilities' && <FacilitiesView />}
          {currentView === 'players' && <PlayersView />}
          {currentView === 'groups' && <GroupsView />}
          {currentView === 'calendar' && <CalendarView />}
          {currentView === 'messages' && <MessagesView />}
          {currentView === 'profile' && <ProfileView />}
          {currentView === 'admin' && <AdminView />}
        </main>

        <Navigation currentView={currentView} setCurrentView={setCurrentView} />

        {showAuth && (
          <AuthModal 
            mode={authMode}
            setMode={setAuthMode}
            onClose={() => setShowAuth(false)}
          />
        )}
      </div>
    </AuthContext.Provider>
  );
};

// Header Component
const Header = ({ currentView, setCurrentView, setShowAuth, setAuthMode }) => {
  const { currentUser, isGuest } = useAuth();

  return (
    <header className="bg-green-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trophy className="h-8 w-8" />
          <h1 className="text-2xl font-bold">PickleMatch</h1>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search facilities, players..."
              className="pl-10 pr-4 py-2 rounded-lg text-gray-900 w-64"
            />
          </div>

          {/* Auth Buttons */}
          {isGuest ? (
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setAuthMode('browse');
                  setShowAuth(true);
                }}
                className="px-4 py-2 bg-green-500 hover:bg-green-400 rounded-lg font-medium"
              >
                Browse as Guest
              </button>
              <button
                onClick={() => {
                  setAuthMode('signup');
                  setShowAuth(true);
                }}
                className="px-4 py-2 bg-white text-green-600 hover:bg-gray-100 rounded-lg font-medium"
              >
                Sign Up Free
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              {currentUser?.role === 'admin' && (
                <button
                  onClick={() => setCurrentView('admin')}
                  className="p-2 hover:bg-green-500 rounded-lg"
                  title="Admin Dashboard"
                >
                  <Crown className="h-5 w-5" />
                </button>
              )}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4" />
                </div>
                <span className="font-medium">{currentUser?.name}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

// Navigation Component
const Navigation = ({ currentView, setCurrentView }) => {
  const { isGuest } = useAuth();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'facilities', label: 'Courts', icon: MapPin },
    { id: 'players', label: 'Players', icon: Users },
    { id: 'groups', label: 'Groups', icon: Trophy },
    { id: 'calendar', label: 'Games', icon: Calendar, authRequired: true },
    { id: 'messages', label: 'Chat', icon: MessageCircle, authRequired: true },
    { id: 'profile', label: 'Profile', icon: User, authRequired: true }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          const isLocked = item.authRequired && isGuest;

          return (
            <button
              key={item.id}
              onClick={() => !isLocked && setCurrentView(item.id)}
              className={`flex-1 flex flex-col items-center py-2 px-1 ${
                isActive 
                  ? 'text-green-600 bg-green-50' 
                  : isLocked 
                    ? 'text-gray-300' 
                    : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
              {isLocked && <div className="text-xs text-red-500">Sign in</div>}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

// Home View Component
const HomeView = ({ setCurrentView }) => {
  const { isGuest } = useAuth();

  return (
    <div className="max-w-6xl mx-auto p-4 space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">🏓</div>
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect Pickleball Match</h2>
        <p className="text-lg mb-6 opacity-90">
          Connect with players, book courts, and join the fastest-growing sport community
        </p>
        
        {isGuest && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => setCurrentView('facilities')}
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Browse Courts
            </button>
            <button 
              onClick={() => setCurrentView('players')}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400"
            >
              Find Players
            </button>
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-green-600">{mockDB.facilities.length}</div>
          <div className="text-gray-600">Courts</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-blue-600">{mockDB.players.length}</div>
          <div className="text-gray-600">Players</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-purple-600">{mockDB.groups.length}</div>
          <div className="text-gray-600">Groups</div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm text-center">
          <div className="text-2xl font-bold text-orange-600">{mockDB.matches.length}</div>
          <div className="text-gray-600">Games Today</div>
        </div>
      </div>

      {/* Featured Facilities */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-xl font-bold mb-4">Popular Courts</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {mockDB.facilities.slice(0, 3).map(facility => (
            <div key={facility.id} className="border rounded-lg p-4 hover:border-green-500 cursor-pointer">
              <h4 className="font-semibold text-green-800">{facility.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{facility.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{facility.rating}</span>
                </div>
                <span className="text-xs text-gray-500">{facility.courts} courts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Games */}
      {!isGuest && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">Your Upcoming Games</h3>
          <div className="space-y-3">
            {mockDB.matches.map(match => (
              <div key={match.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <div className="font-medium">{match.player1} vs {match.player2}</div>
                  <div className="text-sm text-gray-600">{match.facility}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{match.date}</div>
                  <div className="text-sm text-gray-600">{match.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Facilities View Component
const FacilitiesView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredFacilities = mockDB.facilities.filter(facility => {
    const matchesSearch = facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         facility.address.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || facility.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Pickleball Courts</h2>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search courts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Courts</option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">Outdoor</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
      </div>

      {/* Facilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFacilities.map(facility => (
          <div key={facility.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-green-800 mb-1">{facility.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{facility.address}</p>
                </div>
                {facility.verified && (
                  <Shield className="h-5 w-5 text-green-500" />
                )}
              </div>

              <p className="text-gray-700 text-sm mb-4">{facility.description}</p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{facility.rating}</span>
                  <span className="text-gray-500 text-sm">({facility.courts} courts)</span>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  {facility.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {facility.amenities.slice(0, 3).map((amenity, index) => (
                  <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {amenity}
                  </span>
                ))}
                {facility.amenities.length > 3 && (
                  <span className="text-xs text-gray-500">+{facility.amenities.length - 3} more</span>
                )}
              </div>

              <div className="flex space-x-2">
                <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700">
                  Book Court
                </button>
                <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Players View Component
const PlayersView = () => {
  const { isGuest } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = mockDB.players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.skillLevel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isGuest) {
    return (
      <div className="max-w-6xl mx-auto p-4">
        <div className="text-center py-12">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Find Your Perfect Playing Partner</h2>
          <p className="text-gray-600 mb-6">Sign up to connect with players at your skill level</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
            Sign Up to Connect
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Find Players</h2>
        
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search players by name or skill level..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map(player => (
          <div key={player.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-gray-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg flex items-center">
                  {player.name}
                  {player.verified && <Shield className="h-4 w-4 text-green-500 ml-2" />}
                </h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">{player.rating}</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full inline-block mb-2">
                {player.skillLevel}
              </div>
              <p className="text-gray-600 text-sm">{player.bio}</p>
            </div>

            <div className="text-sm text-gray-500 mb-4">
              <div className="flex items-center space-x-2 mb-1">
                <MapPin className="h-4 w-4" />
                <span>{player.location}</span>
                <span>• {player.distance} miles away</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-600">Wins: {player.wins}</span>
                <span className="text-red-600">Losses: {player.losses}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700">
                Connect
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Groups View Component
const GroupsView = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Groups & Communities</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 mb-4">
          Create Group
        </button>
      </div>

      <div className="space-y-4">
        {mockDB.groups.map(group => (
          <div key={group.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-800 mb-2">{group.name}</h3>
                <p className="text-gray-600 mb-3">{group.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{group.members} members</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">{group.skillLevel}</span>
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">{group.type}</span>
                </div>
              </div>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                Join Group
              </button>
            </div>
            {group.nextGame && (
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="text-sm font-medium text-green-800">Next Game</div>
                <div className="text-sm text-green-600">{group.nextGame}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Calendar View Component
const CalendarView = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Your Games</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 mb-4">
          Schedule Game
        </button>
      </div>

      <div className="space-y-4">
        {mockDB.matches.map(match => (
          <div key={match.id} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-green-800">
                  {match.player1} vs {match.player2}
                </h3>
                <p className="text-gray-600">{match.facility}</p>
              </div>
              <div className="text-right">
                <div className="font-medium">{match.date}</div>
                <div className="text-gray-600">{match.time}</div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {match.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Messages View Component
const MessagesView = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageText, setMessageText] = useState('');

  const chats = [
    {
      id: '1',
      name: 'Sarah Chen',
      lastMessage: 'Great game today! Same time next week?',
      time: '2:30 PM',
      unread: 2,
      online: true
    },
    {
      id: '2',
      name: 'Bentonville Beginners',
      lastMessage: 'Welcome new members! First practice is...',
      time: '1:15 PM',
      unread: 0,
      isGroup: true
    },
    {
      id: '3',
      name: 'Mike Rodriguez',
      lastMessage: 'Ready for our match tomorrow?',
      time: '11:45 AM',
      unread: 1,
      online: false
    }
  ];

  const messages = selectedChat ? [
    {
      id: '1',
      sender: 'Sarah Chen',
      text: 'Hey! Want to play doubles this weekend?',
      time: '2:25 PM',
      isMe: false
    },
    {
      id: '2',
      sender: 'Me',
      text: 'Absolutely! What time works for you?',
      time: '2:27 PM',
      isMe: true
    },
    {
      id: '3',
      sender: 'Sarah Chen',
      text: 'Great game today! Same time next week?',
      time: '2:30 PM',
      isMe: false
    }
  ] : [];

  const sendMessage = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto h-screen flex">
      {/* Chat List */}
      <div className="w-1/3 border-r bg-white">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold">Messages</h2>
        </div>
        <div className="overflow-y-auto">
          {chats.map(chat => (
            <div 
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                selectedChat?.id === chat.id ? 'bg-green-50 border-green-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                    {chat.isGroup ? <Users className="h-6 w-6" /> : <User className="h-6 w-6" />}
                  </div>
                  {chat.online && !chat.isGroup && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium truncate">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b bg-white flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center">
                {selectedChat.isGroup ? <Users className="h-5 w-5" /> : <User className="h-5 w-5" />}
              </div>
              <div>
                <h3 className="font-medium">{selectedChat.name}</h3>
                {!selectedChat.isGroup && (
                  <p className="text-sm text-gray-500">
                    {selectedChat.online ? 'Online' : 'Last seen 1h ago'}
                  </p>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map(message => (
                <div key={message.id} className={`flex ${message.isMe ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isMe 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isMe ? 'text-green-100' : 'text-gray-500'}`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                >
                  Send
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>Select a conversation to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Profile View Component
const ProfileView = () => {
  const { currentUser, signOut } = useAuth();
  const [showSkillQuiz, setShowSkillQuiz] = useState(false);

  const skillLevels = [
    "I'm new, where's the kitchen?",
    "I think I've got the hang of this",
    "Bring it on!",
    "I'm just here for the prize money"
  ];

  if (!currentUser) {
    return (
      <div className="max-w-2xl mx-auto p-4 text-center">
        <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Profile</h2>
        <p className="text-gray-600 mb-6">Sign up to create your player profile and connect with others</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
          Sign Up Now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-12 h-12 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{currentUser.name}</h2>
          <p className="text-gray-600">{currentUser.email}</p>
          {currentUser.skillLevel && (
            <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
              {currentUser.skillLevel}
            </span>
          )}
        </div>

        <div className="flex justify-center space-x-3">
          <button 
            onClick={() => setEditMode(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            <Edit className="h-4 w-4" />
            <span>Edit Profile</span>
          </button>
          <button 
            onClick={() => setShowSkillQuiz(true)}
            className="flex items-center space-x-2 px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50"
          >
            <Trophy className="h-4 w-4" />
            <span>Update Skill</span>
          </button>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4">Your Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-600">Games Played</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">0</div>
            <div className="text-sm text-gray-600">Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-sm text-gray-600">Courts Visited</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">0</div>
            <div className="text-sm text-gray-600">Groups Joined</div>
          </div>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="space-y-3">
        <div className="bg-white rounded-xl shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-600 mr-3" />
              <div>
                <div className="font-medium text-gray-800">Profile Verification</div>
                <div className="text-sm text-gray-600">ID verified for safety</div>
              </div>
            </div>
            <span className="text-sm text-green-600 font-medium">✓ Verified</span>
          </div>
        </div>

        <button className="w-full bg-white rounded-xl p-4 shadow-sm text-left hover:bg-gray-50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Settings className="w-5 h-5 text-gray-600 mr-3" />
              <div>
                <div className="font-medium text-gray-800">Privacy Settings</div>
                <div className="text-sm text-gray-600">Manage your visibility</div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        </button>

        <button className="w-full bg-white rounded-xl p-4 shadow-sm text-left hover:bg-gray-50 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="w-5 h-5 text-gray-600 mr-3" />
              <div>
                <div className="font-medium text-gray-800">Notifications</div>
                <div className="text-sm text-gray-600">Game reminders and messages</div>
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </div>
        </button>
      </div>

      {/* Sign Out */}
      <div className="mt-8">
        <button
          onClick={signOut}
          className="w-full flex items-center justify-center py-3 text-red-600 font-medium hover:bg-red-50 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sign Out
        </button>
      </div>

      {/* Skill Quiz Modal */}
      {showSkillQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏓</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Update Your Skill Level</h2>
              <p className="text-gray-600">Choose your current skill level</p>
            </div>

            <div className="space-y-3">
              {skillLevels.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Update skill level logic here
                    setShowSkillQuiz(false);
                  }}
                  className="w-full p-4 text-left border-2 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all"
                >
                  <div className="font-medium text-gray-800">{skill}</div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowSkillQuiz(false)}
              className="w-full mt-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Admin View Component
const AdminView = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddFacility, setShowAddFacility] = useState(false);
  const [facilityForm, setFacilityForm] = useState({
    name: '',
    address: '',
    description: '',
    phone: '',
    email: '',
    courts: '',
    amenities: []
  });

  const adminTabs = [
    { id: 'overview', label: 'Overview', icon: Trophy },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'facilities', label: 'Facilities', icon: MapPin },
    { id: 'analytics', label: 'Analytics', icon: Calendar }
  ];

  const addFacility = () => {
    const newFacility = {
      id: Date.now().toString(),
      ...facilityForm,
      courts: parseInt(facilityForm.courts),
      rating: 0,
      verified: true,
      type: 'outdoor'
    };
    mockDB.facilities.push(newFacility);
    setShowAddFacility(false);
    setFacilityForm({
      name: '',
      address: '',
      description: '',
      phone: '',
      email: '',
      courts: '',
      amenities: []
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-4">
          <Crown className="h-8 w-8 text-yellow-500" />
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>

        {/* Admin Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow">
          {adminTabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-green-600 text-white' 
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-green-600">{mockDB.users.length}</div>
              <div className="text-gray-600">Total Users</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">{mockDB.facilities.length}</div>
              <div className="text-gray-600">Facilities</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{mockDB.groups.length}</div>
              <div className="text-gray-600">Active Groups</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-orange-600">{mockDB.matches.length}</div>
              <div className="text-gray-600">Games Today</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <User className="h-5 w-5 text-blue-500" />
                <span className="text-sm">New user registered: Sarah Chen</span>
                <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-sm">Facility added: Osage Park</span>
                <span className="text-xs text-gray-500 ml-auto">4 hours ago</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="h-5 w-5 text-purple-500" />
                <span className="text-sm">Game scheduled at Rogers Wellness Center</span>
                <span className="text-xs text-gray-500 ml-auto">6 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">User Management</h2>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Add User
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {mockDB.users.map(user => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mr-3">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.role === 'admin' ? 'bg-red-100 text-red-800' :
                        user.role === 'facility_manager' ? 'bg-blue-100 text-blue-800' :
                        user.role === 'coach' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Facilities Tab */}
      {activeTab === 'facilities' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Facility Management</h2>
            <button 
              onClick={() => setShowAddFacility(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Add Facility
            </button>
          </div>

          <div className="grid gap-4">
            {mockDB.facilities.map(facility => (
              <div key={facility.id} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-800 mb-1">{facility.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{facility.address}</p>
                    <p className="text-gray-700 text-sm mb-3">{facility.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{facility.courts} courts</span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        {facility.rating}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        facility.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {facility.verified ? 'Verified' : 'Pending'}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded hover:bg-blue-200">
                      Edit
                    </button>
                    <button className="px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Analytics Tab */}
      {activeTab === 'analytics' && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Platform Analytics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">User Growth</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Chart Placeholder - User Growth Over Time
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Facility Usage</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Chart Placeholder - Most Popular Facilities
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Game Statistics</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Chart Placeholder - Games Played Per Day
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue Metrics</h3>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                Chart Placeholder - Booking Revenue
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Facility Modal */}
      {showAddFacility && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full max-h-96 overflow-y-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Facility</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Facility Name</label>
                <input
                  type="text"
                  value={facilityForm.name}
                  onChange={(e) => setFacilityForm({...facilityForm, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Enter facility name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={facilityForm.address}
                  onChange={(e) => setFacilityForm({...facilityForm, address: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Full address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={facilityForm.description}
                  onChange={(e) => setFacilityForm({...facilityForm, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Brief description of the facility"
                  rows="3"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={facilityForm.phone}
                    onChange={(e) => setFacilityForm({...facilityForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="(479) 555-0123"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={facilityForm.email}
                    onChange={(e) => setFacilityForm({...facilityForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="contact@facility.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Number of Courts</label>
                <input
                  type="number"
                  value={facilityForm.courts}
                  onChange={(e) => setFacilityForm({...facilityForm, courts: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="4"
                  min="1"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={addFacility}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700"
              >
                Add Facility
              </button>
              <button
                onClick={() => setShowAddFacility(false)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Auth Modal Component
const AuthModal = ({ mode, setMode, onClose }) => {
  const { signIn, signUp, setIsGuest } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    skillLevel: ''
  });
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const skillLevels = [
    "I'm new, where's the kitchen?",
    "I think I've got the hang of this",
    "Bring it on!",
    "I'm just here for the prize money"
  ];

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    
    try {
      const result = await signIn(formData.email, formData.password);
      if (!result.success) {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    setLoading(true);
    setError('');
    
    try {
      const result = await signUp(formData);
      if (!result.success) {
        setError(result.error || 'Signup failed');
      }
    } catch (err) {
      setError('An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  const handleBrowseAsGuest = () => {
    setIsGuest(true);
    onClose();
  };

  if (mode === 'browse') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 z-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">👋</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome to PickleMatch!</h2>
            <p className="text-gray-600">Explore courts and players, or sign up for full access</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleBrowseAsGuest}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
            >
              Continue as Guest
            </button>
            <button
              onClick={() => setMode('signup')}
              className="w-full border-2 border-green-600 text-green-600 py-3 rounded-lg font-medium hover:bg-green-50"
            >
              Sign Up for Full Access
            </button>
            <button
              onClick={() => setMode('login')}
              className="w-full text-gray-600 py-2 hover:text-gray-800"
            >
              Already have an account? Sign In
            </button>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'login') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 z-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p className="text-gray-600">Sign in to your PickleMatch account</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Your password"
              />
            </div>

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => setMode('signup')}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Don't have an account? Sign Up
            </button>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      </div>
    );
  }

  if (mode === 'signup') {
    if (step === 1) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🏓</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Join PickleMatch</h2>
              <p className="text-gray-600">Create your account to start playing</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Choose a secure password"
                />
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!formData.name || !formData.email || !formData.password}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
              >
                Continue
              </button>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => setMode('login')}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Already have an account? Sign In
              </button>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      );
    }

    if (step === 2) {
      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-6 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">What's Your Skill Level?</h2>
              <p className="text-gray-600">Help us match you with the right players</p>
            </div>

            <div className="space-y-3">
              {skillLevels.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => setFormData({...formData, skillLevel: skill})}
                  className={`w-full p-4 text-left border-2 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all ${
                    formData.skillLevel === skill ? 'border-green-500 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <div className="font-medium text-gray-800">{skill}</div>
                </button>
              ))}
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setStep(1)}
                className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleSignup}
                disabled={loading || !formData.skillLevel}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      );
    }
  }

  return null;
};

export default PickleMatch;
