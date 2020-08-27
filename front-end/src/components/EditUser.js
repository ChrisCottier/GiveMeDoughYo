import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Redirect} from 'react-router-dom'

import {TextAreaInput, TextInput, FileInput} from './sub-components/Form-Inputs'
import { getProfileInfo } from '../actions/users'


const EditUser = () => {
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [city, setCity] = useState('')
    const [stateProvince, setStateProvince] = useState('')
    const [country, setCountry] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [aboutMe, setAboutMe] = useState('')
    const [profilePic, setProfilePic] = useState([])
    const {userId, token} = useSelector(state => state.auth);
    const {user} = useSelector(state=> state.users)
    const dispatch= useDispatch()
    console.log(userId, token)


    useEffect(()=>{
        if (!token){
           console.log('no token')
           return;
        }
        if (user) {
            if (user.id === userId) {
                console.log('match auth and user')
                return;
            }
        }
        dispatch(getProfileInfo(userId, token))
    })

    const handleSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();

        const user = {
            firstName,
            lastName,
            city,
            stateProvince,
            country,
            shortDescription,
            aboutMe,
            profilePic
        }
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "firstName": {
              setFirstName(event.target.value);
              return;
            }
            case "lastName": {
                setLastName(event.target.value);
                return;
            }
            case "city": {
                setCity(event.target.value);
                return;
            }
            case "stateProvince": {
                setStateProvince(event.target.value);
                return;
            }
            case "country": {
                setCountry(event.target.value);
                return;
            }
            case "shortDescription": {
                setShortDescription(event.target.value);
                return;
            }
            case "aboutMe": {
                setAboutMe(event.target.value);
                return;
            }
            case "profilePic": {
                setProfilePic(event.target.value);
                return;
            }
            case "city": {
                setCity(event.target.value);
                return;
            }

        }
    }
    //Guards
    if (!user) {
        return null;
    }
    if (!token) {
        console.log('redir')
        return <Redirect to="/"></Redirect>
    }
    if(firstName === null) {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setCity(user.city)
        setStateProvince(user.stateProvince)
        setCountry(user.country)
        setShortDescription(user.shortDescription)
        setAboutMe(user.aboutMe)
    }

    //Form
    return (
        <main>
            <div className="edit-user-container container is-widescreen">
                <h1 className="title is-1">Edit Profile</h1>
                <form onSubmit={handleSubmit}>
                    <TextInput
                    label="First Name"
                    name="firstName"
                    placeHolder="First Name"
                    value={firstName}
                    handleChange={handleChange}
                    require={true}
                    ></TextInput>
                    <TextInput
                    label="Last Name"
                    name="lastName"
                    placeHolder="Last Name"
                    value={lastName}
                    handleChange={handleChange}
                    require={true}
                    ></TextInput>
                    <TextInput
                    label="City"
                    name="city"
                    placeHolder="City"
                    value={city}
                    handleChange={handleChange}
                    require={true}
                    ></TextInput>
                    <TextInput
                    label="State or Province"
                    name="stateProvince"
                    placeHolder="State or Province"
                    value={stateProvince}
                    handleChange={handleChange}
                    require={false}
                    ></TextInput>
                    <TextInput
                    label="Country"
                    name="country"
                    placeHolder="Country"
                    value={country}
                    handleChange={handleChange}
                    require={false}
                    ></TextInput>
                    <TextInput
                    label="Short Description"
                    name="shortDescription"
                    placeHolder="Short Description"
                    value={shortDescription}
                    handleChange={handleChange}
                    require={false}
                    ></TextInput>
                    <TextAreaInput
                    label="About Me"
                    placeHolder="About Me"
                    name="aboutMe"
                    value={aboutMe}
                    handleChange={handleChange}
                    require={false}
                    ></TextAreaInput>
                    <FileInput
                    label="New Profile Picture"
                    name="profilePic"
                    value={profilePic}
                    handleChange={handleChange}
                    require={false}
                    ></FileInput>
                    <button className="button is-primary" type="submit">
                    Edit Profile
                    </button>
                </form>
            </div>
        </main>
    )
}


// firstName, lastName, city, stateProvince, country,
// shortDescription, aboutMe, profilePic
export default EditUser;
