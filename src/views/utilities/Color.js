import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { useTheme } from '@material-ui/styles';
import { Box, Card, Grid, Typography } from '@material-ui/core';

// project imports
import SubCard from './../../ui-component/cards/SubCard';
import MainCard from './../../ui-component/cards/MainCard';
import SecondaryAction from './../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from './../../store/constant';

import AnimateButton from '../../ui-component/extended/AnimateButton';


//===============================|| COLOR BOX ||===============================//

const ColorBox = ({ bgcolor, title, data, dark }) => {
    const theme = useTheme();
    return (
        <React.Fragment>
            <Card sx={{ mb: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        py: 4.5,
                        bgcolor: bgcolor,
                        color: dark ? theme.palette.grey[800] : '#ffffff'
                    }}
                >
                    {title && (
                        <Typography variant="subtitle1" color="inherit">
                            {title}
                        </Typography>
                    )}
                    {!title && <Box sx={{ p: 1.15 }}></Box>}
                </Box>
            </Card>
            {data && (
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="subtitle2">{data.label}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
                            {data.color}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </React.Fragment>
    );
};

ColorBox.propTypes = {
    bgcolor: PropTypes.string,
    title: PropTypes.string,
    data: PropTypes.object.isRequired,
    dark: PropTypes.bool
};

//===============================|| UI COLOR ||===============================//

const UIColor = () => {
    const theme = useTheme();

    return (
        <MainCard title="Time Record" secondary={<SecondaryAction link="https://next.material-ui.com/system/palette/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard title="October 14, 2022">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <ColorBox
                                    bgcolor={theme.palette.primary.light}
                                    data={{ label: '9:00AM', title:"Time in" }}
                                    title="Time In"
                                    dark
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={2}>
                                <ColorBox
                                    bgcolor={theme.palette.primary[200]}
                                    data={{ label: '5:00PM' }}
                                    title="Time Out"
                                    dark
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                </Grid>
        </MainCard>
    );
};

export default UIColor;
