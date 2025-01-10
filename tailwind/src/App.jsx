
// import './App.css'
// function App() {
//   return (
//       // <div className="grid grid-cols-10">
//       //   <div className='bg-red-400 col-span-4'> hi there from the first div
//       //     </div>
//       //   <div className='bg-yellow-400 col-span-4'>there</div>
//       //   <div className='bg-green-400 col-span-1'>...</div>
//       // </div>
//       // !
//       // <div className="grid grid-cols-10">
//       //   <div className='bg-red-400 col-span-4'> hi there from the first div
//       //     </div>
//       //   <div className='bg-yellow-400 col-span-4'>there</div>
//       //   <div className='bg-green-400 col-span-1'>...</div>
//       // </div>
//       // !
//       // <div className='bg-red-400 md:bg-blue-500'>
//       //   hi there
//       // </div>
//       // !
//       // <div className="grid grid-cols-12">
//       //   <div className='bg-red-400 col-span-12 md:col-span-4'> hi there from the first div
//       //     </div>
//       //   <div className='bg-yellow-400 col-span-12 md:col-span-4'>there</div>
//       //   <div className='bg-green-400 col-span-12 md:col-span-4'>...</div>
//       // </div>
//       // !
//       // <div className="grid grid-cols-1 md:grid-cols-3">
//       //   <div className='bg-red-400'> hi there from the first div
//       //     </div>
//       //   <div className='bg-yellow-400'>there</div>
//       //   <div className='bg-green-400 '>...</div>
//       // </div>
//       // !
//       // <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
//       //   <div className='bg-red-400 text-yellow-300 text-xl rounded-full'> hi there from the first div
//       //     </div>
//       //   <div className='bg-yellow-400 text-red-500 rounded-md'>there</div>
//       //   <div className='bg-green-400 text-red-500 rounded-xl' >...</div>
//       //   <div className='bg-red-400 text-yellow-300 text-xl rounded-full'> hi there from the first div  </div>
//       //   <div className='bg-yellow-400 text-red-500 rounded-md'>there</div>
//       // </div>
//       // !
      
//   );
// }


// export default App

// !


import './App.css'
import { RevenueCard } from './components/RevenueCard';

function App(){
  return (
    <div >
    <div className=' grid grid-cols-4'>
      <RevenueCard title={"Amount pending  "} amount={"92,312.20"} orderCount={12}>
      </RevenueCard>
    </div>
    </div>
  );
}

export default App;
