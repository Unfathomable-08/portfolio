"use client"

export default function Gear() {
  return (
    <>
        <div className="bg-[var(--secondary)] rounded-full h-38 w-38 flex items-center justify-center overflow-visible">
            <div className="bg-[var(--primary)] rounded-full h-22 w-22 relative flex items-center justify-center">
                {
                    [[-2.82, 0, 0],[-2, 2, 1],[-2, -2, 1],[0, 2.82, 0],[0, -2.82, 0],[2, 2, 1],[2, -2, 1],[2.82, 0, 0]].map((i)=>{
                        return (
                            <GearHooks index={i} key={i}/>
                        );
                    })
                }
            </div>
        </div>
    </>
  );
}

function GearHooks({index}){
    return (
        <div 
            style={{transform: 
                `translateX(calc((${index[0]} * 85px) / 3)) 
                translateY(calc((${index[1]} * 85px) / 3))
                rotate(calc((${index[2]} * 45deg)))
            `}}
            className="bg-[var(--secondary)] h-8 w-8 absolute rounded-lg"
        >
        </div>
    );
}