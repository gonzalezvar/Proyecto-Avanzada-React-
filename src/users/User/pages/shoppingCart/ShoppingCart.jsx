import { Grid, TableContainer, Input, Table, TableRow, TableCell, Box, TableHead, TableBody, TableFooter, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Sidebar from '../../../components/sideBar/SideBar'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../../../shared/FooterVista'
import { makeStyles } from '@material-ui/styles'

const styless = makeStyles({
    image: {
        maxWidth: 150,
        maxHeight: 150,
    },
    title: {
        fontSize: 22,
        marginRight: 70,
        textDecoration: "none",
        textUnderlineOffset: "none",
        color: "#252424"
    },
    input: {
        width: "20%",

    },
    centerItems: {
        marginRigth: "50",
        textDecoration: "none",

    }
})

const Cell = {
    paddingNone: "none"
}

export const ShoppingCart = () => {
    const classes = styless();
    const defaultProduct = [{"description":"prueba","idOwner":"","image":"","nameProduct":"","price":"","stock":"","id":""}]
    const dataProduct = JSON.parse(window.sessionStorage.getItem("selectedProducts")) || defaultProduct;
    const arrayObjectId = [];
    dataProduct.map((product,index)=>{
            arrayObjectId.push({index:index, cant:1});
    })
    const [cant, setCant] = useState([...arrayObjectId])
    
    const findValue = (index) => {
        let value = cant.find(elem => elem.index == index);
        return value;
    }

    let total=0;
    return (
        <Grid container style={{ height: "100vh", position: "relative" }}>
            <Sidebar
                info={JSON.parse(window.sessionStorage.getItem("data"))}
            />
            <Grid item style={{
                overflow: "auto",
                position: "relative",
                float: "right",
                maxHeight: "100%",
                width: "100%",
                overflowScrolling: "touch",
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
            }}>
                <Grid container spacing={1} style={{
                    display: "flex",
                    position: "relative",
                    flexWrap: "wrap",
                    width: "80%",
                    right: "-30%",
                    marginBottom: "20px",
                }}>
                    <Grid item>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow style={{ textAling: "center" }}>
                                        <TableCell variant="head">
                                            <h4 className={classes.title}>Libro</h4>
                                        </TableCell>
                                        <TableCell variant="head">
                                            <h4 className={classes.title}>Precio</h4>
                                        </TableCell>
                                        <TableCell variant="head">
                                            <h4 className={classes.title}>Cantidad</h4>
                                        </TableCell>
                                        <TableCell variant="head">
                                            <h4 className={classes.title}>Total</h4>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        (dataProduct) ?
                                            (dataProduct.length==1 && dataProduct[0].description == "prueba")?<h1>No han agregado productos</h1>:
                                            dataProduct.map((book,index) => {
                                                let price = book.price * findValue(index).cant;
                                                total = parseInt(price) + total;
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell variant="body" className={classes.centerItems}>
                                                            <Box >
                                                                <img className={classes.image} src={book.image} alt="" />
                                                            </Box>
                                                        </TableCell >
                                                        <TableCell variant="body" className={classes.centerItems}>
                                                            <Box >
                                                                <h3>$ {book.price}</h3>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell variant="body" className={classes.centerItems} >
                                                            <Box >
                                                                <Input value={findValue(index).cant}   onChange={(e)=>{setCant([...cant,findValue(index).cant=e.target.value])}} className={classes.input} type="number" />
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell variant="body" className={classes.centerItems}>
                                                            <Box >
                                                                <h3>Total: $ {price}</h3>
                                                            </Box>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                            : <h1>no agrego</h1>
                                    }
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell>
                                            <h3>Valor total a Pagar:</h3>
                                        </TableCell>
                                        <TableCell>
                                            <h3>{total}</h3>
                                        </TableCell>
                                        <TableCell>

                                        </TableCell>
                                        <TableCell >
                                            <Button variant="contained" style={{ backgroundColor: "#252424", color: "#BDACA7" }}>Pagar</Button>
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
