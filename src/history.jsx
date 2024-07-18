export default function History(props)
{

    return(
        <div className="">
            <ul className="flex float-right">
                {props.pastResults.map((result,index) => (index < 8  && <li className={`${result.win ? 'bg-[#368a36]' : 'bg-[#c72e2e]'} border-2 border-[#426379] ml-2 rounded-full text-[#fbfdff] text-xs py-1 px-2`} key={index}>{result.res}</li> ))}
            </ul>
        </div>
    )
}