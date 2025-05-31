# PickleMatch 🏓

A comprehensive pickleball matchmaking and facility management platform connecting players, coaches, and facilities.

## Features

### 🎯 **Core Functionality**
- **Guest Browsing** - Explore facilities and players without signup
- **Multi-step Registration** - Easy onboarding with skill assessment
- **Player Matchmaking** - Find partners based on skill level and location
- **Facility Discovery** - Search and book courts with real-time availability
- **Group Management** - Create and join pickleball communities
- **Real-time Messaging** - Connect with players and coordinate games

### 👑 **Admin Dashboard**
- **User Management** - Role-based access control (Player, Coach, Facility Manager, Admin)
- **Facility Administration** - Add, edit, and verify pickleball facilities
- **Analytics** - Platform usage statistics and insights
- **Content Moderation** - Safety and community management tools

### 📱 **Mobile-First Design**
- **Responsive Interface** - Optimized for mobile and desktop
- **Touch-Friendly** - Easy navigation and interaction
- **Offline Support** - Core features work without internet

## Tech Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel/Netlify

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/picklematch.git
   cd picklematch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
picklematch/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js          # Main application component
│   ├── index.js        # Entry point
│   └── components/     # Reusable components
├── package.json
├── README.md
└── .gitignore
```

## Deployment

### Local Build
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to Netlify
```bash
# Build the project
npm run build

# Drag and drop the build folder to Netlify
```

## Environment Variables

Create a `.env.local` file for local development:

```env
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_key
REACT_APP_STRIPE_PUBLISHABLE_KEY=your_stripe_key
```

## Database Setup (Future)

This version uses mock data. For production, integrate with:

- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Payments**: Stripe
- **Maps**: Google Maps API

## Demo Features

### Test Accounts
- **Admin**: admin@picklematch.com / password
- **Player**: Any email / any password (mock auth)

### Sample Data
- 3 Arkansas pickleball facilities
- Multiple player profiles with skill levels
- Groups and messaging examples
- Game scheduling demos

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

- [ ] **Phase 1**: Supabase backend integration
- [ ] **Phase 2**: Real-time features (WebSockets)
- [ ] **Phase 3**: Payment processing (Stripe)
- [ ] **Phase 4**: Mobile app (React Native)
- [ ] **Phase 5**: Advanced analytics and reporting

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For support, email support@picklematch.com or join our community Discord.

---

**Built with ❤️ for the pickleball community**