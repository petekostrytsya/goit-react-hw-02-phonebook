import PropTypes from 'prop-types';
import { ContactItem, ContactName, ContactNumber, Button } from './Statistics.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
    return (
        <ContactItem key={id}>
            <ContactName>
                {name}:
                <ContactNumber>{number}</ContactNumber>
            </ContactName>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
        </ContactItem>
    )
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};