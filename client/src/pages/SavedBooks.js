import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import { GET_ME } from '../utils/queries';
import { REMOVE_BOOK } from '../utils/mutations';

import { deleteBook as deleteBookAPI } from '../utils/API'; // Rename to avoid conflict
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';

const SavedBooks = () => {



  const token = Auth.loggedIn() ? Auth.getToken() : null;
  console.log(token);

  const { loading, data, error } = useQuery(GET_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);

  console.log("Error:", error);
  console.log("data");
  console.log(data);
  const userData = data?.me || {}; // Default value in case data.me is undefined
  console.log(userData);

  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({ variables: { bookId } });
      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(loading);
  console.log(userData);
  console.log(userData.savedBooks);

  if (loading || !userData.savedBooks) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <Row>
          {userData.savedBooks.map((book) => (
            <Col md="4" key={book.bookId}> {/* Moved the key prop here */}
              <Card border='dark'>
                {book.image && <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SavedBooks;
