function Main(props) {
    const { onEditAvatar, onEditProfile, onAddPlace } = props;
    return (
      <main className="content">
        {/* <!-- profile --> */}
        <section className="profile">
          
            <img
              src="#"
              alt="Фотография профиля"
              className="profile__image"
            />
            <button
              type="button"
              className="profile__image-overlay profile__image"
              aria-label="Изменить фото"
              onClick={onEditAvatar}
            ></button>
         

          <div className="profile__item">
            <div className="profile__form">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button
                className="profile__button-edit profile__icon"
                type="button"
                onClick={onEditProfile}
              ></button>
            </div>
            <p className="profile__description">Исследователь океана</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            onClick={onAddPlace}
          ></button>
        </section>
  
        {/* <!-- Elements --> */}
        <section
          className="elements"
          aria-label="elements"
        >
          <ul className="cards"></ul>
        </section>
      </main>
    );
  }
  
  export default Main;