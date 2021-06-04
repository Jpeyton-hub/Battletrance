import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='w-screen h-20 bg-red-900 flex items-center justify-center'>
            <div className='flex'>
                <p className='text-white m-2'>&#169; 2021 James W Development</p>
                <div className='mt-1 mb-auto'>
                <Image className='' src='/images/devlogo.png' width={30} height={30}/>
                </div>
            </div>
            

        </footer>
    )
}

export default Footer
