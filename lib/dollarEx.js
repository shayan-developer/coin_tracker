export const dollarEx = (num, price) => {
    const ex = parseInt(num) * parseInt(price);
    const res = `${ex.toLocaleString()} $`;
    return res
}