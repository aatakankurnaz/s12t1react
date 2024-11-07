import { Form, Button } from 'react-bootstrap';

export const ContactForm = () => {
    return (
        <div className="flex flex-col max-w3xl p-4 items-center">
            <Form>
                <Form.Group className="mb-4" controlId="name">
                    <Form.Label>İsim:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="İsminizi giriniz." 
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md" 
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="surname">
                    <Form.Label>Soyisim:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Soyisminizi giriniz." 
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md" 
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Mail adresinizi giriniz." 
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md" 
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="idea">
                    <Form.Label>Fikirleriniz ve Önerileriniz:</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Lütfen fikir ve önerilerinizi yazınız." 
                        rows={4}
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md resize-none" 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
