import X from '../../../public/assets/X.svg'
import Linkedin from '../../../public/assets/Linkedin.svg'
import fb from '../../../public/assets/fb.svg'
import insta from '../../../public/assets/insta.svg'
const Footer = () => {
    return (
        <footer className='pt-[51px] mt-[150px] pb-[44px]'>
            <div className='flex gap-8 items-center justify-center'>
                <img src={fb} alt="facebook icon"/>
                <img src={insta} alt="instagram icon"/>
                <img src={X} alt="X icon"/>
                <img src={Linkedin} alt="Linkedin icon"/>
            </div>
            <h1 className='text-center py-4 text-[14px] text-dark'>Copyright ©2020 All rights reserved </h1>
        </footer>
    )
}

export default Footer