const Loading = () => {

    return (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col items-center justify-center z-50">
            <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"></div>
            <span className="text-white text-lg">Loading...</span>
        </div>
    )
}

export default Loading;
