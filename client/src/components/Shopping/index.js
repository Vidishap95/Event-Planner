import React from 'react'
import FendiBauguette from "../../assets/FendiBaguette.png"
import FendiDuffle from "../../assets/FendiDuffle.png"

const Shopping = () => {
    return (
        <div className='bg-yellow-950 flex justify-center min-h-full container mx-auto rounded-lg gap-20 m-4'>
            <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <div class="px-4 py-2">
                    <h1 class="text-yellow-700 font-bold text-3xl uppercase">Flawless Functioning Toast Bag</h1>
                    <p class="text-yellow-700 text-sm mt-1">Look fashionable & stylish at your Flawless events with this bag!</p>
                </div>
                <img class="h-56 w-full mt-2 object-scale-down" src={FendiBauguette} alt="FF Bag" />
                <div class="flex items-center justify-between px-4 py-2 bg-yellow-700">
                    <h1 class="text-yellow-100 font-bold text-xl">$3,700</h1>
                </div>
            </div>
            <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
                <div class="px-4 py-2">
                    <h1 class="text-yellow-700 font-bold text-3xl uppercase">Flawless Functioning Duffle Bag</h1>
                    <p class="text-yellow-700 text-sm mt-1"> Don't forget about extra items put them in your Flawless Duffle! </p>
                </div>
                <img class="h-56 w-full mt-2 object-scale-down" src={FendiDuffle} alt="FF Duffle" />
                <div class="flex items-center justify-between px-4 py-2 bg-yellow-700">
                    <h1 class="text-yellow-100 font-bold text-xl">$1,700</h1>
                </div>
            </div>
        </div>
    )
}

export default Shopping