import { Suspense } from "react";
import BirthdateRecommendResult from "@/components/BirthdateRecommendResult";
import Splash from "@/components/common/LoadingPage";

export default function Page() {
  return (
    <Suspense fallback={<Splash />}>
      <BirthdateRecommendResult />
    </Suspense>
  );
}
