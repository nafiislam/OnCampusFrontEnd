"use client";

import { useState } from "react";
import Select from "react-tailwindcss-select";

const options = [
    { value: "fox", label: "🦊 Fox" },
    { value: "Butterfly", label: "🦋 Butterfly" },
    { value: "Honeybee", label: "🐝 Honeybee" },
    { value: "Ladybug", label: "🐞 Ladybug" },
    { value: "Snail", label: "🐌 Snail" },
    { value: "Spider", label: "🕷 Spider" },
    { value: "Turtle", label: "🐢 Turtle" },
    { value: "Unicorn", label: "🦄 Unicorn" },
    { value: "Zebra", label: "🦓 Zebra" },
    { value: "Elephant", label: "🐘 Elephant" },
    { value: "Giraffe", label: "🦒 Giraffe" },
    { value: "Kangaroo", label: "🦘 Kangaroo" },
    { value: "Lion", label: "🦁 Lion" },
    { value: "Penguin", label: "🐧 Penguin" },
    { value: "Rabbit", label: "🐇 Rabbit" },
    { value: "Tiger", label: "🐅 Tiger" },

];


const MultiSelectUltra = () => {
    console.log(options)
    const[animal, setAnimal] =useState(null);

    const handleChange = value => {
        console.log("value:", value);
        setAnimal(value);
    };

    return(
       <div className="w-1/2">
         <Select
            value={animal}
            onChange={handleChange}
            options={options}
            isClearable="true"
            isMultiple="true"
            isSearchable="true"
            
            classNames={{
                menuButton: ({ isDisabled }) => (
                    `flex text-sm text-gray-500 border border-gray-300 rounded shadow-sm transition-all duration-300 focus:outline-none ${
                        isDisabled
                            ? "bg-gray-200"
                            : "bg-white hover:border-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-500/20"
                    }`
                ),
                menu: "absolute z-10 w-full bg-white shadow-lg border rounded py-1 mt-1.5 text-sm text-gray-700",
                listItem: ({ isSelected }) => (
                    `block transition duration-200 px-2 py-2 cursor-pointer select-none truncate rounded ${
                        isSelected
                            ? `text-white bg-blue-500`
                            : `text-gray-500 hover:bg-blue-100 hover:text-blue-500`
                    }`
                )
            }}
        />
       </div>
    );
};
export default MultiSelectUltra;