import "@/styles/global.css";
import { StatusBar } from 'expo-status-bar';
import { Profile } from '@/app/Profile';
import { ToastProvider } from "@/components/Toast"

export default function App() {
  return (
    <ToastProvider  position="top">
      <Profile />
      <StatusBar style="light" />
    </ToastProvider>
  );
}
