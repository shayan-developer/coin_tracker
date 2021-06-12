import Link from 'next/link'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import { useRouter } from 'next/router';
import React, { useEffect, useState} from 'react'
import { MenuOutlined } from '@ant-design/icons';
import styles from "./nav.module.css"
import { ConfigProvider, Drawer, Radio } from 'antd';
export default function Nav() {
    const router = useRouter()
    const [visible, setVisible] = useState(false);
    const [width, setWidth] = useState(0);
    const { locale } = router;
    const{asPath}=router;
    const dir = locale === "en" ? "ltr" : "rtl"
    const t = locale === "en" ? en : fa;
    const changeLang = (e) => {
        router.push(asPath, asPath, { locale: e.target.value })
    }
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    const widthChek=()=>{
        if (width<576) {
            return 153
        } else {
            return 250
        }
    }
    useEffect(() => {
       setWidth(window.screen.width)
    }, [width])
    return (
        <nav className={styles.nav}>
            <Radio.Group
                defaultValue={locale}
                buttonStyle="solid"
                onChange={changeLang}
                size='small'
                style={{display:'flex',alignItems:"center"}}
            >
                <Radio.Button value="en">English</Radio.Button>
                <Radio.Button value="fa">فارسی</Radio.Button>
            </Radio.Group>
            <span onClick={showDrawer} className={styles.icon}>
                <MenuOutlined />
            </span>
            <ConfigProvider direction={dir}>
                <Drawer
                    title={<p className={styles.title}>{t.drawerTitle}</p>}
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    width={widthChek()}
                >
                    <div className={styles.menu}>
                        <div className={styles.menuItem}>
                            <Link href="/"><a className={styles.link}> {t.home} </a></Link>
                        </div>
                        <div className={styles.menuItem}>
                            <Link href="/about"><a className={styles.link}> {t.about} </a></Link>
                        </div>
                    </div>
                </Drawer>
            </ConfigProvider>
        </nav>
    )
}
