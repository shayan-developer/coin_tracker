export const rialEx = (num, priceCoin,priceDollar) => {
    const toRial = parseInt(priceCoin) * parseInt(priceDollar);
    const ex=toRial *parseInt(num)
    const res = `${ex.toLocaleString()} ریال`;
    return res
}