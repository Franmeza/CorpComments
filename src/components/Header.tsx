import FeedbackForm from "./FeedbackForm";

type HeaderProps = {
  handdleAddToList: (text: string) => void;
};

function Header({ handdleAddToList }: HeaderProps) {
  return (
    <header>
      <img
        src="https://bytegrad.com/course-assets/js/1/pattern.svg"
        alt="pattern"
        className="pattern"
      />
      <a href="/" className="logo">
        <img
          src="https://bytegrad.com/course-assets/js/1/logo.svg"
          alt="logo"
        />
      </a>
      <h1>
        Give Feedback. <span>Publicly.</span>
      </h1>
      <FeedbackForm onAddToList={handdleAddToList} />
    </header>
  );
}

export default Header;
