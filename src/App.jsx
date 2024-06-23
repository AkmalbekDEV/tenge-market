import React, { useContext } from 'react'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import { AuthContext } from './context/AuthContext'

const App = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <div>
            {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
        </div>
    )
}

export default App