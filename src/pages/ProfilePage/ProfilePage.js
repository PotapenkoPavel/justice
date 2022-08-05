import Title from '../../components/Title/Title';
import AuthorCard from '../../components/AuthorCard/AuthorCard';
import Input from '../../components/Input/Input';

import './ProfilePage.sass';

const ProfilePage = () => (
  <main className="profile-page">
    <div className="container">
      <Title type="h2">Profile</Title>

      <section className="profile-page__content"> 
        <div className="profile-page__user">
          <AuthorCard
            img="/images/avatar11.png"
            name="Janay Wright"
            description="Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu."
          />
        </div>
        <div className="profile-page__info">
          <div>
            <Input.Simple label="First name" />
            <Input.Simple label="Last name" />
            <Input.Simple label="Description" />
          </div>      
        </div>
      </section>
    </div>
  </main>
);

export default ProfilePage;
