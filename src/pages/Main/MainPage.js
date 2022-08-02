import {Button} from "../../components/Button/Button";
import Article from "../../components/Atricle/Article";
import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";

import {articles, reccomendArticle} from '../../moc.js'

import './MainPage.sass'

export default function MainPage() {
    return <>
        <Header />

        <section className="recommended-block">
            <div className="container">
                <Article data={reccomendArticle}/>
            </div>
        </section>

        <section className="popular-block">
            <div className="container">
                <h2 className="popular-block__title">Popular articles</h2>
                <div className='popular-block__articles'>
                    {articles.map((element, index) => <Article key={index} data={element} type="compact"/>)}
                </div>

                <div className="popular-block__navigate">
                    <Button type="disabled">Prev</Button>
                    <Button type="outline">Next</Button>
                </div>
            </div>
        </section>

        <Footer />
    </>
}