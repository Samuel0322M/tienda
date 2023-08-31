import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext} from "../../Context"


const navbar = () => {
    const context = useContext(ShoppingCartContext)
    let activeStyle = 'underline underline-offset-4'
    
    
    return(
        <nav className="absolute flex justify-between items-center z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to='/'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        Clothes
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                    to='/electronics'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        Electronics
                    </NavLink>
                    </li>
                    <li>
                    <NavLink
                     to='/forniture'
                     className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        Forniture
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                    to='/toys'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-white/60"> 
                    <NavLink to='/'>
                        samuelelterrible@tucorazon.com
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className = {({ isActive}) =>
                     isActive ? activeStyle : undefined
                     }>
                        My Account
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                    to='/sign-in'
                    className = {({ isActive}) =>
                    isActive ? activeStyle : undefined
                    }>
                        Sign in
                    </NavLink>
                    </li>
                    <li>
                    🛒 {context.count}
                    </li>
            </ul>
        </nav>
    )
}

export default navbar