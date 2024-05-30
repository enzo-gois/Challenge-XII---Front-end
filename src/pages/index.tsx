import Header from "@/components/Header";
import BookingSection from "./Booking/BookingSection";
import Footer from "@/components/Footer";
import DriveWithSection from "./DriveWith/DriveWithSection";
import CardListSection from "./CardList/CardListSection";

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
