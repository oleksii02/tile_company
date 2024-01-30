import React, {useEffect, useState} from 'react';
import {Button, FormControl, InputLabel, TextField} from "@mui/material";
import {MuiTelInput} from 'mui-tel-input'
import {sendMessage} from "../../../api/bookSchedule.ts";
import {SnackbarProvider, enqueueSnackbar} from 'notistack';


import './ContactUs.css'


function ContactUs() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')


    const [nameDirty, setNameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [phoneDirty, setPhoneDirty] = useState(false)
    const [addressDirty, setAddressDirty] = useState(false)
    const [commentDirty, setCommentDirty] = useState(false)


    const [nameError, setNameError] = useState('Name cannot be empty')
    const [emailError, setEmailError] = useState('Email cannot be empty')
    const [phoneError, setPhoneError] = useState('Phone cannot be empty')
    const [addressError, setAddressError] = useState('Address cannot be empty')
    const [commentError, setCommentError] = useState('Comment cannot be empty')

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (nameError || phoneError || emailError || addressError || commentError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError, phoneError, addressError, commentError])

    const blurHandler = (e) => {
        console.log(e.target.name, 'switch')

        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'email' :
                setEmailDirty(true)
                break
            case 'phone':
                setPhoneDirty(true)
                break
            case 'address' :
                setAddressDirty(true)
                break
            case 'comment':
                setCommentDirty(true)
                break
            default:
            // do nothing
        }

    }

    const nameHandler = (e) => {
        setName(e.target.value)
        if (!e.target.value) {
            setNameError('Name cannot be empty')
        } else {
            setNameError('')
        }

    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (!e.target.value) {
            setEmailError('Email cannot be empty')
        } else {
            setEmailError('')

        }
    }

    const phoneHandler = (e) => {
        setPhone(e)
        if (e.length < 13) {
            setPhoneError('Phone is incorrect')
        } else {
            setPhoneError('')
        }

    };
    const addressHandler = (e) => {
        setAddress(e.target.value)
        if (!e.target.value) {
            setAddressError('Address cannot be empty')
        } else {
            setAddressError('')
        }

    }
    const commentHandler = (e) => {
        setComment(e.target.value)
        if (!e.target.value) {
            setCommentError('Comment cannot be empty')
        } else {
            setCommentError('')
        }

    }

    const handleSubmit = async () => {
        const message =
            `New order!!!${'%0A'}Name: ${name}${'%0A'}Email: ${email}${'%0A'}Phone: ${phone}${'%0A'}Address: ${address}${'%0A'}Comment: ${comment}`

        await sendMessage(message)
        enqueueSnackbar('The message was successfully sent!!', {variant: 'success'});
        setName('');
        setPhone('');
        setEmail('')
        setAddress('')
        setComment('')

        setFormValid(false);


    };

    return (
        <SnackbarProvider maxSnack={3}>
            <main className={'contact-us'}>
                <h2>CONTACT US</h2>
                <div className={'line'}/>
                <h3>If you have any questions about Tile Company Ceramic & Granite, please fill out the form below and
                    we
                    will reach out to you promptly.</h3>
                <FormControl
                    className={'width60ch'}

                >
                    <InputLabel shrink htmlFor="bootstrap-input" size='medium'>
                        {[(nameError && nameDirty) ? <h4 className={' form_name Error'}>{nameError}</h4> :
                            <h4 className={'form_name'}>Name</h4>]}
                    </InputLabel>
                    <TextField
                        multiline
                        id="outlined-textarea"
                        placeholder="Ivan Humeniak"
                        name='name'
                        value={name}
                        type="text"
                        onChange={e => nameHandler(e)}
                        onBlur={e => blurHandler(e)}
                    >
                    </TextField>
                </FormControl>
                <FormControl
                    className={'width60ch'}>
                    <InputLabel shrink htmlFor="bootstrap-input">
                        {[(emailError && emailDirty) ? <h4 className={'form_name Error'}>{emailError}</h4> :
                            <h4 className={'form_name'}>Email</h4>]}
                    </InputLabel>
                    <TextField
                        id="outlined-select-currency"
                        placeholder="gumenakvana1@gmail.com"
                        name='email'
                        type="email"
                        value={email}
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)}
                    >
                    </TextField>

                </FormControl>
                <FormControl
                    className={'width60ch'}
                >
                    <InputLabel shrink htmlFor="bootstrap-input">
                        {[(phoneError && phoneDirty) ? <h4 className={' form_name Error'}>{phoneError}</h4> :
                            <h4 className={'form_name'}>Phone</h4>]}
                    </InputLabel>
                    <MuiTelInput
                        name={'phone'}
                        defaultCountry="US"
                        onChange={e => phoneHandler(e)}
                        onBlur={e => blurHandler(e)}
                        value={phone}
                        inputProps={{maxLength: 20}}
                    />


                </FormControl>
                <FormControl
                    className={'width60ch'}>
                    <InputLabel shrink htmlFor="bootstrap-input">
                        {[(addressError && addressDirty) ? <h4 className={' form_name Error'}>{addressError}</h4> :
                            <h4 className={'form_name'}>Address</h4>]}
                    </InputLabel>
                    <TextField
                        id="outlined-select-currency"
                        placeholder="5024 Delphia Ave Chicago,IL 60656"
                        name={'address'}
                        value={address}
                        onChange={e => addressHandler(e)}
                        onBlur={e => blurHandler(e)}
                    >

                    </TextField>

                </FormControl>
                <FormControl
                    className={'width60ch'}
                >
                    <InputLabel shrink htmlFor="bootstrap-input">
                        {[(commentError && commentDirty) ?
                            <h4 className={'form_name Error'}>{commentError}</h4> :
                            <h4 className={'form_name'}>Comment</h4>]}
                    </InputLabel>
                    <TextField
                        id="outlined-select-currency"
                        multiline
                        type="comment"
                        rows={4}
                        value={comment}
                        placeholder="Comment"
                        name={'comment'}
                        onChange={e => commentHandler(e)}
                        onBlur={e => blurHandler(e)}

                    >
                    </TextField>

                </FormControl>
                <Button
                    className={'button'}
                    variant="contained"
                    sx={{p: 2, width: '300px', margin: '0 auto'}}
                    onClick={handleSubmit}
                    disabled={!formValid}
                >
                    Submit
                </Button>
            </main>
        </SnackbarProvider>
    );
}

export default ContactUs;
