import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function KakaoLogin() {
  const params = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    (async () => {
      const data = await axios.post(`/api/oauth`, {
        code,
      });

      console.log(data.data);
    })();
  }, [code]);

  return <></>;
}
