import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import Card from "./components/Card";
import data from "./components/data";


export default function App() {
  const dataItems = data.map(data => {
    return <Card
      key={data.id}
      data={data}
    />

  })

  return (
    <>
      <div className="main-container">
        <Navbar />
        <Middle />
        <section className="card--list">
          {dataItems}
        </section>
      </div>
    </>
  )
}
