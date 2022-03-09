import './App.css'
import {useEffect, useState} from "react"

const App = () => {
    const [quotes, setQuotes] = useState([])
    const [quote, setQuote] = useState({text: "n/a", author: "n/a"})

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
            .then((response) => response.json())
            .then((json) => {
                const quotes = json.quotes
                setQuotes(quotes)
                newQuotes(quotes)
            })
    }, [])

    const newQuotes = (quotes) => {
        const random = Math.floor(Math.random() * quotes.length)
        const quote = quotes[random]
        setQuote({
            text: quote.quote,
            author: quote.author
        })
    }

    return (
        <div className="row justify-content-center">
            <div id="quote-box" className="card text-light bg-dark w-50">
                <p id="text" className="text-center">"{quote.text}"</p>
                <p id="author" className="text-end">- {quote.author} -</p>
                <button id="new-quote"
                        className="btn btn-primary"
                        onClick={() => newQuotes(quotes)}>New Quote
                </button>
                <a id="tweet-quote"
                   className="btn btn-secondary"
                   href="https://twitter.com/intent/tweet"
                   target="_blank"
                   rel="noreferrer">Tweet Quote
                </a>
            </div>
        </div>
    )
}

export default App
