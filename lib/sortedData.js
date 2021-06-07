import {fetcher} from './fetcher'
export const sortedData = async () => {
    const res = await fetcher();
    const data = [];
    res.map((item,i) => {
         data.push({
            name: item.name,
            icon:item.image,
            price:`$ ${item.current_price}`,
            price_change:item.price_change_percentage_24h,
            volume:`$ ${item.total_volume.toLocaleString()}`,
            key:i+1
        })
    })
    return data
}