
import * as React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';

export default function AnimatedCard({ children, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
    >
      <Card
        component={CardActionArea}
        onClick={onClick}
        sx={{
          p: 2.5,
          borderRadius: 3,
          '&:hover': {
            boxShadow: '0 20px 45px rgba(124,58,237,0.25)',
          },
        }}
      >
        {children}
      </Card>
    </motion.div>
  );
}
