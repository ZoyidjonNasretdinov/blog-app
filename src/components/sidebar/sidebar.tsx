import { navItems , data} from '@/src/config/constants'
import { Box, Typography , Button, Divider, Avatar} from '@mui/material'
import { format } from "date-fns";
import React, { Fragment } from 'react'

const Siderbar = () => {
  return (
    <Box width={'30%'}>
      <Box position={'sticky'} top={'100px'} sx={{transition: 'all .3s liner'}}>
        <Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'}>
        <Typography variant="h5">Category</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column',  marginTop: '20px' }}>
          {navItems.map((nav) => (
            <Fragment key={nav.route}>
              <Button fullWidth sx={{justifyContent: 'flex-start', height: '50px'}}>
                {nav.label}
              </Button>
              <Divider />
            </Fragment>
          ))}
        </Box>
        </Box>
        <Box padding={'20px'} border={'1px solid gray'} borderRadius={'8px'} marginTop={'20px'}>
        <Typography variant="h5">Latest blog</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', marginTop: '20px'}}>
          {data.map(item => (
            <Box key={item.title} marginTop={'20px'}>
              <Box sx={{display:'flex', gap: '20px', alignItems:'center'}}>
                <img src={`${item.image}`} alt={`${item.title}`} width={100} height={100} style={{objectFit: 'cover', borderRadius: '8px'}}/>
                <Box sx={{display: 'flex', flexDirection: 'column', gap:'10px'}}>
                  <Typography variant='body1'>{item.title}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center"}}>
                    <Avatar alt={item.author.name} src={item.author.image} />
                      <Box sx={{ marginLeft: "10px" }}>
                        <Typography>{item.author.name}</Typography>
                        <Typography>
                          {format(new Date(), "dd MMM, yyyy")}
                        </Typography>
                      </Box>
                  </Box>
                </Box>
              </Box>
              <Divider sx={{marginTop: '20px'}} />
            </Box>
          ))}
        </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Siderbar