import styled from "styled-components";

const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 20rem;
  margin-bottom: 8rem;
`;

const ContactBox = styled.div`
  display: flex;
  justify-content: center;
`;

const AboutHeader = styled.div`
  h2 {
    font-size: 2.6rem;
    text-align: center;
    margin-bottom: 5rem;
  }
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  svg {
    width: 2rem;
    margin-right: 1.5rem;
  }
`;
const PhoneNum = styled.span`
  display: flex;
  align-items: center;
  margin: 2rem;
`;
const Email = styled.span`
  display: flex;
  align-items: center;
  margin: 2rem;
`;

function Contact() {
  return (
    <ContactArea>
      <AboutHeader>
        <h2>Contact</h2>
      </AboutHeader>
      <ContactBox>
        <ContactText>
          <PhoneNum>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" />
            </svg>
            <p>010-7767-4295</p>
          </PhoneNum>
          <Email>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" />
            </svg>
            <p>gmldnjseocnd@gmail.com</p>
          </Email>
        </ContactText>
      </ContactBox>
    </ContactArea>
  );
}

export default Contact;
