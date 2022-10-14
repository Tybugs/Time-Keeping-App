import React from 'react';
// material-ui
import { Grid, Avatar } from '@material-ui/core';
import MuiTypography from '@material-ui/core/Typography';

// project imports
import SubCard from './../../ui-component/cards/SubCard';
import MainCard from './../../ui-component/cards/MainCard';
import SecondaryAction from './../../ui-component/cards/CardSecondaryAction';
import { gridSpacing } from './../../store/constant';


//logo
import User1 from "../../assets/images/users/user-round.svg"



// assets
import { IconSettings} from '@tabler/icons';

// constant
const icons = {
    IconSettings: IconSettings
};

//==============================|| TYPOGRAPHY ||==============================//

const Typography = () => {
    return (
        <MainCard title="Personal Information" secondary={<IconSettings />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={4}>
                    <SubCard>
                        <Avatar
                            src={User1}
                            gutterBottom
                            sx={{ height: '100px', width: '100px', justifyContent: 'center' }}
                        />
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                            {/* //employee-id */}
                                <MuiTypography variant="h5" gutterBottom>
                                 420230 
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                    Software Developer
                                </MuiTypography>
                            </Grid>
                            
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                <SubCard>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <MuiTypography variant="h4" gutterBottom>
                                    Marty Gee R. Pabello
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h4" gutterBottom>
                                    +639531294989
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                    North Hill Arbours Tacloban City, Leyte
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                    martygee.webdev@gmail.com
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                    Bachelor of Science in Information Technology
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                AAA-GG-SSSS
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                    4253577234521
                                </MuiTypography>
                            </Grid>
                            <Grid item>
                                <MuiTypography variant="h5" gutterBottom>
                                    6412312-423-124
                                </MuiTypography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Typography;
