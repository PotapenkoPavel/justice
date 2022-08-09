import { useState } from 'react';

import { Button } from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import Input from '../../components/Input/Input';

import './ProfilePage.sass';

const ProfilePage = () => {
  const { user, token } = JSON.parse(localStorage.getItem('auth'));

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [description, setDescription] = useState('');

  const saveChanges = () => {
    localStorage.setItem('auth', JSON.stringify({
      token,
      user: {
        ...user, firstName, lastName, description,
      },
    }));
  };

  return (
    <main className="profile-page">
      <div className="container">
        <Title type="h2">Profile</Title>

        <section className="profile-page__content">
          <div className="profile-page__user">
            <AuthorCard
              img="/images/avatar11.png"
            >
              <Button mix="author-card__button" theme="outline">Change photo</Button>
              <Button mix="author-card__link" theme="link">Delete photo</Button>
            </AuthorCard>
          </div>
          <div className="profile-page__info">
            <div className="profile-page__name-wrapper">
              <Input label="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <Input label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="profile-page__description-wrapper">
              <Input.Textarea
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <Button theme="primary" onClick={saveChanges}>Save Changes</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProfilePage;
