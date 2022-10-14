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

//===============================|| SHADOW BOX ||===============================//

const ShadowBox = ({ shadow }) => {
    const theme = useTheme();
    return (
        <Card sx={{ mb: 3, boxShadow: shadow, textAlign: 'center' }}>
            <Typography>
                Full Name
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    py: 3,
                    bgcolor: theme.palette.primary.light,
                    color: theme.palette.grey[800]
                }}
            >
                <Typography>
                Marty Pabello
                </Typography>
                {/* <Box sx={{ color: 'inherit' }}>boxShadow: {shadow}</Box> */}
            </Box>
        </Card>
    );
};

ShadowBox.propTypes = {
    shadow: PropTypes.string.isRequired
};

//============================|| UTILITIES SHADOW ||============================//

const UtilitiesShadow = () => {
    return (
        <MainCard title="Evaluation">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard title="Employee Name">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <ShadowBox shadow="0" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <ShadowBox shadow="1" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <ShadowBox shadow="2" />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UtilitiesShadow;
