

const Nav = () => {
  return (
    <>
    <div className="flex justify-between items-center w-screen h-20 bg-yellow-500">
        <h1 className="text-2xl font-bold ml-5">JokeQues ?</h1>
        <ul className="flex justify-evenly cursor-pointer">
            <li className="ml-4">Contact</li>
            <li className="ml-4">More Jokes</li>
            <li className="ml-4">Pricing</li>
            <li className="ml-4 mr-7">Testimonials</li>
        </ul>
    </div>
    </>
  )
}

export default Nav
