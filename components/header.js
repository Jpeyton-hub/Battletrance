import Link from 'next/link'

const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg'>
            <ul className=''>
                <li className=''><Link href='/DashBoard'><a className='transition duration-500 hover:bg-yellow-500 transition duration-500 hover:tracking-widest p-1 rounded'>DashBoard</a></Link></li>
                <li className=''>Trance</li>
                <li className=''>Schedule</li>
            </ul>
        </nav>
    )
}

export default Header
