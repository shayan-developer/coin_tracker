import {Avatar,Typography} from "antd";
const { Text, Link } = Typography;
export const columns = [
    {
        title: '',
        dataIndex: 'icon',
        key: 'icon',
        render: ic => <Avatar src={ic} size={20} />,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Change 24h',
        dataIndex: 'price_change',
        key: 'price_change',
        render: num => {
                if(num<0){
                   return <Text type="danger">
                    {num.toFixed(2)}
                </Text>
                }
                else{
                    return <Text type="success">
                    {num.toFixed(2)}
                </Text>
                }
        }
    },
    {
        title: 'Volume',
        dataIndex: 'volume',
        key: 'volume',
    },
];