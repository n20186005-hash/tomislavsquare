import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import WeatherSection from '@/components/WeatherSection';
import TransportSection from '@/components/TransportSection';
import AccessibilitySection from '@/components/AccessibilitySection';
import InfoSection from '@/components/InfoSection';
import HistorySection from '@/components/HistorySection';
import StoriesSection from '@/components/StoriesSection';
import FacilitiesSection from '@/components/FacilitiesSection';
import EtiquetteSection from '@/components/EtiquetteSection';
import NearbySection from '@/components/NearbySection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import FAQSection from '@/components/FAQSection';
import SourcesSection from '@/components/SourcesSection';
import MapEmbed from '@/components/MapEmbed';
import Footer from '@/components/Footer';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default as any;
  const faqItems = (messages?.faq?.items || []) as Array<{ question: string; answer: string }>;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <MapEmbed />
        <HoursSection />
        <TicketsSection />
        <WeatherSection />
        <TransportSection />
        <AccessibilitySection />
        <InfoSection />
        <HistorySection />
        <StoriesSection />
        <FacilitiesSection />
        <NearbySection />
        <RouteSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <SourcesSection />
      </main>
      <Footer />
    </>
  );
}
