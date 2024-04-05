import { star } from '../assets/icons/index'

const Product = ({ product }) => {
  return (
    <div className={`rounded-xl cursor-pointer max-sm:flex-1`}>
      <div className="flex items-center justify-center bg-card bg-center bg-cover sm:w-72 sm:h-72 max-sm:p-4 rounded-xl ">
        <img src={product.imgURL} alt="Images"
          width={127} height={103} className="object-contain" />
      </div>
      <br />
      <div className='flex gap-4'>
      <img src={star} alt="Product star" width={25} height={25} />
      <p>(4.5)</p>
      </div>
      <br />
      <h1 className='text-2xl font-bold'>
        {product.name}
      </h1>
      <br />
      <p className='text-coral-red text-2xl font-bold'>
        {product.price}
      </p>


    </div>
  )
}

export default Product