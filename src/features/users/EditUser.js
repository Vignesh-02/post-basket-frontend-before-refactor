import { useParams } from 'react-router-dom'
import  EditUserForm  from './EditUserForm'

import { useGetUsersQuery } from './usersApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'

const EditUser = () => {
  const { id } = useParams()

  // we are pulling this out of the cache and not the redux state
  // This is a memoized selector that we created
  // const user = useSelector(state => selectUserById(state, id))

  const user = useGetUsersQuery('usersList', {
    selectFromResult: ({ data }) => ({
        user: data?.entities[id]
    }),
})

  if (!user) return <PulseLoader color={"#FFF"} />

  const content = <EditUserForm user={user} />

  return content
}

export default EditUser