import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'; // LOGO BURADA

const links = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/haberler', label: 'Haberler' },
  { to: '/duyurular', label: 'Duyurular' },
  { to: '/etkinlikler', label: 'Etkinlikler' },
  { to: '/kurullar', label: 'Kurullar' },
  { to: '/iletisim', label: 'İletişim' },
  { to: '/hakkimizda', label: 'Hakkımızda' }
];

export default function TopBar() {
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const { pathname } = useLocation();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ gap: 2 }}>
        
        {/* Logo ve Başlık */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={logo}
            alt="SOF Logo"
            style={{ height: 40, marginRight: 12 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            Sokak Oyunları Federasyonu
          </Typography>
        </Box>

        {/* Desktop menü */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {links.map((l) => (
            <Button
              key={l.to}
              component={RouterLink}
              to={l.to}
              variant={pathname === l.to ? 'contained' : 'text'}
              color="inherit"
              sx={{ borderRadius: 999 }}
            >
              {l.label}
            </Button>
          ))}
        </Box>

        {/* Mobile menü */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton color="inherit" onClick={(e) => setAnchor(e.currentTarget)}>
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchor} open={open} onClose={() => setAnchor(null)}>
            {links.map((l) => (
              <MenuItem
                key={l.to}
                component={RouterLink}
                to={l.to}
                onClick={() => setAnchor(null)}
                selected={pathname === l.to}
              >
                {l.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
