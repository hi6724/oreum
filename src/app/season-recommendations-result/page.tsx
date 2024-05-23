import { Suspense } from "react";
import SeasonRecommendResult from "@/components/SeasonRecommendResult";

export default function Page() {
  return (
    <Suspense fallback={<>loading...</>}>
      <SeasonRecommendResult />
    </Suspense>
  );
}
