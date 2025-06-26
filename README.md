# React Native Authentication App

A complete React Native authentication application built with TypeScript, featuring login, signup, and home screens using React Context API for state management.

## Features

### Core Authentication Features
- **User Login**: Email and password authentication with validation
- **User Signup**: New user registration with form validation
- **User Logout**: Secure logout functionality with confirmation
- **Persistent Authentication**: Users remain logged in after app restart using AsyncStorage

### UI/UX Features
- **Modern Design**: Clean, intuitive interface with consistent styling
- **Form Validation**: Real-time validation with error messages
- **Password Visibility Toggle**: Eye icon to show/hide password
- **Loading States**: Visual feedback during authentication operations
- **Responsive Layout**: Works on different screen sizes
- **Keyboard Handling**: Proper keyboard avoidance and scrolling

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **React Context API**: Global state management for authentication
- **React Navigation**: Seamless navigation between screens
- **AsyncStorage**: Persistent authentication state
- **Custom Components**: Reusable input and button components


### Login Screen
- Email and password input fields
- Form validation with error messages
- Demo credentials display
- Navigation to signup screen

### Signup Screen
- Name, email, and password fields
- Comprehensive form validation
- Password strength requirements
- Navigation back to login

### Home Screen
- User information display (name, email, ID)
- Logout functionality with confirmation
- Clean card-based layout

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (>= 18)
- React Native CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Start the Metro bundler**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run the app**

   **For iOS:**
   ```bash
   npm run ios
   # or
   yarn ios
   ```

   **For Android:**
   ```bash
   npm run android
   # or
   yarn android
   ```

##  Demo Credentials

The app includes pre-configured demo users for testing:

### User 1
- **Email**: imran@example.com
- **Password**: password123

### User 2
- **Email**: zainab@example.com
- **Password**: password456

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CustomInput.tsx  # Input component with validation
│   └── CustomButton.tsx # Button component with variants
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication state management
├── navigation/         # Navigation setup
│   └── AppNavigator.tsx # Main navigation configuration
├── screens/           # App screens
│   ├── LoginScreen.tsx # Login screen
│   ├── SignupScreen.tsx # Signup screen
│   └── HomeScreen.tsx  # Home screen
└── types/             # TypeScript type definitions
    └── index.ts       # Shared types and interfaces
```

## 🔧 Key Components

### AuthContext
- Manages global authentication state
- Provides login, signup, and logout functions
- Handles AsyncStorage persistence
- Includes loading states

### CustomInput
- Reusable input component
- Built-in validation display
- Password visibility toggle
- Error state handling

### CustomButton
- Multiple variants (primary/secondary)
- Loading state support
- Disabled state handling
- Consistent styling

## Implementation Details

### Authentication Flow
1. **App Launch**: Checks AsyncStorage for existing user session
2. **Login**: Validates credentials against mock database
3. **Signup**: Creates new user account with validation
4. **Logout**: Clears user data and redirects to login

### State Management
- Uses React Context API for global state
- AsyncStorage for persistence
- Loading states for better UX
- Error handling throughout

### Navigation
- Stack navigation for screen transitions
- Conditional rendering based on auth state
- No headers for cleaner UI
- Proper back navigation handling

## Bonus Features Implemented

- **Password Visibility Toggle**: Eye icon to show/hide password
- **Form Validation**: Comprehensive client-side validation
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Persistent Authentication**: Users stay logged in
- **Modern UI**: Clean, professional design



## Available Scripts

- `npm start` - Start Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm test` - Run tests
- `npm run lint` - Run ESLint



## License

This project is licensed under the MIT License.

## Author 
M Imran Shad

Created as a React Native authentication demo showcasing:
- React Context API for state management
- TypeScript implementation
- Modern UI/UX practices
- Complete authentication flow
