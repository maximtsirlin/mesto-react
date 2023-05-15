import PopupWithForm from './PopupWithForm';

function EditProfile(props) {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      title={'Редактировать профиль'}
      name={'edit-profile'}
      buttonText={'Сохранить'}
      children={
        <>
          
            <div className="form__section">
              <input
                id="input_element-user"
                className="form__input form__input_name"
                type="text"
                name="name"
                placeholder="Имя пользователя"
                minLength="2"
                maxLength="40"
                autoComplete="off"
                required
                defaultValue="" 

              />
              <span className="form__input-error form__input-error_active"></span>
            </div>

            <div className="form__section">
              <input
                id="input_element-about"
                className="form__input form__input_job"
                type="text"
                name="job"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                autoComplete="off"
                required
                defaultValue="" 
              />
              <span className="form__input-error form__input-error_active"></span>
            </div>
          
        </>
      }
    />
  );
}

export default EditProfile;
