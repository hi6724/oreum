import { registerMember } from "@/api";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "qs";
import { useEffect } from "react";

export default function KakaoLogin() {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get("code");

  useEffect(() => {
    (async () => {
      const kakaoAccessToken = await getKakaoToken(code as string);
      const kakaoUserProfile = await getKakaoUserProfile(kakaoAccessToken);

      if (kakaoUserProfile) {
        registerMember(kakaoUserProfile.id, kakaoUserProfile.properties.nickname).then((res) => {
          if (res.data.data === "Success") {
            localStorage.setItem("uuid", kakaoUserProfile.id);
            router.push("/home");
          }
        });
      }
    })();
  }, [code]);

  return <></>;
}

const getKakaoToken = async (code: string) => {
  try {
    // qs.stringify를 사용해서 파라미터들을 쿼리 스트링 형식으로 만든다.
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: "945771c9ce8ae82ab35fc53530f11ccf",
      redirect_uri: process.env.KAKAO_REDIRECT,
      code: code,
    });

    const kakaoAccessToken = await axios.post(`https://kauth.kakao.com/oauth/token`, payload);

    return kakaoAccessToken.data.access_token;
  } catch (error) {
    console.log(`Get Kakao user Error`);
    console.log(error);
  }
};

/*
  카카오 사용자 정보 가져오기
  https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info
  사용자 정보 중 id 값으로 firebase custom token 생성할거임
*/
const getKakaoUserProfile = async (kakaoAccessToken: string) => {
  try {
    const kakaoUserProfile = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
      headers: {
        Authorization: `Bearer ${kakaoAccessToken}`,
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    return kakaoUserProfile.data;
  } catch (error) {
    console.log(error);
  }
};
