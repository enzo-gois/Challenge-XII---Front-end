import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FormDrive from "@/components/FormDrive";

export default function Home() {
  return (
    <main>
      <Header />
      <BookingSection />
      <FormDrive />
      <Footer />
    </main>
  );
}
