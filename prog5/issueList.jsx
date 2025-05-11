import React from 'react'

const issues = [
  {id:1,title:'Bug in login',description:'Error 404 on login',status:'open'},
  {id:2,title:'UI issue in dashboard',description:'Misaligned elements',status:'closed'},
  {id:3,title:'API Timeout',description:'Delayed response from server',status:'open'}
];

function IssueList() {
  return (
    <div>
      <h1>Issue Tracker</h1>
      <ul>
        {issues.map(issue=>(
          <li key={issue.id}>
            <h2>{issue.title}</h2>
            <p>{issue.description}</p>
            <p>Status : {issue.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default IssueList;