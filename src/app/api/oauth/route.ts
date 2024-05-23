import qs from "qs";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const code = body.code;

  const kakaoAccessToken = await getKakaoToken(code as string);
  const kakaoUserProfile = await getKakaoUserProfile(kakaoAccessToken);

  return NextResponse.json({ name: kakaoUserProfile.properties.nickname, uuid: kakaoUserProfile.id }, { status: 200 });
}

const getKakaoToken = async (code: string) => {
  try {
    // qs.stringify를 사용해서 파라미터들을 쿼리 스트링 형식으로 만든다.
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: "4e1c361cdfa5bb3f44be12bc61a3fb1a",
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
    console.log(kakaoUserProfile);

    return kakaoUserProfile.data;
  } catch (error) {
    console.log(error);
  }
};
