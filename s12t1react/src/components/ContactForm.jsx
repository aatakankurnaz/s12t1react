import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { locales } from '../locales/locales';

export const ContactForm = () => {

    const currentLanguage = useSelector((state) => state.language); 

 
  const getLocalizedText = (key) => {
    return locales[currentLanguage][key]; 

  };
    return (
        <div className="flex flex-col max-w3xl p-4 items-center dark:bg-gray-900">
            <Form>
                <Form.Group className="mb-4" controlId="name">
                    <Form.Label>{getLocalizedText("formname")}:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder={getLocalizedText("formnameph")}
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md" 
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="surname">
                    <Form.Label>{getLocalizedText("formsurname")}:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder={getLocalizedText("formsurnameph")} 
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md" 
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="email">
                    <Form.Label>{getLocalizedText("formemail")}:</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder={getLocalizedText("formemailph")}
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md" 
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="idea">
                    <Form.Label>{getLocalizedText("formidea")}</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder={getLocalizedText("formideaph")}
                        rows={4}
                        className="w-full sm:w-1/2 p-2 border border-gray-300 rounded-md resize-none" 
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                {getLocalizedText("formsubmit")}
                </Button>
            </Form>
        </div>
    );
}
