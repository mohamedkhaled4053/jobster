import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


export default function PrivateRoute({children}) {
    let {user} = useSelector(store=>store.user)
    if(!user){
        return <Navigate to='landing'/>
    }
    return children
}