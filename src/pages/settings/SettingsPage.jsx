const SettingsPage = () => {
  return (
    <div>
      {/* account settings */}
      <div className="user-view__content">
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
          <form className="form form-user-data">
            <div className="form__group">
              <label className="form__label" htmlFor="name">
                Name
              </label>
              <input className="form__input" id="name" type="text" required="required" name="name" />
            </div>
            <div className="form__group ma-bt-md">
              <label className="form__label" htmlFor="email">
                Email address
              </label>
              <input className="form__input" id="email" type="email" required="required" name="email" />
            </div>
            <div className="form__group form__photo-upload">
              <img className="form__user-photo" src="" alt="User photo" />
              <input className="form__upload" type="file" accept="image/*" id="photo" name="photo" />
              <label htmlFor="photo">Choose new photo</label>
            </div>
            <div className="form__group right">
              <button className="btn btn--small btn--green">Save settings</button>
            </div>
          </form>
        </div>
        <div className="line">&nbsp;</div>
      </div>

      {/* password settings */}
      <div className="user-view__form-container">
        <h2 className="heading-secondary ma-bt-md">Password change</h2>
        <form className="form form-user-password">
          <div className="form__group">
            <label className="form__label" htmlFor="password-current">
              Current password
            </label>
            <input className="form__input" id="password-current" type="password" placeholder="••••••••" required="required" minLength={8} />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="password">
              New password
            </label>
            <input className="form__input" id="password" type="password" placeholder="••••••••" required="required" minLength={8} />
          </div>
          <div className="form__group ma-bt-lg">
            <label className="form__label" htmlFor="password-confirm">
              Confirm password
            </label>
            <input className="form__input" id="password-confirm" type="password" placeholder="••••••••" required="required" minLength={8} />
          </div>
          <div className="form__group right">
            <button className="btn btn--small btn--green btn--save-password">Save password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;
