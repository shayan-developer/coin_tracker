import { Input} from 'antd'
import React from 'react'
import styles from "./search.module.css"
export const Search = ({ ...props }) => {
    return (
        <div style={{marginTop:'1rem',width:"70%"}}>
                <Input  {...props} />
        </div>
    )
}
