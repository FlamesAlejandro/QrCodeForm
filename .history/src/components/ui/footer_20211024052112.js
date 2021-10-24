import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

export const footer = () => {

    const footers = [
        {
          title: 'Company',
          description: ['Team', 'History', 'Contact us', 'Locations'],
        },
        {
          title: 'Features',
          description: [
            'Cool stuff',
            'Random feature',
            'Team feature',
            'Developer stuff',
            'Another one',
          ],
        },
        {
          title: 'Resources',
          description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
        },
        {
          title: 'Legal',
          description: ['Privacy policy', 'Terms of use'],
        },
      ];

    return (
        <>
            <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                    <Typography variant="h6" color="text.primary" gutterBottom>
                        {footer.title}
                    </Typography>
                    <ul>
                        {footer.description.map((item) => (
                        <li key={item}>
                            <Link href="#" variant="subtitle1" color="text.secondary">
                            {item}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </Grid>
                ))}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
        </>
    )
}
