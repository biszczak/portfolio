import React from 'react';

// import { Link } from 'gatsby';
import Button from '../../../../components/Button/Button';


import { ContactSection } from './Contact.css';

const Contact = () => {
    return (
        <ContactSection>
            <h2>Kontakt</h2>
            <div className="wrapper">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore est aliquid temporibus perspiciatis vitae voluptatum, at ad facere quo officiis blanditiis minus accusamus architecto voluptatibus ipsa vero, nisi iste nemo.</p>
                <form method="post" action="#">
                    <input type="text" name="name" id="name" placeholder="Wpisz swoje imię i nazwisko" />
                    <input type="email" name="email" id="email" placeholder="Podaj e-mail" />
                    <input type="text" name="subject" id="subject" placeholder="Temat" />
                    <textarea name="message" id="message" rows="5" placeholder="Wiadomość" />
                    <div>
                        <Button type="submit">Wyślij</Button>
                        <input className="clear" type="reset" value="Wyczyść formularz" />
                    </div>
                </form>
            </div>
        </ContactSection>
    )
}

export default Contact;