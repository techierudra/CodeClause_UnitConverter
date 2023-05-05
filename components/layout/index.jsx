import { useState } from 'react'
import { useRouter } from 'next/router'

import { useTheme } from '@mui/material/styles'
import { Box, CssBaseline, Container } from '@mui/material'

const drawerWidth = 240

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
})


const Layout = ({ children }) => {
    const router = useRouter()
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    const handleDrawerOpen = () => {
        setOpen((prev) => !prev)
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                paddingTop: '65px',
                paddingLeft: {
                    xs: '57px',
                    sm: '65px',
                    md: open ? '240px' : '65px',
                },
            }}>
            <CssBaseline />
            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                }}>
                <Container
                    sx={{
                        minHeight: 'calc(100vh - 65px)',
                        marginInline: 0,
                        padding: {
                            xs: 3,
                            sm: 4,
                            md: 5,
                        },
                    }}>
                    <>{children}</>
                </Container>
            </Box>
        </Box>
    )
}

export default Layout
