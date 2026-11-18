import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "NEXT LEVEL ACADEMY | Learn. Practice. Grow.",
  description: "Free computer education, typing practice, coding labs and quizzes for every learner.",
  keywords: ["computer course","typing practice","HTML CSS","Python","computer education"]
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}