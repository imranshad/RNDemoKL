import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContextType, User } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Mock users
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Imran Shah',
    email: 'imran@example.com',
  },
  {
    id: '2',
    name: 'Zainab Shah',
    email: 'zainab@example.com',
  },
];

// Mock passwords
const mockPasswords: { [key: string]: string } = {
  'imran@example.com': 'password123',
  'zainab@example.com': 'password456',
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  const loadUserFromStorage = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    } catch (error) {
      console.error('Error loading user from storage:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveUserToStorage = async (userData: User | null) => {
    try {
      if (userData) {
        await AsyncStorage.setItem('user', JSON.stringify(userData));
      } else {
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error saving user to storage:', error);
    }
  };

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { success: false, error: 'Invalid email format' };
      }

      const existingUser = mockUsers.find(u => u.email === email);
      if (!existingUser) {
        return { success: false, error: 'User not found' };
      }

      if (mockPasswords[email] !== password) {
        return { success: false, error: 'Incorrect password' };
      }

      setUser(existingUser);
      await saveUserToStorage(existingUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Login failed' };
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      if (!name.trim() || !email.trim() || !password.trim()) {
        return { success: false, error: 'All fields are required' };
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return { success: false, error: 'Invalid email format' };
      }

      if (password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters long' };
      }

      const existingUser = mockUsers.find(u => u.email === email);
      if (existingUser) {
        return { success: false, error: 'User with this email already exists' };
      }

      // Create
      const newUser: User = {
        id: Date.now().toString(),
        name: name.trim(),
        email: email.trim(),
      };

      // Add
      mockUsers.push(newUser);
      mockPasswords[email] = password;

      setUser(newUser);
      await saveUserToStorage(newUser);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Signup failed' };
    }
  };

  const logout = () => {
    setUser(null);
    saveUserToStorage(null);
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 