import axios from "axios";

//전체 VOD 카테고리 가져오기
export const getKid = async () => {
    const result = await axios.get('https://d225nwg9l5o274.cloudfront.net/kids'); 
    return result;
};