import {useState} from "react";

import {Button} from "../Button/Button";
import {Nav} from "../Nav/Nav";

import './Footer.sass'

export const Footer = () => {
    const [isAuth, setIsAuth] = useState(true)

    return <footer className="footer">
        <div className="container footer__container">
            <div className="footer__head">
                <div className="logo">
                    <img className="logo__img" src="/images/logolight.svg" alt=""/>
                </div>

                {isAuth ? (<Nav buttonSettings={{type: 'outline', theme: 'light'}}/>) : (<div className="footer__auth-block">
                    <Button type="text" theme="light">Log in</Button>
                    <Button type="outline" theme="light">Sign in</Button>
                </div>)}


            </div>
            <div className="footer__bottom">
                <div>© 2022 Justice-it. All rights reserved.</div>
                <div>© 2022 Justice-team. All rights reserved.</div>
            </div>
        </div>
    </footer>
}