import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function GameDescription(props) {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <i class="bi bi-book-half">&ensp;</i>
                    <Typography>Описание игры</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.value}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}