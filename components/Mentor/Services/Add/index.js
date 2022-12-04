import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'
const AddService = () => {
  const items = ['1 on 1 Session', 'Workshop', 'Courses', 'Text query']
  const [state, setState] = useState({
    oneOnOne: {},
  })
  const [currentService, setCurrentService] = useState(items[0])
  const handleOneOnOneChange = (values) => {
    setState((prev) => ({ ...prev, oneOnOne: values }))
  }
  const oneOnOneSave = () => {}
  const saveClick = () => {
    switch (currentService) {
      case '1 on 1 Session':
        oneOnOneSave()
        break
    }
  }
  console.log('state', state)
  return (
    <main className="flex flex-col justify-start p-10 md:p-20 ">
      <Header
        currentService={currentService}
        setCurrentService={setCurrentService}
        items={items}
        saveClick={saveClick}
      />
      <Content
        currentService={currentService}
        setValues={handleOneOnOneChange}
      />
    </main>
  )
}

export default AddService
