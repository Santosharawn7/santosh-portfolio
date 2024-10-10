import { data } from "autoprefixer";
import emailjs from "emailjs-com";
 
 
export const sendEmailConfirmation = async (
    email, firstName, subject
) => {
 
    const templateParams = {
        to_name: firstName,
        subject: subject,
        to_email: email,
        message: `Thank you ${firstName} for reaching out to us. We will get back to you as soon as possible.`
    }
 
    return emailjs.send(
        "service_u1hr2f8",
        "template_l6v7dfi",
        templateParams,
        "MQR592E_OOYAeYUlc"
    ).then((response) => {
        console.log(data)
        return {
            status: response.status,
            data: response.data
        }
    }).catch((error) => {
        return {
            status: error.status,
            data: error.data
        }
    });
}
