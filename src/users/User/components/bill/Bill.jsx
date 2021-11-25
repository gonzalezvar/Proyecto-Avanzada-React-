import React from 'react'
import './css/main.css';
import { Button } from '@material-ui/core';
import { Link as routerLink } from 'react-router-dom';
import printJS from 'print-js';

export const Bill = () => {
    const print = () => {
        printJS({
            printable: "body",
            type: "html",
            ignoreElements: ["footer", "note"],
            maxWidth: 700,
        })
    }

    const info = JSON.parse(window.sessionStorage.getItem("billData"));
    const productDetails = JSON.parse(info.productDetails)
    return (
        <div id="body">
            <div className="logoholder text-center">
                <img src="https://github.com/gonzalezvar/Imagenes/blob/main/5784102b-ad37-4074-a912-e57c7a6d5517.png?raw=true" />
            </div>
            <div className="me">
                <p>
                    <strong>PedaleandoPalabras</strong><br />
                    Medellín, Colombia<br />
                </p>
            </div>
            <div className="row section">
                <div className="col-2">
                    <h1>Factura</h1>
                </div>
                <div className="col-2 text-right details">
                    <p>
                        &nbsp;
                    </p>
                </div>
                <div className="col-2">
                    <p className="client">
                        <strong>Facturar a</strong><br />
                        {info.name} &nbsp;
                        {info.lastName}<br />
                        Fecha: {info.date?.split("T").shift()}<br />
                        Hora: {info.date?.split("T").pop()}
                    </p>
                </div>
            </div>
            <div className="row section" style={{ marginTop: "-1rem" }}>
                <div className="col-1">
                    <table style={{ "width": "100%" }}>
                        <thead>
                            <tr className="invoice_detail">
                                <th width="25%" >Facturado por</th>
                                <th width="25%">Id de factura</th>
                                <th width="30%">Términos y condiciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="invoice_detail">
                                <td width="25%" >PedaleandoPalabras Inc.</td>
                                <td width="25%">619276ae20ad269ef80c625e</td>
                                <td width="30%">Pago al contado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="invoicelist-body">
                <table>
                    <thead>
                        <th width="60%">Descripción</th>
                        <th width="10%">Cant.</th>
                        <th width="15%">Precio</th>
                        <th className="taxrelated">IVA</th>
                        <th width="10%">Total</th>
                    </thead>
                    <tbody>
                        {
                            productDetails.map((product) => {
                                return (
                                    <>
                                        <tr>
                                            <td width='60%'><span>{product.nameProduct}</span></td>
                                            <td className="amount"><input type="text" value="1" /></td>
                                            <td className="rate"><input type="text" value={product.price} /></td>
                                            <td className="tax taxrelated">0</td>
                                            <td className="sum">{product.price}</td>
                                        </tr>

                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="invoicelist-footer">
                <table>
                    <tr className="taxrelated">
                        <td>IVA:</td>
                        <td id="total_tax">0</td>
                    </tr>
                    <tr>
                        <td><strong>Total: </strong></td>
                        <td id="total_price">{info.fullPayment}</td>
                    </tr>
                </table>
            </div>
            <div className="note" id="note">
                <h2>Nota:</h2>
            </div>
            <footer className="row" id="footer">
                <div className="col-1 text-center" >
                    <Button component={routerLink} to="/CheckYourBills">Regresar</Button>
                    <Button onClick={print} >Imprimir</Button>
                </div>
            </footer>
        </div>
    )
}
