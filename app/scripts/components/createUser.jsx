var React = require('react');

var UserCreationContainer = React.createClass({
  render: function(){
    return (
      <div>
        <div className="well">
          <h1>Syndicator</h1>
          <h4>Creating your Account</h4>
        </div>
        <div className="row">
          <div className="col-sm-5 col-sm-offset-1 col-xs-10 col-xs-offset-1">
            <form id="user-creation-form" encType="multipart/form-data/">

              <div className="form-group">
                <label htmlFor="first-name-input">Name</label>
                <input className="form-control" id="first-name-input" type="text" name="first-name" placeholder="First" required />
                <input className="form-control" id="last-name-input" type="text" name="last-name" placeholder="Last" required />
              </div>

              <div className="form-group">
                <label htmlFor="avatar-input">Avatar</label>
                <input className="form-control" id="avatar-input" type="file" name="avatar" />
              </div>

              <div className="form-group">
                <label htmlFor="company-input">Company</label>
                <input className="form-control" id="company-input" type="text" name="company" />
              </div>

              <div className="form-group">
                <label htmlFor="email-input">Email</label>
                <input className="form-control" id="email-input" type="email" name="email" placeholder="example@test.com" />
              </div>

              <input className="btn btn-info" type="submit" name="submit" value="Create Account" />

            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  UserCreationContainer: UserCreationContainer
};
