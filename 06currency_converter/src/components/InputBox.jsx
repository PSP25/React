// import React, { useId } from "react";

// function InputBox({
//   label,
//   amount,
//   onAmountChange,
//   onCurrencyChange,
//   currencyOptions = [],
//   selectCurrency = "usd",
//   amountDisabled = false,
//   currencyDisable = false,
//   className = "",
// }) {
//   const amountInputId = useId();

//   return (
//     <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//       <div className="w-1/2">
//         <label
//           htmlFor={amountInputId}
//           className="text-black/40 mb-2 inline-block"
//         >
//           {label}
//         </label>
//         <input
//           id={amountInputId}
//           className="outline-none w-full bg-transparent py-1.5"
//           type="number"
//           placeholder="Amount"
//           disabled={amountDisabled}
//           value={amount}
//           onChange={(e) =>
//             onAmountChange && onAmountChange(Number(e.target.value))
//           }
//           //this above process is imp, we call a function and function cannot
//           //have default values unlike variables thus sometime it can cause issue

//           //also, always convert to number the parameter of this function
//           //as by default many times api give astring datas
//         />
//       </div>
//       <div className="w-1/2 flex flex-wrap justify-end text-right">
//         <p className="text-black/40 mb-2 w-full">Currency Type</p>
//         <select
//           className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//           value={selectCurrency}
//           disabled={currencyDisable}
//           onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//         >
//           {/* we need to loop through each option using js maps
//                  jav bhi loop laga rahe ho, use key so that
//                  react doesnot creates repeatative elements in DOM
//                  key can be anything that is unique*/}
//           {currencyOptions.map((currency) => (
//             <option key={currency} value={currency}>
//               {currency}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }
// //you can use a better way to export items.
// // this below process is good and works well in every process
// //but when you have multiple components, then you would love
// //to have a separate js file that imports each component file
// //and return each of then
// //first create a js file, import each component file, then export it
// //syntax;
// //import {names...} from './name'
// //export {}
// export default InputBox;





import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;