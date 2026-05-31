import { PageWrapper } from "@/components/layout/PageWrapper";


export default function MainLayout({ children }: {children: React.ReactNode}) {
  return (
    <PageWrapper>{children}</PageWrapper>
  );
}
