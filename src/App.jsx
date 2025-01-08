import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import BrevoConversationsWidget from './components/BrevoConversationsWidget';
import { Header } from './components/Header';

import { Home } from './pages/home/Page';
import { Actualidad } from './pages/Actualidad';
import { Projects } from './pages/Projects';
import { SonrisasNavideñas } from './pages/projects/pages/SonrisasNavideñas';
import { TejiendoHistoria } from './pages/projects/pages/TejiendoHistoria';
import { DPS24 } from './pages/projects/pages/DPS24';
import { DPS25 } from './pages/projects/pages/DPS25';
import { Conocenos } from './pages/Conocenos';
import { Photogallery } from './pages/Photogallery';
import { AvisoLegal } from './pages/legal/AvisoLegal';
import { PoliticaPrivacidad } from './pages/legal/PoliticaPrivacidad';
import { NotFound } from './pages/NotFound';

function App() {
    const location = useLocation();

    const pageTransition = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <>
            <HelmetProvider>
                <Header />

                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        
                        <Route path="/" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><Home /></motion.div>} />
                        
                        <Route path="/actualidad" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><Actualidad /></motion.div>} />

                        <Route path="/proyectos" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><Projects /></motion.div>} />
                        <Route path="/proyectos/sonrisas-navideñas" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><SonrisasNavideñas /></motion.div>} />
                        <Route path="/proyectos/tejiendo-historia" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><TejiendoHistoria /></motion.div>} />
                        <Route path="/proyectos/dps24/" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><DPS24 /></motion.div>} />
                        <Route path="/proyectos/dia-del-pensamiento-scout-2024/" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><DPS24 /></motion.div>} />
                        <Route path="/proyectos/dps25/" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><DPS25 /></motion.div>} />

                        <Route path="/conocenos/" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><Conocenos /></motion.div>} />

                        <Route path="/fotogaleria" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><Photogallery /></motion.div>} />
                        
                        <Route path="/aviso-legal/" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><AvisoLegal /></motion.div>} />
                        <Route path="/politica-de-privacidad/" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><PoliticaPrivacidad /></motion.div>} />

                        <Route path="*" element={<motion.div {...pageTransition} transition={{ duration: 0.5 }}><NotFound /></motion.div>} />

                    </Routes>
                </AnimatePresence>

                <BrevoConversationsWidget />
            </HelmetProvider>
            
        </>
    );
}

export default App;
