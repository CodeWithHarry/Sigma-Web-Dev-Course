import { Inter } from "next/font/google"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin: Facebook - Connect with friends and the world around you",
  description: "Admin Page: Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.",
};

export default function AdminLayout({ children }) {
  return (
     <>
     <span>Admin Navbar</span>
        {children} 
     </>
  );
}
