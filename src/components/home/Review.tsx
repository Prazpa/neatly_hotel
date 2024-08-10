import React from 'react'


const ReviewsSection = () => {
  return (
    <div className='bg-gray-100 p-8 flex flex-col items-center gap-10'>
      <h2 className='text-3xl font-bold'>Our Customer Says</h2>
      <blockquote className='max-w-[600px] text-lg'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum
        assumenda libero. Repellat neque libero minus eaque dolor, quod, ab,
        aliquid atque iusto maxime impedit assumenda magnam excepturi ad
        numquam?
      </blockquote>
      <footer className='font-semibold'>Reviewer Name</footer>
    </div>
  )
}

export default ReviewsSection