import { store } from '../../app/store'
import { notesApiSlice  } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Prefetch = () => {
    useEffect(() => {    

        //initiate method creates the manual subscription
    // const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate())
    // const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    store.dispatch(notesApiSlice.util.prefetch('getNotes','notesList',{ force: true }))
    store.dispatch(usersApiSlice.util.prefetch('getNUsers','usersList',{ force: true }))

    },[])

  return <Outlet />
}

export default Prefetch