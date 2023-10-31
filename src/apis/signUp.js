import axios from "axios";

//회원가입 api
export const signUp = async (id, pw, nickname, gender, age) => {
    const result = await axios.post("http://front.cau-likelion.org/signup", {
        id,
        pw,
        nickname,
        gender,
        age
    });
    return result.data;
};
