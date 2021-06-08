import { fetcher } from "./fetcher";

export const getPost = async (id) => {
    const url_post = `https://api.coingecko.com/api/v3/coins/${id}`;
    const res = await fetcher(url_post);
    return res
}