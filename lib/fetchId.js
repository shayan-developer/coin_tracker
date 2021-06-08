import { fetcher } from "./fetcher"

export const fetchId=async(url)=>{
const res =await fetcher(url);
return res.map((coin)=>{
    return{
        params:{id:coin.id}
    }
})
}