import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Post Basket!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Mumbai, Post Basket provides you with a one-stop solution for your office's communication</p>
                <address className="public__addr">
                    Post Basket<br />
                    123 Road<br />
                    Mumbai - 400081<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>By Vignesh K</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public