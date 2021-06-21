export const dollarEx = (num, price) => {
    const ex =parseFloat(num) * parseFloat(price);
    const res = `${ex.toLocaleString()} $`;
    return res
}