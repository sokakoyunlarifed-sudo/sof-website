
import * as React from 'react';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 14 },
        background:
          'radial-gradient(1200px 600px at 10% -20%, rgba(124,58,237,0.35), transparent 70%), ' +
          'radial-gradient(1200px 600px at 90% -20%, rgba(6,182,212,0.35), transparent 70%)',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography variant="h1" sx={{ fontSize: { xs: 36, md: 64 }, mb: 2 }}>
            Geleneği Geleceğe Taşıyoruz
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 720, opacity: 0.9, mb: 4 }}>
            Sokak oyunlarını modern bir yaklaşımla tanıtıyoruz. Etkinlikler, duyurular ve haberlerle
            kültürü canlı tutuyoruz.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button size="large" variant="contained" component={RouterLink} to="/etkinlikler">
              Yakın Etkinlikler
            </Button>
            <Button size="large" variant="outlined" component={RouterLink} to="/haberler">
              Son Haberler
            </Button>
          </Stack>
        </motion.div>

        {/* subtle floating shapes */}
        <Box
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            inset: 0,
          }}
        >
          <motion.div
            initial={{ x: -40, y: -10, rotate: -10, opacity: 0.25 }}
            animate={{ x: 10, y: 10, rotate: 0, opacity: 0.4 }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 6 }}
            style={{
              width: 180,
              height: 180,
              borderRadius: 24,
              background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(6,182,212,0.25))',
              position: 'absolute',
              top: 40,
              left: 20,
              filter: 'blur(12px)',
            }}
          />
          <motion.div
            initial={{ x: 20, y: 20, rotate: 15, opacity: 0.25 }}
            animate={{ x: -20, y: -10, rotate: 0, opacity: 0.4 }}
            transition={{ repeat: Infinity, repeatType: 'mirror', duration: 7.5 }}
            style={{
              width: 220,
              height: 220,
              borderRadius: 999,
              background: 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(124,58,237,0.25))',
              position: 'absolute',
              bottom: 0,
              right: 80,
              filter: 'blur(18px)',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
