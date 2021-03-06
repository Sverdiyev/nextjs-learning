import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    console.log(data);

    router.push('/');
  };
  return (
    <>
      <Head>
        <title>New Meetup </title>

        <meta name='description' content='browse these meetups pls' />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
