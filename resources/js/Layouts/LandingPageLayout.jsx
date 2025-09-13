import Header from "@/Components/Landing/Header";

export default function LandingPageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

   
    </div>
  );
}
