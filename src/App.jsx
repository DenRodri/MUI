import React from 'react'
import { Typography, AppBar,Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, ThemeProvider } from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import Button from '@mui/material/Button';
import useStyles from './styles.jsx'
import { createTheme } from '@mui/material/styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function App() {
  const classes = createTheme(useStyles);

  return (
    <>
    <ThemeProvider theme={classes}>
    <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">
            Hello, World!
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hola todos esto es un album de fotos y estoy intentaod hacer de esta sentencia lo mas larga posible para que veamos como se ve en la pagina web
            </Typography>
          
          
       
          <div className={classes.button}>
          <Grid container spacing={2} sx={{justifyContent: "center"}}>
            <Grid item>
              <Button variant="contained" color="primary">
                Mira mis fotos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
               Accion secundaria
              </Button>
            </Grid>
          </Grid>
          </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                  />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5">
                    Heading
                  </Typography>
                  <Typography>
                    Esto es una carta de media. Puedes usar esta seccion para describir el contenido.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">Ver</Button>
                  <Button size="small" color="primary">Editar</Button>
                </CardActions>
              </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
            Algo aqui para darle un sentido al footer!
        </Typography>
      </footer>
    </ThemeProvider>
      
    </>
  )
}
