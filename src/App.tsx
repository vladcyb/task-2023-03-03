import { Graph } from "./components/Graph"

export const App = () => {
  return (
    <div className="app">
      <Graph
        innerValue={234840}
        innerMaxValue={246051}
        outerValue={272289}
        outerMaxValue={283500}
        innerName="НИТ"
        outerName="Прогноз"
      />
    </div>
  )
}
