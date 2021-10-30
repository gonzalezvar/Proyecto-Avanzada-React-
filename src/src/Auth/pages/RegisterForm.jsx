import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { blue } from '@material-ui/core/colors';
import { useStyles } from "./EstilosForm"
import axios from "axios"


export default function SignUp() {
    const classes = useStyles();
    const [post, setPost] = useState()
    const baseUrl = "http://localhost:3001/register";



    const [register, setRegister] = useState({
        email: "",
        password: "",
        nombre: "",
        apellido: "",
        rol: "",
        shop:"",
    })
    const checkForm = (e) => {
        (e.target.id === 'email') ? setRegister({ ...register, email: e.target.value }) :
        (e.target.id === 'password') ? setRegister({ ...register, password: e.target.value }) :
        (e.target.id === 'nombre') ? setRegister({ ...register, nombre: e.target.value }) :
        (e.target.id === 'apellido') ? setRegister({ ...register, apellido: e.target.value }) :
        (e.target.id==='shop')?setRegister({...register,shop:e.target.value}):setRegister({ ...register, rol: e.target.value })

    }
    function createPost() {
        axios
            .post(baseUrl, {
                email: register.email,
                password: register.password,
                nombre: register.nombre,
                apellido: register.apellido,
                rol: register.rol,
            })
            .then((response) => {
                setPost(response.data);
            });
    }
 ;
    const checkSeller = () => {
        if (register.rol == "Vendedor") {
            return (
                <Grid item xs={12} sm={6}>
                    <InputLabel id="simple-select" color="primary" className={classes.label}>
                        &nbsp;
                    </InputLabel>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="shop"
                        label="Nombre de la tienda"
                        type="text"
                        value={register.shop}
                        onChange={checkForm}
                        id="shop"
                        autoComplete="current-password"
                    />
                </Grid>)
        }
    }

    console.log()
    return (
        <div className="center">
            <Container className="form" component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={register.nombre}
                                    onChange={checkForm}
                                    id="nombre"
                                    label="Primer Nombre"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="apellido"
                                    label="Apellido"
                                    value={register.apellido}
                                    onChange={checkForm}
                                    name="lastName"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    type="email"
                                    value={register.email}
                                    onChange={checkForm}
                                    label="Correo Electronico"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    value={register.password}
                                    onChange={checkForm}
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} className={classes.input}>
                                <InputLabel id="simple-select" color="primary" className={classes.label}>
                                    Rol
                                </InputLabel>
                                <Select labelWidth="12" labelId="simple-select" id="rol" value={register.rol} onChange={checkForm} className="select">
                                    <MenuItem value={"rol"} variant="outlined" disabled>Selecciona tu ROL</MenuItem>
                                    <MenuItem value={"Vendedor"}>Vendedor</MenuItem>
                                    <MenuItem value={"Comprador"}>Comprador</MenuItem>
                                </Select>
                            </Grid>
                            {checkSeller()}
                        </Grid>
      
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={createPost}
                        >
                            registrarse
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Si tienes una cuenta? Inicia Seccion
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Container>
        </div>
    );
}