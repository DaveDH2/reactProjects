import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

var Tweet = React.createClass({
    render: function() {
        var {
            tweet: {
                gravatar,
                author,
                timestamp,
                message,
                retweets,
                likes
            }
        } = this.props;
        return (
            <div className="tweet">
        <Avatar hash={gravatar} />
        <div className="content">
          <NameWithHandle author={author} />
          <Time time={timestamp} />
          <Message text={message} />
          <div className="buttons">
            <ReplyButton />
            <RetweetButton count={retweets}/>
            <LikeButton count={likes}/>
            <MoreOptionsButton />
          </div>
        </div>
      </div>
        )
    }
});

var testTweet = {
    message: "Something about cat, they just make me scream inside.",
    gravatar: "db0d80e8ebd466e2f40d270f437602ad",
    author: {
        handle: "animalLover",
        name: "IAMA Cat Person"
    },
    likes: 2,
    retweets: 4,
    timestamp: "2016-07-30 21:24:37"
};

var Avatar = React.createClass({
    render: function() {
        var hash = this.props.hash;
        var url = `https://www.gravatar.com/avatar/${hash}`;
        console.log(hash, url)
        return (
            <img src={url}
        className="avatar"
        alt="avatar" />
        );
    }
});

var Message = React.createClass({
    render: function() {
        return (
            <div className="message">
        {this.props.text}
      </div>
        );
    }
});

var NameWithHandle = React.createClass({
    render: function() {
        var {
            name, handle
        } = this.props.author;
        return (
            <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
      </span>
        )
    }
});

var Time = React.createClass({
    computeTimeString: function() {
        return moment(this.props.time).fromNow();
    },
    render: function() {
        return (
            <span className="time">{this.computeTimeString()}</span>
        )
    }
});

var ReplyButton = React.createClass({
    render: function() {
        return (
            <i className="fa fa-reply reply-button" />
        );
    }
});

var RetweetButton = React.createClass({
    getCount: function() {
        if (this.props.count > 0) {
            return (
                <span className="retweet-count">
          {this.props.count}
        </span>
            );
        } else {
            return null;
        }
    },
    render: function() {
        return (
            <span className="retweet-button">
        <i className="fa fa-retweet" />
        {this.getCount()}
      </span>
        )
    }
});

var LikeButton = React.createClass({
    render: function() {
        var {
            count
        } = this.props;
        return (
            <span className="like-button">
        <i className="fa fa-heart"/>
        { count > 0 ? <span className="like-count">{count}</span> : null}
      </span>
        );
    }
});


var MoreOptionsButton = React.createClass({
    render: function() {
        return (
            <i className="fa fa-ellipse-h more-options-button"/ >
        )
    }
});

ReactDOM.render(
    <Tweet tweet={testTweet} />,
    document.getElementById('root')
);
