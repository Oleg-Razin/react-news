import { useDispatch } from 'react-redux';
import { signIn } from '../features/userSlice';
import { getPost } from '../features/postSlice';
import { LOGIN } from './correctLogin';
import { PASSWORD } from './correctLogin';

export function Storages(){
	localStorage.setItem('user', LOGIN);
	localStorage.setItem('password', PASSWORD);
	localStorage.setItem('auth', '');
	const auth = localStorage.getItem('auth');
	const checkPost = localStorage.getItem('post')
	const dispatch = useDispatch();
	if (auth){
		dispatch(signIn({
			userName: localStorage.getItem('user'),
			password: localStorage.getItem('password'),
			loginedIn: localStorage.getItem('auth'),
		}))
	}
	if (checkPost){
		const article = JSON.parse(checkPost);
		dispatch(getPost({article}));
	}
}