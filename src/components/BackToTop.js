function BackToTop() {
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div onClick={topFunction} className="cursor-pointer text-xs bg-[#40445c] flex justify-center text-white hover:opacity-75">
                <h1 className="py-5">Back to Top</h1>
            
        </div>
    )
}

export default BackToTop
