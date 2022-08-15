import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';

import { deleteUserAvatar, updateUserAvatar, updateUserInformation } from '../../redux/actionCreators/user';

import './ProfilePage.sass';

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [description, setDescription] = useState(user.description);

  const saveChanges = () => {
    dispatch(updateUserInformation(firstName, lastName, description, user._id, token));
  };

  const changeAvatarHandler = (e) => {
    const file = e.target.files[0];

    dispatch(updateUserAvatar(user._id, file, token));
  };

  const deleteAvatarHandler = () => {
    dispatch(deleteUserAvatar(user._id, token));
  };

  return (
    <main className="profile-page">
      <Container>
        <Title type="h2">Profile</Title>

        <section className="profile-page__content">
          <div className="profile-page__user">
            <AuthorCard
              img={
              user.avatar
                ? `data:${user.avatar.contentType};base64, ${user.avatar.imageBase64}`
                : '/images/avatar123.jpg'
            }
            >
              <Button mix="profile-page__change-avatar" variant="outline">
                <label>
                  Change photo
                  <input
                    type="file"
                    onChange={changeAvatarHandler}
                    accept="image/png,image/jpg,image/jpeg"
                    hidden
                  />
                </label>
              </Button>
              <Button
                mix="profile-page__delete-avatar"
                variant="link"
                onClick={deleteAvatarHandler}
              >
                Delete photo
              </Button>
            </AuthorCard>
          </div>
          <div className="profile-page__info">
            <div className="profile-page__name-wrapper">
              <Input
                label="First name"
                placeholder="Enter the first name..."
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                label="Last name"
                placeholder="Enter the last name..."
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="profile-page__description-wrapper">
              <Textarea
                value={description}
                label="Description"
                placeholder="Enter the description..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <Button onClick={saveChanges}>Save Changes</Button>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default ProfilePage;
