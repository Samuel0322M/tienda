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
                    <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg> {context.count}
                    </li>
            </ul>
        </nav>
    )
}

export default navbar