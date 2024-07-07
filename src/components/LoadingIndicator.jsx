const LoadingIndicator = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-40 w-40 border-t-4 border-b-4 border-purple-500"></div>
        <img src="https://www.svgrepo.com/show/406721/ninja-light-skin-tone.svg" className="h-32 w-32" alt="Loading" />
      </div>
    </div>
  )
}

export default LoadingIndicator