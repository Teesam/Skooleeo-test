import React from 'react';
import './home.css';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

const Home = () => {

    const [address] = React.useState([{
        country: 'Nigeria',
        adress: '33a, Adeola Odeku, Victoria Island Lagos',
        phone: '+234-(0)-8000000000'
    }, {
        country: 'Ghana',
        adress: '45, El senoussi street, Accra',
        phone: '+233-(0)-27619819'
    }, {
        country: 'South Africa',
        adress: '474, port Cheriton drive, Shepstone Kwazulu-Natal',
        phone: '+27-(0)-857926978'
    }, {
        country: 'Eqypt',
        adress: '72, Gameat El-Dewal, El-Arabia st. Giza.',
        phone: '+20-(0)-35924295'
    }, {
        country: 'Kenya',
        adress: '41, Enterprise road, Industrial area, Nairobi',
        phone: '+254-(0)-20536766'
    }, {
        country: 'Tunisia',
        adress: '13, Rue de Makthar, Dhroa Governorate Kasserine.',
        phone: '+216-(0)-77367410'
    }, {
        country: 'Mali',
        adress: '22, Badalabougou Est. Bamako.',
        phone: '+223-(0)-78175387'
    }, {
        country: 'Tanzania',
        adress: 'Mbezi Beach, P.O.B: 70339, Dar Saloam.',
        phone: '+255-(0)-222120119'
    }, {
        country: 'Togo',
        adress: '10, E rue des Echis, Lome.',
        phone: '+228-(0)-22229600'
    }])

    console.log(address.country)
    

    return (
        <div className = 'Home'>

            <Nav />

            <div id = 'sect-1'>
                <div id = 'form-holder'>
                    <form>
                        <div id = 'form-div'>
                            <div id = 'name-holder'>
                                <div className = 'Input-holder'>
                                    <label for = 'first name'> First name</label>
                                    <input id = 'small-input' name = 'first name' type = 'text' />
                                </div>
                                <div className = 'Input-holder'>
                                    <label id = 'label-2' for = 'last name'>Last name</label>
                                    <input id = 'small-input-2' name = 'last name' type = 'text' />
                                </div>
                            </div>
                            <div className = 'Input-holder'>
                                <label for = 'Email'>Work Email</label>
                                <input className = 'Input' name = 'Email' type = 'text' />
                            </div>
                            <div className = 'Input-holder'>
                                <label for = 'number'>Phone Number</label>
                                <input className = 'Input' name = 'number' type = 'text' />
                            </div> 
                            <div id = 'name-holder'>
                                <div className = 'Input-holder'>
                                    <label for = 'first name'> Company name</label>
                                    <input id = 'small-input' name = 'first name' type = 'text' />
                                </div>
                                <div className = 'Input-holder'>
                                    <label id = 'label-2' for = 'last name'>Company size</label>
                                    <input placeholder = 'select an option' id = 'small-input-2' name = 'last name' type = 'text' />
                                </div>
                            </div>
                            <div className = 'Input-holder'>
                                <label for = 'number'>Phone Number</label>
                                <textarea cols = '10' className = 'Input' name = 'number' type = 'text' />
                            </div> 

                            <button id = 'contact-submit'>Contact Us</button>

                        </div>
                    </form>
                </div>
                <div id = 'text-holder'>
                    <div id = 'text-holder-div'>
                        <h3>Request a call from an expert</h3>
                        <p>Having thoughts on what projects work best
                         for you? Fill the form and our expert will 
                         reach out to you.</p>

                         <h3>Our offices around africa</h3>
                         <div id = 'address-holder'>

                            {address.map((address => {
                                return <div className = 'address'>
                                    <h5>{address.country}</h5>
                                    <p>{address.adress}</p>
                                    <p>{address.phone}</p>
                                </div>
                                
                            }))}
                         </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Home;