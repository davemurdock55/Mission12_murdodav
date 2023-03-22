import React, { Component } from 'react';

// these are the properties I'm passing in and they're types
export default class Team extends Component < { school: string, name: string, city: string, state: string } >
{
   render()
   {


      const team = this.props;

      return (
         <div>
            <div className="card text-white bg-primary mb-3" style={{ maxWidth: '20rem' }}>
               <div className="card-header"><b>{team.school}</b></div>
               <div className="card-body">
                  <h4 className="card-title">{team.name}</h4>
                  <h5 className="card-text text-secondary">{team.city}, {team.state}</h5>
               </div>
            </div>
         </div>
      );
   }
}