import { Box, MenuItem, Select, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import theme2 from '../../theme2';
import { IUsersFilter } from '../../types/types';
import { ThemeProvider } from '@mui/material/styles';
import styles from './users.module.css'


interface IPropsUsersSearchForm {
    onFilterChanged: any
    filter: IUsersFilter
    f1: (e: any) => void
    debounced: any
}

const UsersSearchForm = (props: IPropsUsersSearchForm) => {


    const { register, formState: { errors } } = useForm();

    return (<ThemeProvider theme={theme2}>

        <form className={styles._form}>
            <TextField sx={{ width: '100%' }} 
            defaultValue={props.filter.term} 
            variant="filled" 
            label="Search..." 
            autoFocus {...register("term")} 
            onChange={props.debounced} />

            <Select defaultValue={String(props.filter.friend)} {...register("friend")} onChange={props.debounced}>

                <MenuItem value="null">All users</MenuItem>
                <MenuItem value="true">Followed</MenuItem>
                <MenuItem value="false">Unfollowed</MenuItem>
            </Select>

            {errors.example && <span>This field is required</span>}

        </form>

    </ThemeProvider >
    )
}

export default UsersSearchForm