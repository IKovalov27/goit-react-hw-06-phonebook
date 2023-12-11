import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';

import { Button, Container, Wrapper } from './Contact.styled';
import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Container>
      <Wrapper>
        <FaUserAlt className={css.icon} />
      </Wrapper>
      {name}: {number}
      <Button type="button" onClick={handleDelete}>
        <FaTrashAlt />
      </Button>
    </Container>
  );
};