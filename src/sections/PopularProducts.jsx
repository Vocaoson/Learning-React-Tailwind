import Products from "../components/Products"

Products
const CustomerReviews = () => {
  return (
    <>
      <div className="max-w-3xl">
        <h1 className='text-4xl font-bold font-montserrat'>
          Our <span className='text-coral-red'>Popular</span> Products
        </h1>

        <p className="font-montserrat mt-5 text-lg text-gray-500">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
      </div>

      <div className="pt-14">
        <Products></Products>
      </div>
    </>


  )
}

export default CustomerReviews