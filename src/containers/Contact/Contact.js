import React from 'react'
import classes from './Contact.module.css'
import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

function Contact() {
    const position = [29.899885, -95.412296]

    var myIcon = L.icon({
        iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
        iconSize: [20, 36],
        iconAnchor: [8, 41],
        popupAnchor: [3, -40]
    });



    return (
        <div id='contact' className={classes.contactDiv}>
            <div className={classes.innerContactDiv}>
                <div className={classes.secondInnerContactDiv}>
                    <div className={classes.thirdContactDiv}>
                        <div className={classes.fourthContactDiv}>
                            <h3>Request an Estimate</h3>
                            <hr />
                            <form className={classes.contactForm}>
                                <input className={classes.input} type='text' id='name' placeholder='Your Name' />
                                <input className={classes.input} type='email' id='email' placeholder='Your Email'/>
                                <input className={classes.input} type='text' id='number' placeholder='Your Phone Number' />
                                <textarea className={classes.input} placeholder='Let us know what you are interested in...'></textarea>
                                <input className={classes.contactSubmitBtn} type='submit' value='Send'/>
                            </form>
                        </div>
                    </div>
                    <div className={classes.mapInfoDiv}>
                        <div id='mapid' className={classes.mapDiv}>
                            <Map className={classes.map} center={position} zoom={10}>
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position} icon={myIcon}>
                                    <Popup>
                                        Get Directions <a rel="noopener noreferrer" target="_blank" href='https://www.google.com/maps/place/9810+A+North+Fwy,+Houston,+TX+77037/@29.9063944,-95.4138976,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c834575b6435:0x927d9bfbf1ef2264!8m2!3d29.9063898!4d-95.4117089'>here</a>.
                                    </Popup>
                                </Marker>
                            </Map>
                        </div>
                        <div className={classes.infoDiv}>
                            <div className={classes.info}>
                                <h4>Reach Us</h4>
                                <h5><u>Location</u></h5>
                                    <ul>
                                        <li><a rel="noopener noreferrer" target="_blank" href='https://www.google.com/maps/place/9810+A+North+Fwy,+Houston,+TX+77037/@29.9063944,-95.4138976,17z/data=!3m1!4b1!4m5!3m4!1s0x8640c834575b6435:0x927d9bfbf1ef2264!8m2!3d29.9063898!4d-95.4117089'>9810 North A Freeway, Houston, TX 77037</a></li>
                                    </ul>
                                <h5><u>Phone</u></h5>
                                    <ul>
                                        <li>(281)-448-7000</li>
                                    </ul>
                                <h5><u>Hours</u></h5>
                                    <ul>
                                        <li>MON-FRI  9:00AM-7:00PM</li>
                                        <li>SAT 9:00AM-6:00PM</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact