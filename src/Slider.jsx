import './slider.css'
import dice from './assets/dice.png'
const Slider = (props) => {

  return (
  <div className='mt-10 mb-32 w-[708px] mx-auto'>
    <div className='border-2 border-transparent mb-2'>
      <div className='relative w-full mb-10 text-[#BFBFBF]'>
        <div id="dicePointer" className={`h-12 w-12 absolute translate-y-20 ml-[8px] flex flex-col items-center -translate-x-[50%]`}>
          <div id="pointer-lg" className='rotate-180 mb-1'></div>
          <img src={dice} alt='dice' className='rounded-full '/>
        </div>
        
        <div className='absolute ml-[8px] flex flex-col items-center -translate-x-[50%]'>
          <div className=''>0</div>
          <div id="pointer"></div>
        </div>
        <div className='absolute ml-[calc(25%+4px)] flex flex-col items-center -translate-x-[50%]'>
          <div className=''>25</div>
          <div id="pointer" className=''></div>
        </div>
        <div className='absolute ml-[50%] flex flex-col items-center -translate-x-[50%]'>
          <div className=''>50</div>
          <div id="pointer" className=''></div>
        </div>
        <div className='absolute ml-[calc(75%-4px)] flex flex-col items-center -translate-x-[50%]'>
          <div className=''>75</div>
          <div id="pointer" className=''></div>
        </div>
        <div className='absolute ml-[calc(100%-8px)]  flex flex-col items-center -translate-x-[50%]'>
          <div className=''>100</div>
          <div id="pointer" className=''></div>
        </div>
      </div>
    </div>
    <div className='p-1 bg-[#69869a] rounded-full'>
      <div className="relative border-solid h-4 w-full border-1 border-black z-[1000] rounded-full">
          <div id='under' className='bg-[#c72e2e] w-2/4 h-full clear-both z-20 absolute rounded-l-xl'></div>
          <div id='over' className='bg-[#19a819] w-full h-full clear-both z-10 absolute rounded-full'></div>
          <input type="range" min="0" max="100" value={props.currentThreshold} onChange={props.change} className="slider z-30 rounded-full" id="slider"/>
      </div>
    </div>
  </div>

        
  )

};

export default Slider;
