import { Grid, TableContainer, Input, Table, TableRow, TableCell, Box, TableHead, TableBody, TableFooter, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Sidebar from '../../../components/sideBar/SideBar'
import { makeStyles } from '@material-ui/styles'
import { Link as routerLink } from 'react-router-dom'
import axios from 'axios';
import BaseUrl from '../../../../shared/BaseUrl'

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


export const CheckBills = () => {
    const classes = styless();
    const [billInfo, setbillInfo] = useState(null);

    const consultingBill = async () => {
        const userInfo = JSON.parse(window.sessionStorage.getItem("data"));
        try {
            const resp = await axios.post(BaseUrl+"/checkBills", { id: userInfo.id });
            setbillInfo(resp.data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        consultingBill();
    }, [])

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
                                            <h4 className={classes.title}>Fecha</h4>
                                        </TableCell>
                                        <TableCell variant="head">
                                            <h4 className={classes.title}></h4>
                                        </TableCell>
                                        <TableCell variant="head">
                                            <h4 className={classes.title}>Precio Total</h4>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(billInfo !== null) ?
                                        billInfo.map((bill) => {
                                            return (
                                                <>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Box>
                                                                {bill.date}
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Box>
                                                                $ {bill.fullPayment}
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell>
                                                        <Button variant="contained" component={routerLink} to="/Bill" style={{ backgroundColor: "#252424", color: "#BDACA7" }} onClick={()=>{
                                                            let data = {
                                                                name:bill.name,
                                                                lastName:bill.lastName,
                                                                shop:bill.shop,
                                                                date:bill.date,
                                                                fullPayment:bill.fullPayment,
                                                                productDetails:bill.productDetails
                                                            }
                                                            window.sessionStorage.setItem("billData",JSON.stringify(data))
                                                        }} >Ver Factura</Button>
                                                        </TableCell>
                                                    </TableRow>
                                                </>
                                            )
                                        })
                                        : <h1>No tienes compras registradas</h1>
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
