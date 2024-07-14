import multiply from './assets/multiply.png'
import percentage from './assets/percentage.png'
import swap from './assets/reverse.png'


export default function Controls(props){

    


    return( 
    <>
        <div className="flex flex-col text-center bg-[#426379] p-3 mx-8 mt-4 rounded-[4px] shadow-md">
            <div className="flex gap-2">
                <div className="flex-grow flex flex-col mx-auto rounded-sm ">
                    <div className='mb-1'>
                       <label className="float-left text-xs text-[#cbd3d8]">Multiplier</label> 
                    </div>
                    <div className="flex-grow relative ">
                        <input type="text" className="bg-[#1f4057] w-full block text-base border-[#28506d] border-4 p-[2px] text-[#abb2b6] rounded-sm shadow-md" placeholder="1.00"/>
                        <button onClick="" className='bg-transparent border-none cursor-pointer inline-block absolute top-[25%] right-2 rounded-sm ' ><img className='h-5' alt='icon' src={multiply}></img></button>
                    </div>
                </div>
                <div className="flex-grow flex flex-col mx-auto rounded-sm ">
                    <div className='mb-1'>
                       <label className="float-left text-xs text-[#cbd3d8]">Roll Over</label> 
                    </div>
                    <div className="flex-grow relative ">
                        <input type="text" className="bg-[#1f4057] w-full block text-base border-[#28506d] border-4 p-[2px] text-[#abb2b6] rounded-sm shadow-md" placeholder="1.00"/>
                        <button onClick="" className='bg-transparent border-none cursor-pointer inline-block absolute top-[25%] right-2 rounded-sm ' ><img className='h-5' alt='icon' src={swap}></img></button>
                    </div>
                </div>
                <div className="flex-grow flex flex-col mx-auto rounded-sm ">
                    <div className='mb-1'>
                       <label className="float-left text-xs text-[#cbd3d8]">Win Chance</label> 
                    </div>
                    <div className="flex-grow relative ">
                        <input type="text" className="bg-[#1f4057] w-full block text-base border-[#28506d] border-4 p-[2px] text-[#abb2b6] rounded-sm shadow-md" placeholder="1.00"/>
                        <button onClick="" className='bg-transparent border-none cursor-pointer inline-block absolute top-[25%] right-2 rounded-sm ' ><img className='h-5' alt='icon' src={percentage}></img></button>
                    </div>
                </div>
            </div>
        <div className="flex gap-2 mt-2">
            <div className="flex-grow flex flex-col mx-auto rounded-sm w-[calc(66.666%+8px)] ">
                <div className='mb-1'>
                   <label className="float-left text-xs text-[#cbd3d8]">Bet Amount</label> 
                </div>
                <div className="flex-grow relative ">
                    <input type="text" className="bg-[#1f4057] w-full block text-xl border-[#28506d] border-4 p-2 text-[#abb2b6] rounded-sm shadow-md" placeholder="1.00"/>
                </div>
            </div>
            <div className="flex-grow flex flex-col mx-auto rounded-sm w-1/3">
                <div className='mb-5'>
                </div>
                <div className="flex-grow ">
                    <button onClick={props.onClickHandler} className='bg-[#3fe247] border-0 border-none cursor-pointer rounded-sm w-full h-full shadow-lg active:opacity-90'>Bet</button>
                </div>
            </div>
            
        </div>
    </div>
    </>
    )
}