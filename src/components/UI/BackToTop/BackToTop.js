import {KeyboardArrowUp} from "@mui/icons-material";
import {Box, Fab, useScrollTrigger, Zoom} from "@mui/material";
import {useCallback} from "react";
import './BackToTop.css'

function BackToTop() {
    // Use `window` instead of `body` as `document` will be `undefined` when the
    // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
    const trigger = useScrollTrigger({
        // Number of pixels needed to scroll to toggle `trigger` to `true`.
        threshold: 100,
    })
    const scrollToTop = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
    return (
        <Zoom in={trigger}>
            <Box className={'scrollToTop'}
                role="presentation"
                // Place the button in the bottom right corner.
                sx={{
                    position: "fixed",
                    zIndex: 100,
                }}
            >
                <Fab
                    onClick={scrollToTop}
                    color="primary"
                    size="small"
                    aria-label="Scroll back to top"
                >
                    <KeyboardArrowUp fontSize="medium" />
                </Fab>
            </Box>
        </Zoom>
    )
}
export default BackToTop
