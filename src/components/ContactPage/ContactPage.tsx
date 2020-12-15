import React from 'react'
import { Formik, Field, Form, FormikHelpers} from 'formik'

interface formValues {
    firstName:string;
    lastName:string;
    email:string;
    subject:string;
    comments:string;
}


export const ContactPage:React.FC = () => {
    return (
        <div className="h-screen bg-blue-line-wave bg-cover flex justify-center">
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    subject:"",
                    comments: ""
                }}
                onSubmit={(
                    values:formValues,
                    { setSubmitting, resetForm }:FormikHelpers<formValues> 
                ) => {
                    console.log(values)
                    fetch("https://formspree.io/f/mrgoydgj", {
                        method: "POST",
                        headers: {
                            "Accept" : "Application/json"
                        },
                        body: JSON.stringify(values)
                    }).then(response => response.json())
                        .then(console.log)
                    resetForm()
                }
            }
            >
                <Form className="p-6 my-10">
                    <p className="text-2xl text-gray-700">Contact Me!</p>
                    <div className="flex space-x-5 mt-3">
                        <Field 
                            className="border p-2 w-1/2 rounded-lg" 
                            id="firstName" 
                            name="firstName" 
                            type="text" 
                            placeholder="First Name" 
                        />
                        <Field 
                            className="border rounded-lg p-2 w-1/2" 
                            id="lastName" 
                            name="lastName" 
                            placeholder="Last Name" 
                        />
                    </div>
                    <Field 
                        className="border rounded-lg block w-full p-2 mt-3"
                        id="email" 
                        name="email" 
                        placeholder="Your Email" 
                        type="email" 
                    />
                    <Field 
                        className="border rounded-lg block w-full p-2 mt-3"
                        id="subject" 
                        name="subject" 
                        placeholder="Subject" 
                        type="text" 
                    />
                    <Field 
                        className="border rounded-lg block w-full h-1/4 mt-3" 
                        id="comments" 
                        name="comments" 
                        as="textarea"
                        placeholder="What can I do for you?"
                    />
                    <div className="flex justify-end" >
                        <button 
                            className="border rounded-lg p-2 bg-gray-400 mt-2 w-full ju" 
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
