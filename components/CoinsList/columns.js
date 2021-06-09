import {Avatar,Typography} from "antd";
export const columns = [
    {
        title: '',
        dataIndex: 'icon',
        key: 'icon',
        render: ic => <Avatar src={ic} size={{
            xs:20,
            sm:25,
            md:35,
            lg:40,
            xl:45,
            xxl:50
        }} />,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render:item=>{
          return <span>
               {item.name} 
            </span>
        }
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '24h',
        dataIndex: 'price_change',
        key: 'price_change',
        render: num => {
                if(num<0){
                   return <span style={{color:"red"}}>
                    {num.toFixed(2)}%
                </span>
                }
                else{
                    return <span style={{color:"green"}}>
                    {num.toFixed(2)}%
                </span>
                }
        }
    },
    {
        title: 'Volume',
        dataIndex: 'volume',
        key: 'volume',
    },
];