import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import HeroSection from '@/components/organisms/HeroSection';
import HowItWorksSection from '@/components/organisms/HowItWorksSection';
import ToolInterfaceSection from '@/components/organisms/ToolInterfaceSection';
import BenefitsSection from '@/components/organisms/BenefitsSection';
import FooterSection from '@/components/organisms/FooterSection';
import LoadingSpinner from '@/components/ui/Loading';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {isLoading && <LoadingSpinner />}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <HeroSection />
        <HowItWorksSection />
        <ToolInterfaceSection setIsLoading={setIsLoading} />
        <BenefitsSection />
        <FooterSection />
      </motion.div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;