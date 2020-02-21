import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export default function AddressForm() {
    const useStyles = makeStyles(theme => ({
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }));
    const classes = useStyles();
    const [Estado, setEstado] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setEstado(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    return (
        <Container maxWidth="sm">
            <React.Fragment>

                <Typography variant="h6" gutterBottom>
                    New task
      </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="descripcion"
                            name="descripcion"
                            label="descripcion"
                            fullWidth
                            autoComplete="fname"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="responsable"
                            name="responsable"
                            label="responsable"
                            fullWidth
                            autoComplete="lname"
                        />
                    </Grid>
                    <Grid>
                        <InputLabel id="demo-controlled-open-select-label">Estado</InputLabel>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={Estado}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>ready</MenuItem>
                            <MenuItem value={20}>InProgress</MenuItem>
                            <MenuItem value={30}>Done</MenuItem>
                        </Select>
                    </Grid>
                    <Grid>
                        <TextField
                            id="date"
                            label="Fecha"
                            type="date"
                            defaultValue="2017-05-24"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                </Grid>

            </React.Fragment>
        </Container>

    );
}
