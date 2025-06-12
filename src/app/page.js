import HeaderSection from "@/components/page/HomePage/BannerSection";
import ProjectSection from "@/components/page/HomePage/ProjectSection";
import WorkSection from "@/components/page/HomePage/WorkSection";
import ContentWrapper from "@/components/shared-components/ContentWrapper";

export default function Home() {
  return (
    <ContentWrapper>
      <HeaderSection />
      <ProjectSection />
      <WorkSection />
    </ContentWrapper>
  );
}
