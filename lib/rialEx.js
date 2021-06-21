export const rialEx = (num, priceCoin,priceDollar) => {
    const toRial = parseFloat(priceCoin) * parseFloat(priceDollar);
    const ex=Math.round(toRial *parseFloat(num))
    const res = `${ex.toLocaleString()} ریال`;
    return res
}