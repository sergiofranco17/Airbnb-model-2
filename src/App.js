import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Card from "./Card";
import data from "./data";


export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Main/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}