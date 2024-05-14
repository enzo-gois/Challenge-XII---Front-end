import Header from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FormDrive from "@/components/FormDrive";
import CardList from "./CardList";

export default function Home() {
  return (
    <main>
      <Header />
      <BookingSection />
      <CardList />
      <FormDrive />
      <Footer />
    </main>
  );
}