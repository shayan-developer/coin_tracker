import Link from 'next/link'
import en from "../../public/locales/en/en"
import fa from "../../public/locales/fa/fa"
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons';
import styles from "./nav.module.css"
import { Button, Drawer, Menu, Radio } from 'antd';
export default function Nav() {
    const router = useRouter()
    const [visible, setVisible] = useState(false);
    const { locale } = router;
    const t = locale === "en" ? en : fa;
    const changeLang = (e) => {
        console.log(e);
        router.push("/", "/", { locale: e.target.value })
    }
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <nav className={styles.nav}>
            <Radio.Group defaultValue="fa" buttonStyle="solid" onChange={changeLang}>
                <Radio.Button value="en">English</Radio.Button>
                <Radio.Button value="fa">فارسی</Radio.Button>
            </Radio.Group>
            <span onClick={showDrawer} className={styles.icon}>
                <MenuOutlined />
            </span>
            <Drawer
                title={<p className={styles.title}>{t.drawerTitle}</p>}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
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
        </nav>
    )
}
