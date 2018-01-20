import {
	GraphQLList
} from 'graphql'
import { compteType } from '../../types/compte'
import compteModel from '../../../models/compte'

export default {
	type: new GraphQLList(compteType),
	resolve() {
		const comptes = compteModel.find().exec()
		if (!comptes) {
			throw new Error('Error getting comptes')
		}
		return comptes
	}
}
