import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja./fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState('kitty data')
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join('%20')

        const url = `${CAT_PREFIX_IMAGE_URL}${threeFirstWords}?fontColor=red`
        setImageUrl(url)
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p> {fact} </p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted from the first three word for ${fact}`} />}
    </main>
  )
}
