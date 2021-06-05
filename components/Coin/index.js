import { Divider, Image } from 'antd'
import React from 'react'
import styles from './coin.module.css'
export const Coin = ({
    name,
    id,
    current_price,
    symbol,
    market_cap,
    image,
    price_change_percentage_24h
}) => {
    return (
        <>
            <div className={styles.contain}>
                <div className={styles.row}>
                    <div className={styles.coin}>
                        <Image src={image} alt={name} className={styles.img} size={22} />
                        <p className={styles.name}>{name}</p>
                        <p className={styles.symbol}>{symbol}</p>
                    </div>
                    <div className={styles.data}>
                        <p className={styles.price}> $ {current_price}</p>
                        <p className={styles.volume}> $ volune</p>
                        {price_change_percentage_24h < 0 ? (
                            <p className={styles.percent, styles.red}>
                                {price_change_percentage_24h.toFixed(2)}
                            </p>
                        ) : (
                            <p className={styles.percent, styles.green}>
                                {price_change_percentage_24h.toFixed(2)}
                            </p>
                        )}
                        <p className={styles.market}> $ {market_cap.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    )
}
