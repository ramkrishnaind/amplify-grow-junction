import React, { useEffect } from 'react'
import LeftMenu from '../../components/Mentor/LeftMenu'
import MainContent from '../../components/Mentor/MainContent'
import { useDispatch } from 'react-redux'
import { setMentorTitle } from '../../redux/actions/MentorTitleAction'
<<<<<<< HEAD

=======
import { Auth, withAuthenticator } from '@aws-amplify/ui-react'
// import withAuthenticator from '../add-todo'
>>>>>>> d3da3498a51c8eee94d004fe00cc4d5fcd33a878
const Mentor = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    if (!children) setMentorTitle(dispatch, 'Home')
  }, [])
  return (
    <main className="flex flex-row min-h-screen">
      <LeftMenu />
      <MainContent content={children ? children : null} />
    </main>
  )
}

<<<<<<< HEAD
export default Mentor
=======
export default withAuthenticator(Mentor)
>>>>>>> d3da3498a51c8eee94d004fe00cc4d5fcd33a878
