import { useQuery } from '@tanstack/react-query'
import './App.css'
import axios from 'axios'

function App() {

  const { data, fetchStatus, dataUpdatedAt } = useQuery({
    queryKey: ['Posts'],
    queryFn: async () => await axios.get("http://localhost:8000/ads/advertises/")
      .then((res) => { return res.data })
  })
  console.log(data);

  return (
    <>
      <h1>Hello Vite + React!</h1>
    </>
  )
}

export default App
