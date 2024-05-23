import { Suspense } from "react";
import BirthdateRecommendResult from "@/components/BirthdateRecommendResult";

export default function Page() {
  return (
    <Suspense fallback={<>loading...</>}>
      <BirthdateRecommendResult />
    </Suspense>
  );
}
