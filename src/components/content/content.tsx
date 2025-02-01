import { Avatar, Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { data } from '@/src/config/constants';
import Image from 'next/image';
import { format } from 'date-fns';

const Content = () => {
  return (
    <Box width={{xs : '100%', md: '70%' }}>
      {data.map(item => (
        <Box 
          key={item.title}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, .5)',
            padding: '20px',
            marginTop: '20px',
            borderRadius: '8px',
            boxShadow: '0px 8px 16px rgba(255, 255, 255, 0.1)'
          }}
        >
          <Box position={'relative'} width={'100%'} height={'50vh'}>
            <Image src={item.image} alt={item.title} fill style={{objectFit: 'cover', borderRadius: '10px'}}/>
          </Box>
          <Box marginTop={'30px'}>
            <Box marginBottom={'20px'}>
              <Typography variant='h3'>{item.title}</Typography>
              <Typography variant='body1' color={'gray'}>{item.exerpt}</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
                <Avatar alt={item.author.name} src={item.author.image} />
                <Box sx={{ marginLeft: "10px" }}>
                  <Typography>{item.author.name}</Typography>
                  <Typography>
                    {format(new Date(), "dd MMM, yyyy")} • 10min read
                  </Typography>
                </Box>
              </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content