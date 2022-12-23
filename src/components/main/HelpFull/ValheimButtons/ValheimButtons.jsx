import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? '#b393d3'
            : '#b393d3',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ValheimButtons() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion className='ValheimButtons VButtons' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography >Как начать играть?</Typography>
                </AccordionSummary>
                <AccordionDetails className='AccordionDetails'>
                    <Typography>
                        Всё просто =)
                        <br />
                        1) Чтобы начать играть вам ндо скачать Моды данного сервера и вставить в корневую папку
                        <br />
                        2) Заходите в Steam
                        <br />
                        3) Правой кнопкой мыши кликаете на Valheim ( Если у вас не куплен то нужно приобрести)
                        <br />
                        4) Дальше нажимаете свойства
                        <br />
                        5) Локайльные файлы
                        <br />
                        6) Обзор
                        <br />
                        7) После скачивания модов ( в виде архива ) берете все файлы из данного архива ( не папку, а именно файлы их от 8 чтук)
                        <br />
                        8) Вставляете в эту папку которая идет после Обзор ( которая назвается Valheim)
                        <br />
                        <br />
                        У вас все получится =)
                    </Typography>
                </AccordionDetails>
            </Accordion >
            <Accordion className='ValheimButtons' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Как зайти на сервер?</Typography>
                </AccordionSummary>
                <AccordionDetails className='AccordionDetails'>
                    <Typography>
                        1) Заходите в Valheim
                        <br />
                        2) Присоедениться
                        <br />
                        3) Вставляете IP :86.110.212.173:2456
                        <br />
                        4) Пароль от сервера: 9921123
                        <br />
                        <br />
                        Приятной игры =)
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='ValheimButtons' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Какие моды установлены?</Typography>
                </AccordionSummary>
                <AccordionDetails className='AccordionDetails'>
                    <Typography>
                        Valheim Reworked Project – глобальная сборка модификаций, перерабатывающая почти все аспекты игры.
                        Сборка включает в себя 88 модов. Моды направленны на улучшение механик ванильной игры и добавление новых. Сборка протестирована на версии 0.206.5
                        <br />
                        <br />
                        <Button variant="info" href='https://steamcommunity.com/sharedfiles/filedetails/?id=2545134382'>Полная Информация</Button>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
