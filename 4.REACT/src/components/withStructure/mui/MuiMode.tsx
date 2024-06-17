import { Typography, useTheme } from "@mui/material"

const MuiMode = () => {
    const theme = useTheme();
    return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>
}

export default MuiMode