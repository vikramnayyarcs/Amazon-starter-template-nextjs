import BackToTop from 'react-easy-back-to-top';

function PersonalFooter() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col pt-5 bg-white items-center divide-y border-gray-50 ">
                <div className="h-5"/>
                <hr className="text-black"/>
                <p className="text-sm my-5">See personalised recommendations</p>      

                <hr className="bg-black"/>
                <button className="mt-2 mt-auto button text-xs w-200 ">Sign in</button>
                <p className="text-sm my-5">New Customer? <span className="text-blue-500 cursor-pointer">Start Here.</span></p>
                <div className="h-2"/>
                <hr className="text-black"/>
            
            </div>

            
            
        </div>
    )
}

export default PersonalFooter
