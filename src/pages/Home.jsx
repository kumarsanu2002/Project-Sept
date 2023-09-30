import {motion , AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';

//default val from state secton
import state from '../store';

import {headContainerAnimation ,
        headContentAnimation, 
        headTextAnimation ,
        slideAnimation
} from '../config/motion'

const Home = () => {
     const snap = useSnapshot(state); //defaul val
  return (
    <AnimatePresence>
       
        {snap.intro && ( //if we are allow to show shirt page  page(as intro is conditon form state page if we are allowed to show shirt)then we will show home page with motion html tag with  slide animation starting from left
        <motion.section className='home' {...slideAnimation('left')}>
            
            <motion.header {...slideAnimation('down')}> 
                <img src='./threejs.png' alt='logo'
                 className="w-8 h-8 object-contain"
                 />
            </motion.header>

            <motion.div  className='home-content' {...headContainerAnimation}>
               <motion.div {...headTextAnimation}>
                    <h1 className='head-text'>
                        LET'S <br className='xl:block hidden'/> DO IT.
                    </h1>
               </motion.div>
               <motion.div {...headContentAnimation} className='flex flex-col gap-5' >
                <p className='max-w-md font-normal text-gray-600 taxt-basse'> 
                Create your unique and exclusive shirt with our brand
                new 3-D customization tool. <strong>Beyound your imagination</strong>
                </p>
               </motion.div>
            </motion.div>
        </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home

//Bassicaly motion is html tag like motion.header is tag for header or motion.section  is tag for section
//{..slideAnimation} is for sliding
//{..headcontainerAnimation} is animationn for whole container