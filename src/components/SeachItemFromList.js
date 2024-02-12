import React, { useEffect, useState } from 'react'

const SeachItemFromList = () => {
  const [list,setList] = useState([])
  const [searchText,setSearchText] = useState('')

  const getUserDetailsFromApi =  async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const res  = await response.json()
    setList(res)
  }

  useEffect(()=>{
    getUserDetailsFromApi()
  },[])
  
  const filterItems = list.filter((item) =>item.name.toLowerCase().includes(searchText.toLowerCase()))
  return (
    <div>
      <input type="text" placeholder="Enter item name you want to search" onChange={(e)=>setSearchText(e.target.value)}/>
      {filterItems.map((item)=>{
        return (
            <li key={item.id}>{item.name}</li>
        )
      })}
    </div>
  )
}

export default SeachItemFromList