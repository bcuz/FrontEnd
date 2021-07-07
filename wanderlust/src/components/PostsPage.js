import React from 'react'
import dummyData from '../dummyData';
import SearchBar from './SearchBar'
import PostsContainer from './TourContainer'

class PostsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			filteredPosts: [],
		}
	}

	componentDidMount() {
		this.setState({ posts: dummyData })
	}

	render() {
		return (
			<div className="App">
				<SearchBar />
				<PostsContainer
					posts={
						this.state.filteredPosts.length > 0
							? this.state.filteredPosts
							: this.state.posts
					}
				/>
			</div>
		);
	}
}

export default PostsPage