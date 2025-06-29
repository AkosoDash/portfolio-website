import ProfileSection from "@/components/page/AboutMePage/ProfileSection";
import ProjectSection from "@/components/page/HomePage/ProjectSection";
import ContentWrapper from "@/components/shared-components/ContentWrapper";
import Footer from "@/components/shared-components/Footer";

export default function AboutMePage() {
  return (
    <ContentWrapper>
      <ProfileSection />
      <ProjectSection />
      <Footer />
    </ContentWrapper>
  );
}
