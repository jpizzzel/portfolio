import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import styles from './waves.module.css';

const DynamicBackgroundComponent = () => {
  const bg = useColorModeValue('#caf0f8', '#023e8a');
  const waveColor = useColorModeValue('rgba(255, 255, 255, 0.5)', 'rgba(0, 0, 0, 0.5)');

  return (
    <Box position="relative" minH="100vh" bg={bg} overflow="hidden">
      <Box className={styles.waveContainer}>
        <Box className={styles.wave} style={{ backgroundColor: waveColor, animationDelay: '0s' }} />
        <Box className={styles.wave} style={{ backgroundColor: waveColor, animationDelay: '5s' }} />
      </Box>
      {/* Other content */}
    </Box>
  );
}

export default DynamicBackgroundComponent;

