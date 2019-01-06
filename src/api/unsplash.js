import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID 0c72b7ee8f77e84cd2357108d33467086fb92a4a98d77fc736eb3eabe04e6d60'
	}
});