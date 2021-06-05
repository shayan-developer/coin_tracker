import {url  } from "./url";
export const fetcher = async () => {
    const res = await fetch(url);
    const data = await res.json();
    return data
}

