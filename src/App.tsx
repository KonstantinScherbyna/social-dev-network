import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { HeaderContainer } from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginContainer';
import Profile from './components/Profile/Profile'
import UsersContainer from './components/Users/UsersContainer'
import Dialogs from './components/Dialogs/Dialogs'
import withRoot from './withRoot';
import { NotFaund } from './components/404/NotFaund';
import ChatPage from './components/Chat/ChatPage';
import { useAppDispatch, useAppSelector } from './hook';
import { initializeApp } from './redux/app-reducer-slice';
import Backdrp from './components/common/Preloader/BackDrop';
import NewsPage from './components/News/NewsPage';
import DialogsContainer from './components/Dialogs/DialogsContainer';



// const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'))
// const Profile = React.lazy(() => import('./components/Profile/Profile'))
// const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))



const App = () => {
  const dispatch = useAppDispatch()

  let isInitialized = useAppSelector(store => store.app.initialized)

  useEffect(() => {
    dispatch(initializeApp())
  }, [])



  debugger
  if (!isInitialized) {
    return <Backdrp />
  } return (
    <React.Fragment>

      <HeaderContainer />

      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/dialogs' element={<DialogsContainer />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='/users' element={<UsersContainer />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='*' element={<NotFaund />} />
      </Routes>

    </React.Fragment>
  )
}

// export default App
export default App
