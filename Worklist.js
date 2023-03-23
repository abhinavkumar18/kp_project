import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form"
import TablePagination from '@mui/material/TablePagination';
const Worklist = () => {
    const [value, setValue] = React.useState(null);
    const [value1,setValue1]=React.useState(null);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#2196f3',
        color: 'white',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        border: '1px solid #777777',
        justify: 'flex-start',
        fontWeight: 'bold'
    }));
    function createData(sno, enid, lname, aeid, etype, rdate) {
        return { sno, enid, lname, aeid, etype, rdate };
    }
    const columns = [
        { id: '  SNo.', label: 'SNo.', minWidth: 20 },
        { id: 'Enrollment Id', label: 'Enrollment Id', minWidth: 100, align:'center'},
        { id: 'LoginName', label: 'LoginName', minWidth: 170, align: 'center' },
        { id: 'AadharEId', label: 'Aadhar ID/Enrollment Id', minWidth: 170, align: 'center' },
        { id: 'Employee Type', label: 'Employee Type', minWidth: 170, align: 'center' },
        { id: 'Registered Page', label: 'Registered Page', minWidth: 170, align: 'center' },

    ];
    const rows = [
        createData(1, 'EMP789029', '0658005', 'XXXXXXXXXXXX', 'Employee', '26/12/2019 19:40:11 PM'),
        createData(2, 'EMP789029', '0658005', 'XXXXXXXXXXXX', 'Employee', '26/12/2019 19:40:11 PM'),
       
    ];

    const validationSchema = yup.object().shape({
        fd: yup.string()
          .required('required'),
        td: yup.string()
          .required('required'),
        Name: yup.string()
          .required("Name required")
      });
    
      const { register,
        handleSubmit,
        formState: { errors } } = useForm({ resolver: yupResolver(validationSchema) });
    
      const onSubmit = (data) => {
        console.log({ data })
      };
 
        const [page, setPage] = React.useState(0);
       
        const [rowsPerPage, setRowsPerPage] = React.useState(5);
      
        const handleChangePage = (event, newPage) => {
            setPage(newPage);
          };
        
          const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          };
    
    return (
        <>
<form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{ mt: 2, ml: 2, backgroundColor: '#F5F5F5' }} spacing={4}>
                <CardContent>
                    <Grid container direction="row" rowSpacing={0} columnSpacing={2} justify="flex-end" alignItems="center">
                        <Grid item xs={16} sm={12} md={12} lg={12}>

                            <Grid container direction="row" rowSpacing={1} columnSpacing={1} justify="flex-end" alignItems="center">
                                <Grid item xs={12}>
                                    <Item>Employee Beneficiary Worklist</Item>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography sx={{ fontSize: 18, textAlign: 'center', backgroundColor: '#F5F5F5', color: 'black', border: '1px solid #777777' }} color="text.secondary" gutterBottom>
                                        Search
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={4} md={4} lg={4} >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="Enrollment: From Date"
                                            inputFormat="MM/DD/YYYY"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField name="fd" {...register("fd")}
                                            error={errors.fd ? true : false} size="small" fullWidth {...params} />}
                                        />
                                    </LocalizationProvider>
                                    {errors.fd?.message}
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4} >
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker
                                            label="To Date"
                                            inputFormat="MM/DD/YYYY"
                                            value={value1}
                                            
                                            onChange={(newValue1) => {
                                                setValue1(newValue1);
                                            }}
                                            renderInput={(params) => <TextField name="td" {...register("td")}
                                            error={errors.td ? true : false} size="small" fullWidth {...params} />}
                                        />
                                    </LocalizationProvider>
                                    {errors.td?.message}
                                </Grid>
                                <Grid item xs={12} sm={4} md={4} lg={4}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="Name"
                                        label="Name"
                                        name="Name" {...register("Name")}
                                        error={errors.Name ? true : false}
                                       
                                        autoComplete="Name"
                                        size="small"
                                    />
                                        {errors.Name?.message}
                                </Grid>
                               
                            </Grid>
                        </Grid>

                    </Grid>
                    <Stack direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}>
                        <Button type='submit' variant="contained" sx={{ m: 1, minWidth: 100 }} size="small">
                            Search
                        </Button>
                        <Button type='submit' variant="contained" sx={{ m: 1, minWidth: 100 }} size="small">
                            reset
                        </Button>
                    </Stack>
               
                </CardContent>
            </Card>
             </form>

            <br></br>
            <br></br>
            <Card sx={{ mt: 2, ml: 2, backgroundColor: '#F5F5F5' }}>
                <CardContent>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>

                                <TableRow sx={{ backgroundColor: '#2196f3' }}>
                                    {columns.map((column) => (
                                    
                                            <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }} sx={{ fontWeight: 'bold', color: 'white' }}>
                                                {column.label}
                                            </TableCell>
                                        
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">{row.sno}</TableCell>
                                        <TableCell align="center"><Link href="/ep">{row.enid}    </Link></TableCell>
                                        <TableCell align="center">{row.lname}</TableCell>
                                        <TableCell align="center">{row.aeid}</TableCell>
                                        <TableCell align="center">{row.etype}</TableCell>
                                        <TableCell align="center">{row.rdate}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
                </CardContent>
            </Card>
           
        </>
    )
}

export default Worklist
