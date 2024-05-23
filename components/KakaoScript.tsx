"use client";

import Script from "next/script";

declare global {
  interface Window {
    Kakao: any;
  }
}

function KakaoScript() {
  const onLoad = () => {
    window.Kakao.init("dd6108255f82b71abfcaf801d5403a45");
  };

  return <Script src="https://developers.kakao.com/sdk/js/kakao.js" async onLoad={onLoad} />;
}

export default KakaoScript;
