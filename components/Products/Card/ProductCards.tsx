import Image from 'next/image'
import React from 'react'
import Button from '../../Ui/Button'

const ProductCards = ({src,price}:any) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
              src={src}
              alt='..'
              height={400}
              width={400}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-sm md:text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                    $100
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                <Button text={'XL'}/>
                <Button text={'M'}/>
                <Button text={'XXL'}/>
                <Button text={'L'}/>
            </div>
        </div>
    )
}

export default ProductCards