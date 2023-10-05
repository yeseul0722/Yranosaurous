import React from 'react';
import { motion } from 'framer-motion';
const Animation = ({ children }: any) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      {children}
    </motion.div>
  );
};

export default Animation;
