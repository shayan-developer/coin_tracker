export const sortedData =  (list) => {
    const data = [];
    list.map((item,i) => {
         data.push({
            name: {name:item.name,id:item.id},
            icon:item.image,
            price:` ${item.current_price.toLocaleString()}`,
            price_change:item.price_change_percentage_24h,
            volume:`${item.market_cap.toLocaleString()}`,
            key:i+1
        })
    })
    return data
}
