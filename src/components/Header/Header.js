import {useState} from "react";

import {Button} from "../Button/Button";

import './Header.sass'
import {Nav} from "../Nav/Nav";

export const Header = () => {
    const [isAuth, setIsAuth] = useState(true)


    return <header className="header">
        <div className="container header__container">
            <div className="logo">
                <img className="logo__img" src="/images/logodark.svg" alt="logo"/>
            </div>

            {isAuth ? (<Nav buttonSettings={{type: "primary"}}/>) : (<div className="header__auth-block">
                <Button type="outline">Log in</Button>
                <Button type="primary">Sign in</Button>
            </div>)}
        </div>
    </header>
}