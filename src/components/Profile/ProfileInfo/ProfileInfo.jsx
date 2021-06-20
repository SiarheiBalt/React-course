import { Preloader } from "../../Common/Preloader/Preloader";
import styled from "styled-components";

const ProfileInfo = ({ profile }) => {
  if (!profile) return <Preloader />;

  return (
    <Wrapper>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/66lRNN2kfHcVSUMrmrcKxf/76b78071032586ff9766d8eb51592f21/free-nature-images.jpg?fit=fill&w=840&h=350" />
      </div>
      <div className="descr__block">
        <img src={profile.photos.large} />
        <div className="profile">
          <h5>{profile.fullName}</h5>
          <div>{profile.aboutMe}</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileInfo;

const Wrapper = styled.div`
  .descr__block {
    display: flex;
    padding: 10px;
  }
  .descr__block img {
    width: 120px;
  }
  .profile {
    margin-left: 20px;
  }
`;
