import React,{useState,useEffect} from 'react'
import NavBar from "../../components/navBar/NavBar"
import Footer from "../../../../shared/FooterVista";
import Sidebar from '../../../components/sideBar/SideBar';
import { Grid } from '@mui/material';
import { CardComponent } from '../../components/card/CardComponent';

export const HomeUser = ({dataPost}) => {
  const [data, setData] = useState([{}])
  const info = async () => {
    const url = await fetch("http://localhost:3001/searchProduct");
    const informacion = await url.json();
    setData(informacion)
  }
  useEffect(() => {
    info();
  }, [])



  return (

    <Grid container style={{ height: "100vh", position: "relative" }}>
      <Sidebar />  
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
        <NavBar
        filterDataNav={setData} />
        <Grid container spacing={1} style={{
          display: "flex",
          position: "relative",
          flexWrap: "wrap",
          width: "80%",
          right: "-20%",
          marginBottom: "20px",
        }}>
          {
            (data.length < 1) ?
              <h1>Cargando..</h1> :
              data.map((info, index) => {
                
                return (
                  <Grid item>
                  <CardComponent
                    key={index}
                    name={info.nameProduct}
                    description={info.description}
                    discount = {info.price}
                    image={info.image}
                    value={info.price}
                  />
                  </Grid>
                ) 
              }
              )
          }
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  )
}
