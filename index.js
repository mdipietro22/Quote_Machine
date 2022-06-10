function App() {
    
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState("");
    const [color, setColor] = React.useState("#fff");
    
    React.useEffect(() => {
        async function fetchData(){
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();

            setQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randIndex])
        }
        fetchData();
    }, [])

    const getNewQuote = () => {

            const color = [
            'rgb(22%, 75%, 78%)',
            'rgb(16%, 96%, 34%)',
            'rgb(64%, 14%, 95%)',
            'rgb(83%, 38%, 90%)',
            'rgb(41%, 18%, 69%)',
            'rgb(59%, 46%, 1%)',
            'rgb(92%, 87%, 25%)',
            'rgb(25%, 92%, 59%)',
            'rgb(36%, 78%, 84%)',
            'rgb(11%, 77%, 12%)',
            'rgb(65%, 44%, 4%)',
            'rgb(9%, 51%, 74%)',
          ];

        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * color.length);
            setRandomQuote(data[randIndex])
            setColor(color[randColorIndex])
    }
    
    return (
        <div style={{backgroundColor: color, minHeight: "100vh"}}>
<div className="container pt-5">
    <div className="jumbotron">
        <div className="card">
            <div className="card-header">Inspirational Quotes</div>
                <div className="card-body">
                    {randomQuote ? (
                        <>
                        <h5 className="card-title"> {randomQuote.author || "No author"}</h5>
                        <p className="card-text">&quot;{randomQuote.text}&quot;</p>
                        </>
                    ) : (
                        <h2>Loading</h2>
                    )}
                    <div className="row">
                        <button onClick={getNewQuote} className="btn btn-primary">New Quote</button>
                     </div>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"))