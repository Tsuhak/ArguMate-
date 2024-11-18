import ArgumentForm from "./components/ArgumentForm"
import ArgumentItem from "./components/ArgumentItem"
import ArgumentList from "./components/ArgumentList"
import Header from "./components/Header"

export default function App() {
  return (
    <div className=" bg-zinc-900 min-h-screen">
      <Header />
      <ArgumentList />
      <ArgumentForm />
      <ArgumentItem />
    </div>
  )
}
