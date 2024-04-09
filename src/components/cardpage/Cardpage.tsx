import axios from 'axios'
import { useGet } from '../../hooks/useget'
import { cardInfo } from '../../types/cardinfo'
import Card from '../card/Card'

const Cardpage = () => {
    const {data, isPending} = useGet("http://localhost:8000/ads/advertises/")
    if (isPending) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Cardpage components</h1>
            {data?.map((item: cardInfo) => <Card key={item.id} {...item} />)}
        </>
    )
}

export default Cardpage