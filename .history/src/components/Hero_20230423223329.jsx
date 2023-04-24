import { logo } from '../assets '


const Hero = () => {
  return (
    <header
    className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='sumz_logo' className='w-28 h-28 object-contain' />
            <button 
                type='button'
                onClick={() => window.open('https://github.com/AlgoHussle/ai-summarize')}
                className='black_btn hover:bg-orange-500 text-white font-bold py-2 px-4 rounded'
                >
                    Github
            </button>
        </nav>


        <h1 className='head_text'>Summarize Articles With <br />
            <span className='text-orange-500'>OpenAI GPT-4</span>
        
        </h1>
    </header>
  )
}

export default Hero