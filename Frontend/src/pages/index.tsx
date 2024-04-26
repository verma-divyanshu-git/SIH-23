import Image from "next/image";
import { Inter } from "next/font/google";
import Homepage from "../components/mainpage";
const inter = Inter({ subsets: ["latin"] });
import { AuthContextProvider } from "../../context/context";

export default function Home() {
  
  return (
    <>
      <AuthContextProvider>
        <Homepage />
      </AuthContextProvider>
    </>
  );
}
