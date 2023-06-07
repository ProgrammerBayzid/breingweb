import Hero from './Hero/Hero'
import Join from './Join/Join'
import Enterprise from './Enterprise/Enterprise'
import Stay from './Stay/Stay'
import AppLogo from '../App/AppLogo';
import useTitle from '../../hooks/useTitle';
const Enterpris = () => {
    useTitle('Enterprise Hiring । Mass Recruitement-Bringin ')

    return (
        <div>
            <Hero></Hero>
            <Join></Join>
            <Enterprise></Enterprise>
            <Stay></Stay>
            <div className='flex justify-center mt-10'>
           <AppLogo></AppLogo>
           </div>
        </div>
    );
};

export default Enterpris;