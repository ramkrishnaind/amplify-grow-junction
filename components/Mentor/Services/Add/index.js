import React, { useState } from 'react'
import Header from './Header'
import Content from './Content'
const AddService = () => {
  const items = ['1 on 1 Session', 'Workshop', 'Courses', 'Text query']
  const [currentService, setCurrentService] = useState(items[0])
  return (
    <main className="flex flex-col justify-start p-10 md:p-20 ">
      <Header
        currentService={currentService}
        setCurrentService={setCurrentService}
        items={items}
      />
      <Content currentService={currentService} />
    </main>
  )
}

export default AddService
