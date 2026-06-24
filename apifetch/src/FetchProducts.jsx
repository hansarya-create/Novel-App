import React, { useEffect, useState } from 'react'

const url = "https://dummyjson.com/products"
console.log(url);

export default function FetchProducts() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchHandler = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setProducts(data.products);
    }
    console.log(products);

    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        fetchHandler();
    }, []);


    return (
        <div>
            <h1 className='font-sans text-2xl text-green-500 text-center'>Products Store</h1>

            <div className='flex justify-centre mb-6'>
                <input
                    type='text'
                    placeholder='search products...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='mt-3 p-3 w-[500px] rounded-xl border-2 border-green-700 outline-none mx-auto ' />
            </div>

            <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))]
                            gap-4 '>
                    
                {filteredProducts.map((item) => (
                    <div key={item.id} className='font-sans font-bold text-gray-100 rounded-2xl
                                                   flex flex-row border-2 flex-wrap gap-2 p-2 bg-gray-700'>
                        <div>
                            <h1 className='text-xl'>{item.title}</h1>
                        </div>
                        <div>
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div>
                            <h1 className='text-xl'>${item.price}</h1>
                            <h1 className='text-xl'>⭐️{item.rating}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}