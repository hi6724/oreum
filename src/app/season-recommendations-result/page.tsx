import { Suspense } from "react";
import SeasonRecommendResult from "@/components/SeasonRecommendResult";
import Splash from "@/components/common/LoadingPage";

export default function Page() {
  return (
    <Suspense fallback={<Splash />}>
      <SeasonRecommendResult />
    </Suspense>
  );
}
