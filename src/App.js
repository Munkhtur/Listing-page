import SearchBar from './components/SearchBar'
import Content from './components/Content'
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'


const getData = async () => {
  const res = await axios.get('http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby')
  return res
}

const App = () => {
  const [state, setState] = useState([])
  const [fullData, setfullData] = useState([])
  const [key, setKey] = useState('')

  useEffect(() => {
    getData().then(data => {
      setState([...data.data])
      setfullData([...data.data])
    })
  }, [])


  const onChange = (e) => {
    e.preventDefault()
    let value = document.getElementById('outlined-search').value
    setState(state.filter(client => client.clientName.toLowerCase().includes(value)))
  }

  const onClear = (e) => {
    document.getElementById('outlined-search').value = ''
    setState(fullData)
  }

  return (
    <div>
      <div className={'topBar'}>
        <h4>Management</h4>
        <h1>Clients</h1>
        <SearchBar onClick={onChange} onClear={onClear} />
        <Content clients={state} />
      </div>

    </div>
  )
}

export default App


