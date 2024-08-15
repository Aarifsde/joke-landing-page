import { useEffect, useState } from "react";


const Hero = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('https://official-joke-api.appspot.com/jokes/random')
        .then(response => response.json())
        .then(json => setData(json.setup))
        .catch(error => console.error(error));
    }, []);

    return (
      <div className="bg-yellow-100 h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl">You will get new Ques EveryTime When the page refreshed..</h1>
        <h2 className="mt-4 text-3xl">{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}</h2>
        <h1 className="border-2 border-gray-600 rounded mt-5 w-10 text-center cursor-pointer">Ans</h1>
        <h1 className="mt-4">You should Subscribe for Answers.</h1>
      </div>
    );
}

export default Hero
