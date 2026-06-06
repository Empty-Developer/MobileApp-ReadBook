# Read Book

A mobile book reading application built with React Native and Expo, supporting text reading, audiobooks, personal library management, and user accounts across iOS, Android, and web.

---

## Features

- **Text Reading** — Read books directly within the app with a clean, distraction-free reader interface
- **Audiobook Support** — Listen to audiobooks alongside or instead of text content
- **Personal Library** — Organize and manage your book collection in one place
- **Favorites** — Mark and revisit books you have liked
- **User Accounts** — Full authentication flow including registration, login, and password recovery
- **User Profile** — View and manage your account information
- **Adaptive Theming** — Automatic light and dark mode based on system preference
- **Cross-Platform** — Runs on iOS (including tablet), Android, and web

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React Native 0.81 + Expo ~54 |
| Language | TypeScript ~5.9 |
| UI Runtime | React 19 with React Compiler |
| Routing | Expo Router ~6 (file-based) |
| Animation | React Native Reanimated ~4.1 |
| Gestures | React Native Gesture Handler |
| Forms | React Hook Form |
| Icons | Expo Vector Icons |
| Typography | Geist |
| Architecture | Expo New Architecture enabled |

---

## Project Structure

```
React-Native-App/
├── app/
│   ├── (login)/              # Unauthenticated screens
│   │   ├── hello_screen.tsx  # Welcome / onboarding
│   │   ├── login.tsx         # Sign in
│   │   ├── registration.tsx  # Create account
│   │   ├── recovery_password.tsx       # Request password reset
│   │   └── recovery_password_code.tsx  # Enter reset code
│   ├── (main)/               # Authenticated screens
│   │   ├── index.tsx         # Home / discovery
│   │   ├── library.tsx       # Personal library
│   │   ├── like.tsx          # Liked books
│   │   └── user_profile.tsx  # Account profile
│   ├── _layout.tsx           # Root layout and navigation shell
│   └── index.tsx             # Entry point / redirect
├── auth/                     # Authentication logic
├── components/               # Shared UI components
├── constants/                # App-wide constants
├── hooks/                    # Custom React hooks
├── navigation/               # Navigation configuration
├── providers/                # Context providers
├── style/                    # Global stylesheets
├── types/                    # TypeScript type definitions
├── assets/                   # Images, icons, fonts
├── app.json                  # Expo configuration
└── package.json
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [npm](https://www.npmjs.com/) or any compatible package manager
- [Expo CLI](https://docs.expo.dev/get-started/installation/) — `npm install -g expo-cli`
- For iOS: Xcode 15+ with a simulator or physical device
- For Android: Android Studio with an emulator or physical device

---

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Empty-Developer/MobileApp-ReadBook.git
   cd MobileApp-ReadBook/React-Native-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open the app**

   - Press `i` to open in the iOS Simulator
   - Press `a` to open on an Android emulator
   - Press `w` to open in the browser
   - Scan the QR code with the [Expo Go](https://expo.dev/client) app on a physical device

---

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the Expo development server |
| `npm run ios` | Start and open on iOS simulator |
| `npm run android` | Start and open on Android emulator |
| `npm run web` | Start and open in the browser |
| `npm run lint` | Run ESLint across the project |

---

## Configuration

The app is configured in `app.json`. Key settings:

- **Scheme**: `readbook` — used for deep linking
- **Orientation**: Portrait only
- **Theme**: Automatic (follows system light/dark preference)
- **New Architecture**: Enabled
- **React Compiler**: Enabled (experimental)
- **Typed Routes**: Enabled (experimental)

---

## License

See [LICENSE](React-Native-App/LICENSE) for details.
