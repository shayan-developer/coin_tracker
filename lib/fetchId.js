import { fetcher } from "./fetcher"

export const fetchId = async (url) => {
    const res = await fetcher(url);
    const data = []
 await res.map((coin) => {
        let fa = { params: { id: coin.id }, locale: "fa" }
        data.push(fa)
        let en = { params: { id: coin.id }, locale: "en" }
        data.push(en)
    })
    return data
}