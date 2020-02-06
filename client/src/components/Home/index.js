import React from 'react';
import './home.scss';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      companies: [],
      employees: [],
    };
  }

  componentDidMount() {
    fetch('api/company')
      .then(res => res.json())
      .then(companies => this.setState({companies}, () => console.log('users fetched...', companies)));

    fetch('api/employee')
    .then(res => res.json())
    .then(employees => this.setState({employees}, () => console.log('users fetched...', employees)));
  }

  render() {
    return (
      <>
        <div className="block">
          <h2>Companies</h2>
          <ul>
            {this.state.companies.map(company => 
              <li key={company.id}>{company.id} | { company.name }</li>
            )}
          </ul>
        </div>

        <div className="block">
          <h2>Employees</h2>
          <ul>
            {this.state.employees.map(employee => 
              <li key={employee.id}>{ employee.name }</li>
            )}
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
