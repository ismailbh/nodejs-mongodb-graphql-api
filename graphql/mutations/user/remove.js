import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

// import { postType } from '../../types/post'
// import UserModel from '../../../models/post'

import { userType, userInputType } from '../../types/user';
import UserModel from '../../../models/user';


export default {
	type: userType,
	args: {
		id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		const removeduser = UserModel.findByIdAndRemove(params.id).exec();
		if (!removeduser) {
			throw new Error('Error removing user')
		}
		return removeduser;
	}
}
