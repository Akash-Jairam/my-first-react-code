import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
	return(
		<div className="ui container comments">
			<ApprovalCard>
			<CommentDetail 
				author="Rexo" 
				timeAgo="Today at 4:45pm" 
				comment="Yoooo" 
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail 
				author="Toby" 
				timeAgo="Today at 5pm" 
				comment="This is sooo coool" 
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>

			<ApprovalCard>
			<CommentDetail 
				author="Leo" 
				timeAgo ="Yesterday at 2pm" 
				comment="Hiiiii" 
				avatar={faker.image.avatar()}
			/>
			</ApprovalCard>
		</div>
	) 
};

ReactDOM.render(<App/>, document.querySelector('#root'));