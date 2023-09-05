import { useContext } from "react"
import { ShoppingCartContext} from "../../Context"
import "./styles.css"

const ProductDetail = () => {
    const context = useContext (ShoppingCartContext)


    return (
        <aside 
        className={` ${context.IsProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <svg onClick={() =>context.closeProductDetail()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
            </div>
            <figure className="px-6">
                <img 
                className= "w-full h-full rounded-lg" 
                src={context.productToShow.images ? context.productToShow.images[0]: ''}
                alt={context.productToShow.title}/>
            </figure>
            <p className="flex flex-col p-6">
                 <span className="font-medium text-2xl">${context.productToShow.price}</span>
                 <span className="font-medium text-md" >{context.productToShow.title}</span>
                 <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail