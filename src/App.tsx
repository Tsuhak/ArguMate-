import Header from "./components/Header"
import List from "./components/List"

export default function App() {
  return (
    <div className=" max-w-7xl min-h-screen flex flex-col gap-6 p-6 bg-zinc-900 mx-auto">
      <Header />

      <main className=" flex flex-grow justify-between p-4">
        <List title="Les pours" />
        <List title="Les contres" />
      </main>
    </div>
  )
}
