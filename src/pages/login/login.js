import { Button, Input, TextField } from '@mui/material'
import { styled } from '@emotion/styled'
import { Box, css } from '@mui/system'
import React from 'react'

const Login = () => {

  const box = css`
  background-colok : #E24321 ;
  `
  return (
    <div>

      <Box className={box}>

        <TextField label="Email" ></TextField>
        <TextField label="Password" type="password"></TextField>
        <Button variant="contained">login</Button>
      </Box>

    </div>
  )
}

export default Login
