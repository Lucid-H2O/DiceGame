import multiply from './assets/multiply.png'
import percentage from './assets/percentage.png'
import swap from './assets/reverse.png'


export default function Controls(props){

    function setOver(){
        props.setOver(!props.over)
    }

    const handleChanceChange = (event) => {
        console.log("handle chance change")
        if(props.over){
            if(event.target.value >= 0.01 && event.target.value <= 99.99){
                    props.setThreshold(100 - event.target.value)
                    document.getElementById("under").style.width = (`${100 - event.target.value}%`) 
                    }
            else if(event.target.value < 0.01){
                    props.setThreshold(99.99);
                    document.getElementById("under").style.width = (`99.99%`);
                    }
            else if(event.target.value > 99.99){
                    props.setThreshold(0.01);
                    document.getElementById("under").style.width = (`0.01%`);
                    }
        }
        else{
            if(event.target.value >= 0.01 && event.target.value <= 99.99){
                props.setThreshold(event.target.value -1 + 1)
                document.getElementById("under").style.width = (`${event.target.value - 1 + 1}%`) 
                } 
            else if(event.target.value <= 0.01){
                console.log("else3")
                    props.setThreshold(0.01);
                    document.getElementById("under").style.width = (`0.01%`);
                    }
            else if(event.target.value > 99.99){
                console.log("else4")
                    props.setThreshold(99.99);
                    document.getElementById("under").style.width = (`99.99%`);
                    }
        }
    }

    const handleMultiChange = (event) => {
        console.log("handle multi change")
        if(props.over){
            if(event.target.value >= 0.01 && event.target.value <= 10000){
                    props.setThreshold(100-(100/event.target.value))
                    document.getElementById("under").style.width = (`${100-(100/event.target.value)}%`) 
                    }
            else if(event.target.value < 1){
                    props.setThreshold(99.99);
                    document.getElementById("under").style.width = (`100%`);
                    }
            else if(event.target.value > 10000){
                    props.setThreshold(0.01);
                    document.getElementById("under").style.width = (`0%`);
                    }
        }
        else{
            if(event.target.value >= 0.01 && event.target.value <= 10000){
                props.setThreshold((100/event.target.value))
                document.getElementById("under").style.width = (`${(100/event.target.value)}%`) 
                } 
            else if(event.target.value <= 0.01){
                console.log("else3")
                    props.setThreshold(0.01);
                    document.getElementById("under").style.width = (`0.01%`);
                    }
            else if(event.target.value > 10000){
                console.log("else4")
                    props.setThreshold(99.99);
                    document.getElementById("under").style.width = (`99.99%`);
                    }
        }
    }

    return( 
    <>
        <div className="flex flex-col text-center bg-[#426379] p-3 mx-8 mt-4 rounded-[4px] shadow-md">
            <div className="flex gap-2">
                <div className="flex-grow flex flex-col mx-auto rounded-sm ">
                    <div className='mb-[2px]'>
                       <label className="float-left text-xs text-[#cbd3d8] ml-1">Multiplier</label> 
                    </div>
                    <div className="flex-grow flex bg-[#1f4057]  text-base border-[#28506d] border-4 p-[2px] text-[#abb2b6] rounded-sm shadow-md">
                        <input type="number" className="w-full bg-transparent" onChange={handleMultiChange} value={props.over ? Math.round(10000*100/(100-props.threshold))/10000 : Math.round(10000*100/props.threshold)/10000}/>
                        <div className='bg-transparent border-none cursor-pointer rounded-sm my-auto' ><img className='h-5' alt='icon' src={multiply}></img></div>
                    </div>
                </div>
                <div className="flex-grow flex flex-col mx-auto rounded-sm ">
                    <div className='mb-[2px]'>
                       <label className="float-left text-xs text-[#cbd3d8] ml-1">{props.over ? 'Roll Over' : 'Roll Under'}</label> 
                    </div>
                    <div className="flex-grow flex bg-[#1f4057]  text-base border-[#28506d] border-4 p-[2px] text-[#abb2b6] rounded-sm shadow-md">
                        <input type="number" className="w-full bg-transparent" placeholder="0.00" value={props.threshold} disabled/>
                        <button onClick={setOver} className='bg-transparent border-none cursor-pointer rounded-sm my-auto' ><img className='h-5' alt='icon' src={swap}></img></button>
                    </div>
                </div>
                <div className="flex-grow flex flex-col mx-auto rounded-sm ">
                    <div className='mb-[2px]'>
                       <label className="float-left text-xs text-[#cbd3d8] ml-1">Win Chance</label> 
                    </div>
                    <div className="flex-grow flex bg-[#1f4057]  text-base border-[#28506d] border-4 p-[2px] text-[#abb2b6] rounded-sm shadow-md ">
                        <input type="number" className="w-full bg-transparent" onChange={handleChanceChange} value={props.over ? Math.round(1000*(100-props.threshold))/1000 : Math.round(1000*(props.threshold))/1000}/>
                        <div className='bg-transparent border-none cursor-pointer rounded-sm my-auto' ><img className='h-5' alt='icon' src={percentage}></img></div>
                    </div>
                </div>
            </div>
        <div className="flex gap-2 mt-2">
            <div className="flex-grow flex flex-col mx-auto rounded-sm w-[calc(66.666%+8px)] ">
                <div className='mb-[2px]'>
                   <label className="float-left text-xs text-[#cbd3d8] ml-1">Wager Amount</label> 
                </div>
                <div className="flex-grow flex bg-[#1f4057]  text-base border-[#28506d] border-4 p-[2px] text-[#abb2b6] rounded-sm shadow-md ">
                    <input type="number" className="w-full bg-transparent" placeholder="1.00"/>
                </div>
            </div>
            <div className="flex-grow flex flex-col mx-auto rounded-sm w-1/3">
                <div className='mb-5'>
                </div>
                <div className="flex-grow ">
                    <button onClick={props.onClickHandler} className='bg-[#3fe247] border-0 border-none cursor-pointer rounded-sm w-full h-full shadow-lg active:opacity-90'>Roll</button>
                </div>
            </div>
            
        </div>
    </div>
    </>
    )
}