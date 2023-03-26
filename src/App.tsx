import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { HeaderContainer } from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginContainer';
import Profile from './components/Profile/Profile'
import UsersContainer from './components/Users/UsersContainer'
import { NotFaund } from './components/404/NotFaund';
import ChatPage from './components/Chat/ChatPage';
import { useAppDispatch, useAppSelector } from './hook';
import { initializeApp } from './redux/app-reducer-slice';
import Backdrp from './components/common/Preloader/BackDrop';
import NewsPage from './components/News/NewsPage';


const App = () => {
  const dispatch = useAppDispatch()

  let isInitialized = useAppSelector(store => store.app.initialized)

  useEffect(() => {
    dispatch(initializeApp())
  }, [])


  if (!isInitialized) {
    return <Backdrp />
  } return (
    <React.Fragment>

      <HeaderContainer />

      <Routes>
        <Route path='/' element={<Profile />} />
        {/* <Route path='/dialogs' element={<DialogsContainer />} /> */}
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

export default App
