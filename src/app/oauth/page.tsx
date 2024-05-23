"use client";

import KakaoLogin from "@/components/oauth/KakaoLogin";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<></>}>
      <KakaoLogin />
    </Suspense>
  );
}
