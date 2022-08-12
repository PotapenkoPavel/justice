import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import Input from '../../components/Input/Input';

import './ProfilePage.sass';
import { deleteUserAvatar, updateUserAvatar, updateUserInformation } from '../../redux/actionCreators/user';

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

    dispatch(updateUserAvatar(file, user._id, token));
  };

  const deletePhotoHandler = () => {
    dispatch(deleteUserAvatar(user._id, token));
  };

  return (
    <main className="profile-page">
      <div className="container">
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
              <Button mix="author-card__button" theme="outline">
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
              <Button mix="author-card__link" theme="link" onClick={deletePhotoHandler}>Delete photo</Button>
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
