import React from 'react'
import {UserCircleIcon} from "@heroicons/react/solid";

/**
 * @Author - Vikram Nayyar
 * 
 * @returns - JSX Additional Header, for styling purposes. 
 */

function Sidebar() {
    return (
        <div>
            <div
                className="flex items-center font-bold text-white 
                        bg-[#232f3e] max-w-xs pl-15"
            >
                <UserCircleIcon
                    className="h-10"
                />
                <h1>Hello, Sign In</h1>
            </div>

            
        </div>
    )
}

export default Sidebar
