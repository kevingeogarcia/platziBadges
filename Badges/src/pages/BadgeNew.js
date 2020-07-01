import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import md5 from 'md5';
import api from '../api';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleSubmit = async e =>{
    e.preventDefault();
    this.setState({loading:true,error:null});
    try{
      api.badges.create(this.state.form)
      this.setState({loading:false});
    }catch (error)
    {
      this.setState({loading:false,error:error});
    }
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
        avatarUrl : `https://www.gravatar.com/avatar/${md5(this.state.form.email)}?d=identicon`,
      },
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="BadgeNew__hero-img img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST_NAME'}
                lastName={this.state.form.lastName || 'LAST_NAME'}
                twitter={this.state.form.twitter|| 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://s.gravatar.com/avatar/70ab13d06f98d1996bb6cc2a7e44ff87?s=80"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
