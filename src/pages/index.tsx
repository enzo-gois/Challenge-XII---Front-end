import Header from "@/components/Header";
import BookingSection from "@/pages/BookingSection";
import Footer from "@/components/Footer";
import DriveWithSection from "@/pages/DriveWithSection";
import CardListSection from "./CardListSection";

export default function Home() {
  return (
    <main>
      <Header />
      <BookingSection />
      <CardListSection />
      <DriveWithSection />
      <Footer />
    </main>
  );
}
