import React, { useState, useEffect } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Grid, FormControl, Input, InputLabel } from '@material-ui/core';
import { CardComponent } from '../../../User/components/card/CardComponent';
import axios from 'axios';
import Swal from 'sweetalert2';

const successAdd = () => {
Swal.fire({
    icon: 'success',
    title: 'Producto agregado',
    position: 'top',
})
}


const wrong = () => {
Swal.fire({
    icon: 'error',
    title: 'Error, por revisar los campos',
    position: 'top',
})
}

const useStyles = makeStyles(({
root: {
    marginTop: "50px",
    width: "250px",
    padding: "0px",
    margin: "0px",
    background: '#afbac08f',
    maxHeight: "380px",
    height: "400px"
},
cardBottom: {
    paddingTop: "45%",
    display: "flex",
    justifyContent: "center",
},
btn: {
    padding: "0px",
    fontSize: "50px",
    color: "red",
},
}))

const style = {
position: 'relative',
top: '10%',
left: '30%',
width: 544,
height: 444,
bgcolor: 'background.paper',
backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: 'rgba(0,0,30,0.4)'
},
boxShadow: 24,
borderRadius: "20px",
p: 4,
display: "flex",
};

const card = {
position: 'absolute',
top: '-3%',
left: '50%',
}


const CardAddComponent = ({ id, cardData,products }) => {
const [data, setdata] = React.useState({
    nameProduct: "",
    description: "",
    price: "",
    discount: "",
    image: "",
    stock: "",
    idOwner: id,
})

const setProduct = async () => {
    try {
        const resp = await axios.post("http://localhost:3001/insertProducts", data);
        console.log(resp.data);
    } catch (e) {
        console.log(e);
    }
}


const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [content, setContent] = useState(false)
useEffect(() => {
    products();
    setContent(false);
}, [content])

const groupFunction = () => {
    setProduct();
    setContent(true);
    setOpen(false);
    successAdd();
}

const classes = useStyles();
return (
    <>
        <div>
            <Card className={classes.root}>
                <CardHeader
                    className={classes.header}
                />
                <CardActions className={classes.cardBottom}>
                    <IconButton aria-label="add to favorites" size="small">
                        <AddCircleIcon className={classes.btn} onClick={handleOpen} />
                    </IconButton>
                </CardActions>
            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box style={{ width: "50%" }}>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Nombre del Producto</InputLabel>
                            <Input id="nameProduct" value={data.nameProduct} onChange={(e) => setdata({ ...data, nameProduct: e.target.value })} aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Descripción</InputLabel>
                            <Input id="description" value={data.description} onChange={(e) => setdata({ ...data, description: e.target.value })} aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input"> url de la imagen</InputLabel>
                            <Input id="image" value={data.image} onChange={(e) => setdata({ ...data, image: e.target.value })} aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">stock</InputLabel>
                            <Input id="stock" type="number" value={data.stock} onChange={(e) => setdata({ ...data, stock: parseInt(e.target.value) })} aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Precio</InputLabel>
                            <Input id="price" type="number" value={data.price} onChange={(e) => setdata({ ...data, price: parseInt(e.target.value) })} aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Descuento</InputLabel>
                            <Input id="my-input" value={data.discount} onChange={(e) => setdata({ ...data, discount: e.target.value })} aria-describedby="my-helper-text" />
                        </FormControl>
                        <FormControl>
                            <Button variant='contained' size='large' onClick={() => { groupFunction() }} style={{ width: "100px", marginTop: "40px", marginLeft: "35%", borderRadius: "5px", height: "50px" }}>Agregar</Button>
                        </FormControl>
                    </Box>

                    <Box sx={card}>
                        <CardComponent
                            name={data.nameProduct}
                            description={data.description}
                            price={data.price}
                            discount={data.discount}
                            image={data.image}
                        />
                    </Box>
                </Box>
            </Modal>
        </div>
    </>

)
}

export { CardAddComponent };
