const Card = () => {
    return (
        <div className="bg-black/30 cursor-pointer w-56 h-60 rounded-lg"> 
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://hipercentroelectronico.com/wp-content/uploads/2020/06/Hipercentro-Electronico-audifonos-diadema-dj-monitoreo-multimedia-rojo-HP2R-Pro-Dj-1.jpg" alt="headphones" />
                <div className="absolute top-0 right-0 flex justify-center item-center bg-black/50 w-6 h-6 rounded-full m-2">
                    +</div>
            </figure>
            <p className="flex justify-between"> 
                <span className="text-sm font-light">Headphones</span>
                <span className="text-lg font-medium">$10000</span>
            </p>
        </div>

    )
}

export default Card