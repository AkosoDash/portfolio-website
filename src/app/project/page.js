import ProjectSection from "@/components/page/ProjectPage/ProjectSection";
import HeaderSection from "@/components/page/ProjectPage/HeaderSection";
import ContentWrapper from "@/components/shared-components/ContentWrapper";
import Footer from "@/components/shared-components/Footer";

export default function ProjectPage() {
  return (
    <ContentWrapper>
      <HeaderSection />
      <ProjectSection />
      <Footer />
    </ContentWrapper>
  );
}
