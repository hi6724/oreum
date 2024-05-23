import { registerMember } from "@/api";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function KakaoLogin() {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get("code");

  useEffect(() => {
    (async () => {
      const data = await axios.post(`/oauth/api`, {
        code,
      });

      if (data.data) {
        registerMember(data.data.uuid, data.data.name).then((res) => {
          if (res.data.data === "Success") {
            localStorage.setItem("uuid", data.data.uuid);
            router.push("/home");
          }
        });
      }
    })();
  }, [code]);

  return <></>;
}
