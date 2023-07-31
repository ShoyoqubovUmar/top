import React from 'react'
import { Bitcoin, Bruh, Eth, Face, GraphLine, GraphLine1, LineGraph, Litecoin, LogOut, Lol, Lol1 } from '..'

const Top = () => {
  return (
    <div className='flex flex-col items-start justify-start gap-6 py-10 px-14 bg'>
        <div className='flex items-center justify-between w-[100%]'>
            <div className='flex flex-col items-start justify-start gap-2 text-white'>
                <h1 className='font-sans font-medium text-[36px]'>Dashboard</h1>
                <p className=' font-sans font-normal text-[12px] '>With all of the styling tool options available in today’s market</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
                    <img src={Face} alt="" />
                    <p>Pixelz Warrios</p>
                    <img src={LogOut} alt="" className='cursor-pointer' />
            </div>
        </div>
            <div className='flex flex-col items-start justify-start gap-8'>
                <h4 className=' font-sans font-normal text-[19px]'>Wallets</h4>
                    <div className='flex items-center justify-center gap-7'>
                    <div className='flex items-center justify-center gap-8 sky border-[1px] border-slate-600 px-6 py-4 rounded-[10px]'>
                            <img src={Bitcoin} alt="" />
                            <div className='flex flex-col items-start justify-start gap-2'>
                                 <div className='flex flex-col items-start gap-2 justify-start '>
                                <div className='flex items-center justify-center gap-2 '>
                                    <h3 className=' font-sans text-[22px] text-white'>1.9678</h3>
                                    <h4 className=' font-sans text-[14px]'>BTC</h4>
                                </div>
                                 </div>
                                 <div className='flex flex-col items-start gap-2 justify-start '>
                                <div className='flex items-center justify-center gap-4 '>
                                    <img src={LineGraph} alt="" />
                                    <img src={Lol} alt="" />
                                    <h5 className='font-sans text-[10px] text-white'>+12,5%</h5>
                                </div>
                                 </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-8 sky border-[1px] border-slate-600 px-6 py-4 rounded-[10px]'>
                            <img src={Eth} alt="" />
                            <div className='flex flex-col items-start justify-start'>
                                 <div className='flex flex-col items-start gap-2 justify-start '>
                                <div className='flex items-center justify-center gap-2 '>
                                    <h3 className=' font-sans text-[22px] text-white'>23.234</h3>
                                    <h4 className=' font-sans text-[14px]'>ETH</h4>
                                </div>
                                 </div>
                                 <div className='flex flex-col items-start gap-2 justify-start '>
                                <div className='flex items-center justify-center gap-2 '>
                                    <img src={GraphLine} alt="" />
                                    <img src={Lol1} alt="" />
                                    <h5 className='font-sans text-[10px] text-white'>-5.23%</h5>
                                </div>
                                 </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-8 sky border-[1px] border-slate-600 px-6 py-4 rounded-[10px]'>
                            <img src={Litecoin} alt="" />
                            <div className='flex flex-col items-start justify-start'>
                                 <div className='flex flex-col items-start justify-start '>
                                <div className='flex items-center justify-center gap-2 '>
                                    <h3 className=' font-sans text-[22px] text-white'>380.234</h3>
                                    <h4 className=' font-sans text-[14px]'>LTC</h4>
                                </div>
                                 </div>
                                 <div className='flex flex-col items-start justify-start '>
                                <div className='flex items-center justify-center gap-2 '>
                                    <img src={GraphLine1} alt="" />
                                    <img src={Bruh} alt="" />
                                    <h5 className='font-sans text-[10px] text-white'>-5.23%</h5>
                                </div>
                                 </div>
                            </div>
                        </div>
                        <div className='flex items-center cursor-pointer justify-center border-[1px] border-dashed border-slate-600 px-8 py-7 rounded-[10px]'>
                            <h1 className=' font-sans font-normal text-slate-700 '>+ Add Currency</h1>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default Top