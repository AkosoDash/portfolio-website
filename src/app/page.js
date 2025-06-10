import HeaderSection from "@/components/page/HomePage/BannerSection";
import ProjectSection from "@/components/page/HomePage/ProjectSection";
import ContentWrapper from "@/components/shared-components/ContentWrapper";

export default function Home() {
  return (
    <ContentWrapper>
      <HeaderSection />
      <ProjectSection />
    </ContentWrapper>
  );
}
