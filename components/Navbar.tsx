import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
    return (  
        <header className='w-[1440px] z-10 h-[80px] mx-auto'>
            <nav className="w-full h-full flex justify-between items-center sm:px-16 px-10 py-4">
                <Link href='/' className='flex justify-center items-center'>
                    <Image
                        src="/logo.png"
                        alt='apollo logo'
                        className='object-contain'
                        width={83}
                        height={16}
                    />
                </Link>

                <ul className='flex gap-16 flex-1 justify-center'>
                    <li className='nav-button'>Home</li>
                    <li className='nav-button'>Services</li>
                    <li className='nav-button'>Contact</li>
                </ul>

                <CustomButton
                    title='Request My Free Consultation'
                    btnType='button'
                    containerStyles='rounded-[8px] bg-main-gold min-w-[130px] px-4 py-3 text-bold hover:bg-transparent border-4 hover:border-main-gold ease-in duration-200 border-transparent'
                />
            </nav>
        </header>
    );
}
 
export default Navbar;