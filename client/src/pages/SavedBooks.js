import React, { useState } from 'react';
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

  const { loading, data, refetch, error } = useQuery(GET_ME);

  const [removeBook] = useMutation(REMOVE_BOOK);

  let userData = data?.me || {}; // Default value in case data.me is undefined

  const handleDeleteBook = async (bookId) => {
    console.log("delete clicked");
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    try {
      const { data } = await removeBook({ variables: { id: bookId } });

      refetch();
      userData = data?.me || {};

      removeBookId(data.removeBook.bookId);

      // to reload so that it can refresh the page
      //window.location.reload();

    } catch (err) {
      console.error(err);
    }
  };


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
                  <Button className='btn-block btn-danger' onClick={() => { console.log("BOOK"); console.log(book); console.log(book._id); handleDeleteBook(book._id) }}>
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
