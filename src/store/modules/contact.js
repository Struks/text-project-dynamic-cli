const state = {
    
    googleShot:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1277.788937247671!2d-82.35576789251799!3d23.14456388617537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd79b20a46e4f9%3A0xe0f0dc692e6d4ad5!2sMaximo+Gomez+Monument!5e0!3m2!1sen!2s!4v1550843672057',

    //contact info
    subtitle:'CONTACT INFO',
    storeHours: 'STORE HOURS',
    informations: 'For more information you can contact us on E-mail, phone or visit us on address.',
    email: 'info@bild-studio.net',
    phone: '+382 67 333 222',
    street: 'st. Romanovih 36',
    ZIP: '80000 Podogorica',
    workDays: 'Monday-Friday',
    workTime: '8 am - 6 pm',
    noWork: 'Weekend & Holidays',
    noTime: 'Closed',

    //contact form
    paragraph: "Be sure to use an appropriate type attribute on all inputs (e.g., email for email address or number for numerical information) to take advantage of newer input controls like email verification, number selection, and more.",
    subTitle: "contact form",
    form: {
        name: "",
        email: "",
        subject: "",
        textarea: "",
    },
    src:'/img/mail.gif', 
    

}

const getters = {
 
    googleShot: state => state.googleShot,

    //contact info
    subtitle: state => state.subtitle,
    storeHours: state => state.storeHours,
    informations: state => state.informations,
    email: state => state.email,
    phone: state => state. phone,
    street: state => state.street,
    ZIP: state => state.ZIP,
    workDays: state => state.workDays,
    workTime: state => state.workTime,
    noWork: state => state.noWork,
    noTime: state => state.noTime,

    //contact form
    paragraph: state => state.paragraph,
    subTitle: state => state.subTitle,
    form: state => state.form,
    src: state => state.src,
}

const mutations = {
  
}


export default{
    state,
    getters,
    mutations
}


