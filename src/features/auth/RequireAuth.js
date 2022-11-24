import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth"

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    const { roles } = useAuth()

    const content = (
        // if we find any one of the roles
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : <Navigate to='/login' state={{ from: location }} replace />
            // replace will take the user to their previous location
    )

  return content
}

export default RequireAuth