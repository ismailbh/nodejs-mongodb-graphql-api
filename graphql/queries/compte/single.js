import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import { compteType } from '../../types/compte';
import compteModel from '../../../models/compte';

export default {
	type: compteType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	resolve(root, params) {
		return compteModel.findById(params.id).exec();
	}
}
