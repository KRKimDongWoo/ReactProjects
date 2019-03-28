import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/* Tutorial 1 from here */
function formatDate(date) {
	return date.toLocaleDateString();
}

function Avatar(props) {
	return (
		<img
			className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name}
			width={300}
			height={300}
		/>
	);
}

function UserInfo(props) {
	return (
		<div className="UserInfo">
			<Avatar user={props.user} />
			<div className="UserInfo-name">
				<h1> {props.user.name} </h1>
			</div>
		</div>
	);
}

function Comment(props) {
	return (
		<div className="Comment">
			<UserInfo user={props.author} />
			<div className="Comment-text">
				<h2> {props.text} </h2>
			</div>
			<div className="Comment-date">
				{formatDate(props.date)}
			</div>
		</div>
	);
}

const comment = {
	date: new Date(),
	text: 'I am learning React!',
	author: {
		name: 'Marcus',
		avatarUrl: 'https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/36048268_2127048274176189_8193503050380345344_n.jpg?_nc_cat=107&_nc_ht=scontent-icn1-1.xx&oh=8d01bbd0bd451ffd96af19813caf23a8&oe=5D4928C9',
	},
};
/* Tutorial 1 ends here */

/* Tutorial 2 from here */
function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}


class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<FormattedDate date={this.state.date} />
			</div>
		);
	}
}
/* tutorial 2 ends here */

/* Tutorial 3 from here */
class Toggle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		/* 
		 * This binding is necessary to make 
		 * `this` work in the callback
		 */
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick() {
		this.setState(state => ({
			isToggleOn: !state.isToggleOn
		}));
	}
	
	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		);
	}
}

class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
/* tutorial 3 ends here */

/* tutorial 4 starts here */
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
	const isLoggedIn = props.isLoggedIn;

	if(isLoggedIn) {
		return <UserGreeting />;
	}
	else {
		return <GuestGreeting />;
	}
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}

class LoginControl extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({isLoggedIn: true});	
	}

	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;
		let button;

		if(isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick}/>;
		}
		else {
			button = <LoginButton onClick={this.handleLoginClick}/>;
		}

		return (
			<div>
				<Greeting isLoggedIn={isLoggedIn} />
				{button}
			</div>
		);
	}
}

/* tutorial 4 ends here */

/* tutorial 5 starts here */

function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}
	
	return (
		<div className="warning">
			Warning!
		</div>
	);
}

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showWarning: true};
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}
	
	handleToggleClick() {
		this.setState(state => ({
			showWarning: !state.showWarning
		}));
	}

	render() {
		return (
			<div>
				<WarningBanner warn={this.state.showWarning} />
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
			</div>
		);
	}
}


/* tutorial 5 ends here */

/* tutorial 6 starts here */
const tut_6 = [1, 2, 3, 4, 5];

function ListItem(props) {
	// Correct! There is no need to specify the key here:
	return <li>{props.value}</li>;
}

function NumberList(props) {
	const numbers = props.numbers; 
	return (
		<ul>
			{numbers.map((number) =>
				// Correct! Key should be specified inside the array.
				<ListItem 
					key={number.toString()}
					value={number} 
				/>
			)}
		</ul>
	);
}

const posts = [
	{id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
	{id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
	
	const sidebar = (
		<ul>
			{props.posts.map((post) =>
				<li key={post.id}>
					{post.title}
				</li>
				)}
		</ul>
	);

	const content = props.posts.map((post) =>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	);

	return (
		<div>
			{sidebar}
			<hr />
			{content}
		</div>
	);
}


function App() {
	return (
		<div>
			<h1> Tutorial 1 : Comment </h1>
			<Comment
				date={comment.date}
				text={comment.text}
				author={comment.author}
			/>
			<hr />
			<h1> Tutorial 2 : Clock </h1>
			<Clock />
			<hr />
			<h1> Tutorial 3 : Toggle, LoggingButton </h1>
			<Toggle />
			<LoggingButton />
			<hr />
			<h1> Tutorial 4 : LoginControl </h1>
			<LoginControl />
			<hr />
			<h1> Tutorial 5 : Page </h1>
			<Page />
			<hr />
			<h1> Tutorial 6 : NumberList </h1>
			<NumberList 
				numbers={tut_6}
			/>
			<hr />
			<h1> Tutorial 7 : Blog </h1>
			<Blog posts={posts} />
		</div>
	);
}

export default App;
