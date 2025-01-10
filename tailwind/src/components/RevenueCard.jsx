import React from "react";

export const RevenueCard=({
    title,
    amount,
    orderCount,
})=>{
    return  <div className="bg-white rounded shadow-md p-2">
        <div className="text-gray-600">
            {title}
            (?)
        </div>
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">
            ₹{amount}
            </div>
            <div className="text-blue-700 underline">
            { orderCount ? <div>
                    {orderCount} order(s) {">"}
                </div>: null } 
                </div> 
                </div>
    </div>
}